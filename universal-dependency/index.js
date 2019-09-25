const { subDependency } = require("@gr2m/universal-sub-dependency");

module.exports = {
  dependency() {
    console.log('[@gr2m/universal-dependency] commonJS "main" entry point');
    subDependency();
  }
};
