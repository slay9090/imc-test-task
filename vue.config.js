module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/imc-test-task/" : "/",

  lintOnSave: false,
  css: {
    extract: true,
  },
};
