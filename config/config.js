var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'wedding'
    },
    port: 3000,
    db: 'mysql://root:@localhost/wedding'
  },

  test: {
    root: rootPath,
    app: {
      name: 'development'
    },
    port: 3000,
    db: 'mysql://localhost/development-test'

  },

  production: {
    root: rootPath,
    app: {
      name: 'wedding'
    },
    port: 3000,
    db: 'mysql://localhost/development-production'

  }
};

module.exports = config[env];
