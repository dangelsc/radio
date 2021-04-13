const { MongoClient } = require('mongodb');

let db;

MongoClient.connect('mongodb://localhost/dbhit', {useUnifiedTopology: true}, (err, client) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  db = client.db('dbhit');
  console.log('DB is connected')
});

const getConnection = () => {
  return db;
};

module.exports = {
  getConnection
};