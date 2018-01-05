const Stack = require('../stack');
const runStackTests = require('../../../spec/stack');
const runVerifyClassTests = require('../../../spec/verifyClass');

describe('Stack', function () {
  runStackTests(Stack, true);
  runVerifyClassTests(Stack, 'es2015');
});
