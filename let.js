

// let 可以形成块级作用域

const arr1=[];

for (var i=0;i<4;++i){
    arr1.push(()=>i);
}

const arr2=arr1.map(x=>x());


const arr3=[];

for (let i=0;i<4;++i){
    arr3.push(()=>i);
}

const arr4=arr3.map(x=>x());

console.log(arr2,arr4);

/**
 * let 形成的块级作用域在大部分具有 { }的语句中使用：
 * for switch while do-while 
 */
