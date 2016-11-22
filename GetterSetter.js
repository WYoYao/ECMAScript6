

const conter={
    _value:1,
    get value(){
        return ++this._value;
    }
}

console.log(conter.value);
console.log(conter.value);
console.log(conter.value);


const list={
    _arr:[],
    set new(value){
        this._arr.push(value);
    },
    get last(){
        return this._arr[0];
    },
    get value(){
        return this._arr;
    }
}

list.new=1;
list.new=2;
list.new=3;

console.log(list.last);
console.log(list.value);


class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    get d(){
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
    }
}

const p=new Point(3,4);
console.log(p.d);


class Foo{
    get [Symbol.toStringTag](){
        return 'leo';
    }
}

const demo=new Foo();
console.log(demo.toString());