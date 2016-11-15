Object.freeze


/**
 * 将变量改变成为深度不可变对象
 * 
 */
Object.deepfreeze=function(obj){
    let PropNames=Object.getOwnPropertyNames(obj);

    PropNames.forEach(name=>{
        var prop=obj[name];
        if(typeof prop=='object' && prop!=null){
            Object.deepfreeze(prop);
        }
    })

    return Object.freeze(obj);

}

const obj=Object.deepfreeze({
    name:'leo',
    like:{
        play:'JS',
        hate:[1,2,3,4],
    }
})

obj.name='haha';
obj.like=[1];
obj.like.hate=[3];
obj.like.play='haha';

/**
 * 通过for ... of 取代 forEach
 * 避免使用回调函数实现
 */

for (item of [1,2,3]){
    console.log(item);
}

/**
 * 配合ES6 中的解构赋值 更加方便的处理JSON 数据
 * 
 */
let data=[
    {
        name:'leo',
        like:'play',
    },{
        name:'tom',
        like:'fight',
    }
]

for( const {name,like} of data){
    console.log(name,like);
}

/**
 * entries()
 * 返回一个对象数组每个元素预期下标对应的新数组
 */

let arr=['a','b','c'];

for(const[index,value] of arr.entries()){
    console.log(index,value);
}

