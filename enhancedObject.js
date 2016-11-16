// 增强类

// 方法属性更加直接的声明

let obj={
    fn:function () {
        console.log('fn');
    },
    foo(){
        console.log('foo');
    }
}

obj.fn();
obj.foo();

// 属性名的省略定义

let fn=()=>{
    console.log('fn');
}

let a=123;

let bar={
    fn,
    a,
}

bar.fn()

// 可以修改实例的 __proto__ 属性的来让某一个实例直接成为一个类的实例

let ob=function(){
    this.say=function(){
        console.log(123);
    }
}

let a={};
a.__proto__=new ob();

a.say();

// 结构赋值 

let [a,b]=[1,2];
console.log(a,b);

let {a,b}={
    a:1,
    b:2,
}
console.log(a,b);

// 结合方法传参使用
const test=([a,b])=>console.log(a,b);
test([8,9]);

// 如果想要获取到执行位置的元素之后后面的全部获取可以使用...
const test=([a,b,...arr])=>console.log(a,b,arr);
test([8,9,11,12,13,14]);

// 同时也可以做值的交换

let a=1,b=2;
[a,b]=[b,a];
console.log(a,b);

// 同时的我们使用对象解构赋值的时候如果不想使用原来的属性名称作为现在的属性名称可以使用 :x 来进行别名的设置

const {a:leo}={a:'name'};
console.log(leo);

// 无法匹配的缺省值
// 如果解构赋值的时候的不确定返回的对象一定有某一个属性或值，可以设置一个默认的值，不然会赋值为undefined

const [a=1,b=2]=[];
console.log(a,b);
const {a,b='hello',c}={a:'leo',};
console.log(a,b,c);

// 同时也可以进行深度的解构赋值
const [a,{b,c}]=[1,{b:2,c:3}];
console.log(a,b,c);

// 其他的新特性 
/**
 * ES5 中添加的forEach 等数组方法 优点自带闭包同时也出现了一个新的问题就是无法使用 break continue 等控制语句使其跳出循环
 */

// 通过ES6的组合属性就能很好的解决这个问题

for( const [index,item] of [1,2,3,4,5,6,7,8,9].entries() ){
    if(item>5) break;
    console.log(item);
}

// 默认参数

const fn=(num=0)=>console.log(num);
fn();
fn(123);

// 默认的参数可以是引用类型的值

const obj={
    name:'leo',
    say(name=this.name){
        console.log(name);
    }
}

obj.say();
obj.say('hello');

// 剩余参数

function fn(){
    return ()=>console.log(arguments);
}

const fnn=fn(1,2,3,4);
fnn()

// 同时将方法的参数转换成为 数组也可以使用

function fn(){
    console.log(Array.from(arguments))
}

fn(1,2,3,4)

/**
 * 给方法传递参数在ES6 之前有两种实现函数调用的方法 apply call，两者的区别在于一个是将函数的参数通过数组传入，后者和之前一样一个一个的传递。但是上面的方法都可以修改其this 的指向。如果出现不修改this 指向，只将其传递参数的格式改变的时候就不是特比的友好了。
 * 
 */

function sum(...numbers){
    console.log(numbers);
    return numbers.reduce((content,num)=>content+num);
}

// 这个时候就是可以的不管是单个传入还是数组传入都不会出现任何的问题
console.log(sum(1,2,3,4))
console.log(sum(...[1,2,3,4]))