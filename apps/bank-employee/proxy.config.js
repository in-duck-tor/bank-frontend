module.exports = [
  {
    context: ['/user'],
    target: 'http://89.19.214.8:6000',
    secure: false,
    pathRewrite: {
      '^/user': '',
    },
    logLevel: 'debug',
  },
  {
    context: ['/loans'],
    target: 'http://localhost:3000',
    secure: false,
    pathRewrite: {
      '^/loans': '',
    },
    logLevel: 'debug',
  },
];
