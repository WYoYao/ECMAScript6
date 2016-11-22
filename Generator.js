
function* fibo(){}

const foib=function*(){};


function* getfn(){
    let a=2;
    yield a;
    while(true){
        yield a=a/(2*a+1);
    }
}

const demo=getfn();

console.log(demo.next().value);
console.log(demo.next().value);
console.log(demo.next().value);

for(item of demo){
    if(item<0.01)break;
    console.log(item);
}


function* genFn(){}
const gen=genFn();

console.log(genFn.prototype);   //  GeneratorFunction
console.log(gen.constructor.prototype); //Generator
console.log(gen instanceof genFn);//true


console.log((function*(){}).constructor);

function isGeneratorFunction(fn){
    const genFn=(function*(){}).constructor;
    return fn instanceof genFn;
}

function isGenerator(obj){
    if(Symbol && Symbol.toStringTag){
        return obj[Symbol.toStringTag]==='Generator';
    }else if(obj.toString){
        return obj.toString()==='[Object Generator]';
    }
    return falsel
}



function* foo(){
    yield 1;
    yield 2;
}

function* bar(){
    yield* foo();
    yield 3;
    yield 4;
}

for( num of bar()){
    console.log(num);
}