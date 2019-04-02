const Package = require('../package.json');

module.exports = {
  package: {
    name: Package.name,
    version: Package.version,
    description: Package.description,
    main: Package.main,
    repository: Package.repository,
    author: Package.author,
    license: Package.license,
    bugs: Package.bugs,
    homepage: Package.homepage,
    keywords: Package.keywords,
    dependencies: {},
  },
};
