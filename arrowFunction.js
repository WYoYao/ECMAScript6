
//单一参数
const fn=foo=>`hello ${foo}`
// 常用用于过滤
let arr=[1,2,3,4,5,6];
arr=arr.filter(item=>item>2);
console.log(arr);

// 多参数单行函数

const fx=(a,b)=>a-b;

let arr1=[1,23,3,4,43,11];
arr1= arr1.sort((a,b)=>a-b);
console.log(arr1);

// 多行函数

const fz=(x,y)=>{
    return `hello ${x}${y}`;
}

fz('1','2');

const fv=()=>'hello World';
fv();

const names=['Tom','Herry','Jack','Leo','librey'];

const newSet=names
    .map((name,id)=>({
        name,
        id,
    }))
    .filter(item=>item.id%2==0)
    .map(item=>[item.name])
    .reduce((a,b)=>a.concat(b),[]);

console.log(newSet);

// 使用this 绑定上级作用域
let obj={
    name:'Leo',
    play:function(){
        return ()=>console.log(this.name);
    }
}
obj.play()();
let demo={
    name:'Tom',
}
demo.say=obj.play();
demo.say();

// 通过babel 转义我们可以看到原理

function play(){
    var _that=this;
    return function(){
        console.log(_that);
    }
}

// 通过箭头函数进行的上下文的绑定是强制性的

const a={
    init(){
        this.bar=()=>{
            console.log(this);
            return this.dam;
        }
    },
    dam:'hei',
    foo(){
        console.log(this);
        return this.dam
    }
}

const b={
    dam:'ha'
}

a.init();

console.log(a.foo());//hei
console.log(a.foo.call(b))// bind 有效 call 有效 因为不是箭头函数
console.log(a.bar.call(b))// hei
console.log(a.bar.bind(b)());// hei
 
// 原理  定义箭头函数的时候已经将执行的上下文绑定进去了

const aa={
    init(){
        let _that=this;
        this.bar=()=>{
            console.log(_that);
            return _that.dam;
        }
    },
    dam:'hei',
    foo(){
        console.log(this);
        return this.dam
    }
}



()=>{throw new Error('Hello Error')}