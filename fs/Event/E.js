// //Register Event
// const EventEmitter=require('events');
// const event=new EventEmitter();
// event.on("anjali",()=>{
//     console.log("this is my name");
// });
// event.emit("anjali");

//Register Event callback couple of time
// const EventEmitter=require('events');
// const event=new EventEmitter();
// event.on("anjali",()=>{
//     console.log("this is my name");
// });
// event.on("anjali",()=>{
//     console.log("Welcome ");
// });
// event.on("anjali",()=>{
//     console.log("anjali");
// });
// event.emit("anjali");
//Register Event with callback parameter
// const EventEmitter=require('events');
// const event=new EventEmitter();
// event.on("anjali",(e)=>{
//     console.log(e);
// });
// event.emit("anjali",50);
//-------------------------------------
const EventEmitter=require('events');
const event=new EventEmitter();
event.on("anjali",(e,m)=>{
    console.log(`number is:${e} massage is:${m}`);
});
event.emit("anjali",50,"Laxmi");

