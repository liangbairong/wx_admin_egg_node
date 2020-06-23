'use strict';

module.exports = () => {
  const config = exports = {};
  config.CONST2 = 'const3';

  return {
    ...config,
  };
};

