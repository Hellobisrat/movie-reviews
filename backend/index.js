import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

async function  main() {
  dotenv.config()

  const client = new mongodb.MongoClient(
    process.env.DB_URI
  )
  console.log(client)
  const PORT = process.env.PORT || 8000;

  try {
    await client.connect()

    app.listen(PORT,()=>{
      console.log('server is running on port:'+PORT)
    })
  } catch (error) {
    console.error(error);
    process.exit(1)
  }
}

main().catch(console.error);
