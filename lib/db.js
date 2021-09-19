import { MongoClient } from 'mongodb'; //MongoClient helps establish a connection

export async function connectToDatabase() {
  //Need to insert connection string below
  const client = await MongoClient.connect(
    'mongodb+srv://pmvcosta:uNISyea3XvRf5L5x@cluster0.e1gtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );

  return client;
}
