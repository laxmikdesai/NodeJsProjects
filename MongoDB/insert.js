var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
var url="mongodb://0.0.0.0:27017";
mongoClient.connect(url,function(err,database){
    if(err)
    {
        throw err;
    }
   var d= database.db("TTS");
   var t=d.collection("task");
   var c={_id:2,name:'laxmi', address:'puna',date:'2023-04-1'}
   t.insertOne(c,function(err,responce){
    if(err){
    throw err;
    }
    console.log("One record is inserted");
   database.close();
   });
   
});

