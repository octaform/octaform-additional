export default {
  name: 'date',
  message: 'Please enter a valid date using the format {0}',
  paramType: String,
  fn: (value, element, param) => {
    const separatorSymbols = [/(\/)/, /(\.)/, /(-)/, /(\s)/];
    const separator = separatorSymbols.find(item => item.test(param));
    const format = param.split(separator);
    const input = value.split(separator);

    const yearFormat = ['YYYY', 'YY'];
    const monthFormat = ['MM', 'M'];
    const dayFormat = ['DD', 'D'];

    const validateYear = (inputYear, inputYearFormat) => {
      if (inputYearFormat === yearFormat[0]) return /^[1-9]\d{3}$/.test(inputYear);
      return /^[1-9]\d{1}$/.test(inputYear);
    };

    const validateMonth = (inputMonth, inputMonthFormat) => {
      if (inputMonthFormat === monthFormat[0]) return /^(0[1-9]|1[012])$/.test(inputMonth);
      return /^([1-9]|1[012])$/.test(inputMonth);
    };

    const validateDay = (inputDay, inputDayFormat, inputMonth, inputYear) => {
      const totalAmountOfDays = new Date(inputYear, inputMonth, 0).getDate();
      const day = (
        inputDayFormat === dayFormat[0]
          ? /^(0[1-9]|[12]\d|3[01])$/.test(inputDay)
          : /^([1-9]|[12]\d|3[01])$/.test(inputDay)
      );

      return day ? (inputDay <= totalAmountOfDays) : false;
    };

    const formatData = (inputValue, inputFormat) => ({
      value: inputValue,
      format: inputFormat
    });

    if (input.length === format.length) {
      const data = format.reduce((acc, item, index) => {
        const year = yearFormat.find(yr => yr === item);
        const month = monthFormat.find(mt => mt === item);
        const day = dayFormat.find(dy => dy === item);

        if (year) acc.year = formatData(input[index], year);
        if (month) acc.month = formatData(input[index], month);
        if (day) acc.day = formatData(input[index], day);
        return acc;
      }, {});

      const isValidFields = format.map((item, index) => {
        if (yearFormat.includes(item)) {
          return validateYear(input[index], item);
        } else if (monthFormat.includes(item)) {
          return validateMonth(input[index], item);
        } else if (dayFormat.includes(item)) {
          return (
            data.month
            && data.year
            && validateDay(input[index], item, data.month.value, data.year.value)
          );
        }

        return input[index] === item;
      });

      return !isValidFields.some(bool => !bool);
    }

    return false;
  },
};
