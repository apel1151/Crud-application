import mongoose from 'mongoose';




const connection = async(username, password) =>{
    const URL = `mongodb://${username}:${password}@ac-xkeusnp-shard-00-00.nn23khv.mongodb.net:27017,ac-xkeusnp-shard-00-01.nn23khv.mongodb.net:27017,ac-xkeusnp-shard-00-02.nn23khv.mongodb.net:27017/crud-application?ssl=true&replicaSet=atlas-3pu9n1-shard-0&authSource=admin&retryWrites=true&w=majority`;
      try{
          await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})
          console.log('database connected successfully.');
      } catch(error){
        console.log("error while connecrting with database", error);
      }
}

export default connection;