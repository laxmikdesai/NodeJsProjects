const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
var url="mongodb://0.0.0.0:27017";
MongoClient.connect(url,function(err,database){
    if(err){
        throw err;
    }
    var d=database.db("Student");
    //var n={name:"pooja"};
    var s={};
    // d.collection("studentIinfo").deleteOne(n,function(err,responce)
    d.collection("studentInfo").deleteMany(s,function(err,responce)
    {
        if(err)
        {
            throw err;
        }
        console.log("record deleted");
    })
})