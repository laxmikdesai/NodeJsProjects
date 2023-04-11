const mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url="mongodb://0.0.0.0:27017";
MongoClient.connect(url,function(err,dbms){
    if(err)
    {
        throw err;
    }
    var d=dbms.db("Student");
    var old={name:/puja/};
    var new1={$set:{name:"priyanka"}};
    var t=d.collection.updateOne("studentIinfo",old,new1,function(err,responce)
  //updeteOne we use to update one record
//    var t= d.collection("studentIinfo").updateMany(old,new1,function(err,responce)//updatemanu we use to update many record
   {
    if(err)
    {
        throw err;
    }
    console.log("record updated");
    dbms.close();
   })
})

