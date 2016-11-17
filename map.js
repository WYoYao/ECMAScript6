

const map=new Map([['a',1],['b',2]]);

console.log(map);

map.set('hello','hello');
map.set('world','ES2015');
console.log(map);
map.set('world','world');
map.set('bar','bar');

console.log(map);

map.delete('bar');

console.log(map);

map.clear();


const map=new Map([['a',1],['b',2]]);
map.forEach((key,value,content)=>console.log(key,value,content));
for(const [key,value] of map){
    console.log(key,value,map);
}

type|Map|Object
--|--|--
存储键值|true|true
遍历所有键值|true|true
检查是否包含制定的键值|true|true
使用字符串作为键|true|true
使用Symbol|true|true
使用任意对象作为键值|true|false
可以方便的得知键值对的数量|true|false


const map=new Map([['a',1],['b',2]]);
var str=JSON.stringify(map);
console.log(str);
console.log(new Map(JSON.parse(str)));

const map=new WeakMap();
var key={
    key:'name'
};
var value={
    value:'value'
}

map.set(key,value);
console.log(map.get(key))

key=null;
console.log(map);