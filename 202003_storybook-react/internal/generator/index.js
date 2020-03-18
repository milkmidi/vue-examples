const componentGenerator = require('./components');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
};
