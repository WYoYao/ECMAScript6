

/**
 * Class 定义的基本语法
 */

class Animal{
    constructor(name,like){
        // 定义私有属性
        this.name=name;
        this.like=like;
    }
    // 定义公有的属性
    say(){
        console.log(this.name);
    }
}

const dog=new Animal('haha','flight');
console.log(dog.name);
dog.say();

/**
 * 类的继承
 */

class Point2D{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        console.log(`${this.x}${this.y}`);
    }
}

class Point3D extends Point2D{
    constructor(x,y,z){
        super(x,y);
        this.z=z;
    }
    toString(){
        console.log(`${this.x}${this.y}${this.z}`)
    }
}

const D=new Point3D(1,2,3);
D.toString();

/**
 * 
 * 子类构造函数中的super
 * 
 */

class Father{
    constructor(name,like){
        this.name=name;
        this.like=like;
    }

    say(){
        console.log(this.like);
    }
}

class Son extends Father{
    // 如果不调用 constructor 的时候不会执行父级的构造函数 不会绑定父级的this 
    play(){
        console.log(this.name);
    }
}

const demo=new Son();
demo.play();//undefind

class Son1 extends Father{
    constructor(){
        // 如果不使用super 调用父级的构造函数 会报错 this is not defined
        super('leo','play');
        this.sex=1;
    }
    
    // 如果不调用 constructor 的时候不会执行父级的构造函数 不会绑定父级的this 
    play(){
        this.hate='run';
       console.log(this.name,this.hate);
    }
}


const demo1=new Son1();
demo1.play();//leo
console.log(demo1.hate);


//p72