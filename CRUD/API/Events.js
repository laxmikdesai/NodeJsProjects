const EventEmitter=require('emitter');
const event=new EventEmitter();
event.on("anjali",()=>{
    console.log("this is my name");
});
event.emit("anjali");