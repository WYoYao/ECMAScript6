

const s=new Set();
const ss=new Set([1,2,3,4]);
console.log(s,ss);
// 因为是无序集合所以不能通过下标进行访问
console.log(ss[0],ss[1]);


const set=new Set();
set.add(1)
.add(2)
.add(3)
.add(3) //这个地方的add 3 无效 , 因为元素不可重复
console.log(set);
set.delete(1)// 删除了值为1的元素
console.log(set);
set.clear();// 清理所有的元素
console.log(set);

const set1=new Set(['leo',1,2,'gaga']);
console.log(set.has('leo'));

const set2=new Set([1,2,3,4,5,6]);
var age=23;
set2.forEach((item=>console.log(this.age+item)));

const set3=new Set([1,2,3,4,5,6,7]);

for(item of set3){
    if(item>5)break;
    console.log(item);
}



// 在ES6 中定义的新数据的类型中，还有一个升级版本叫Weak,其中集合类型所对应的Weak 版本便是WeakSet.在HTML5 开发中对于内存安全的保障越来越受重视。