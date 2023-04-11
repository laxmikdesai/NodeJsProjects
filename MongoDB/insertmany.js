const mongodb=require('mongodb');
var Mongoclient=mongodb.MongoClient;
var url="mongodb://0.0.0.0:27017";
Mongoclient.connect(url,function(err,database){
    if(err)
    {
        throw err;

    }
   var d= database.db("Student");
   
   var data=[{ _id:9,name:"puja"},{ _id:10,name:"Namrata"}];
 var t=d.collection("studentInfo");
  
   t.insertMany(data,function(err,responce)
   {
    if(err)
    {
        throw err;
    }
    console.log("all record inserted");
   })
//    database.close();
});
