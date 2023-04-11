const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;
var url="mongodb://0.0.0.0:27017";
// var url="mongodb://0.0.0.0:27017";
MongoClient.connect(url,function(err,database){
if(err)
{
    throw err;
}
var d=database.db("Student");
d.createCollection("studenInfo",function(err,responce)
{
    if(err)
    {
        throw err;
    }
    console.log("collection is created");
  
    database.close();
});
})