let settings = require('./libs/settings');
let Queue = require('bull');
console.log('settings', settings.bull.redis_url);
let testQueue = new Queue('error test', settings.bull.redis_url);

// HANDLER
console.log('SETTING UP JOB HANDLER');
testQueue.process(function(job, done) {
  console.log('Starting Test Queue Handler', job.id);
  setTimeout(function() {
    console.log('Finishing Test Queue Handler');
    done();
  }, 60000);
});