let settings = require('./../libs/settings');
let Queue = require('bull');
console.log('redis', settings.bull.redis_url);

let testQueue = new Queue('error test', settings.bull.redis_url);

testQueue.add({foo: 'bar'}).then(job => {
  testQueue.close();
  process.exit(0);
}).catch(err => {
  console.error('err', err);
});

