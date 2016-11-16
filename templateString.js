

//通过反勾号可以实现多行字符串

let str=`this 
is 
template 
String`;
console.log(str);

// ES5 虽然可以通过 \ 来进行换行但是不会生成对应的换行符  必须要手写换行符才能实现这样的效果
let es5String='this\n\
is\n\
template\n\
String\n\
';

console.log(es5String);

let len=`a
b
c`;
// 上面实现了两次换行所以字符串的长度为5
console.log(len.length);


console.log(`this is "123" haha`);//true
console.log(`this is '123' haha`);//true
console.log(`this is "'123'" haha`);//true
console.log(`this is \`123\` haha`);// true 必须转义才能实现