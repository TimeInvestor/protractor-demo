// Tests for the calculator.
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    'test_control_flow.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};
