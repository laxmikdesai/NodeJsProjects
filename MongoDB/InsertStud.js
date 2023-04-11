const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;
 var url="mongodb://0.0.0.0:27017";
 MongoClient.connect(url,function(err,database){
    if(err)
    {
        throw err;
    }
   var d= database.db("Student");

  var t=  d.collection("studentInfo");
  var c={_id:2,name:"Amruta"};
  t.insertOne(c,function(err,responce){
    if(err)
    {
        throw err;
    }
    console.log("record inserted");
  })
       
    })
