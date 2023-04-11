const mongodb=require('mongodb');//import mangodb package
var MongoClient=mongodb.MongoClient;
var url="mongodb://0.0.0.0:27017";//connect with mongodb campass
MongoClient.connect(url,function(error,database){
    if(error){
        throw error;
    }
    var d=database.db("TTS");//create database
    d.createCollection("task",function(error,response){//table xreate
        if(error)
        {
                throw error;
        }
        console.log("collection is created");
        database.close();
    })

})
//-----------------------------------------------------------------------------------------
