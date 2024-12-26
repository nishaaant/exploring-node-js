const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://learnnode-username:learnmongodb1@learnnode-cluster.jpymb.mongodb.net/';
const client = new MongoClient(url);

const dbName = 'sample_mflix';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('sessions');
  
    // the following code examples can be pasted here...
    const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());