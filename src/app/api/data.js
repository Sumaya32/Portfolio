const { MongoClient } = require('mongodb');   
const client = new MongoClient('mongodb+srv://sumaya:Ikhouvanmijnmoeder1@cluster0.xyqngr3.mongodb.net');
// const client = new MongoClient(process.env.NEXT_PUBLIC_API_DBLINKKEY);


let data = {}
const Data = async ()=> {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db =  client.db('Portfolio');
    // const db =  client.db(process.env.NEXT_PUBLIC_DBKEY);

    const collection = db.collection('data');
    // const collection = db.collection(process.env.NEXT_PUBLIC_COLLECTIONKEY);


  
    try{
      // await collection.insertMany(users)
       data = await collection.find({}).toArray();
       if(data !== "" || [] || {} || null){ 
        return console.log("Data ", data) && client.close()
      }
       else  return console.log("Empty data ", data) && client.close()
   
  
    }catch{ (error) => console.log("Somthing went wrong with sendig the data ",error)}
   
    // the following code examples can be pasted here...
  
    // return console.log("dataBas ",collection);
  }
  
  Data();

  client.close();