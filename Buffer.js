const b=Buffer.alloc(10);

 b.write("hello");
console.log(b);
console.log(b.toString());
console.log(b.toJSON());