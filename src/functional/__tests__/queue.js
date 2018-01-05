const Queue = require('../queue');
const runQueueTests = require('../../../spec/queue');
const runVerifyClassTests = require('../../../spec/verifyClass');

describe('Queue', function () {
  runQueueTests(Queue, false);
  runVerifyClassTests(Queue, 'functional');
});
