/**
 * 
 * >- WeakSet 不能包含值类型元素，否则会抛出一个TypeError.
 * >- WeakSet 不能包含一个无引用对象，否则会自动清除出集合。
 * >- WeakSet 无法被探知其大小，也无法被探知其中包含的元素。
 * > 第一个和第三个差异都可以通过第二个来解释。Weak版本的数据类型是无法包含无引用的元素的，一旦数据结构中的任一元素的引用全部被解除，该元素便会被移除出当前所在的数据结构。
 * 
 */


const weakSet=new WeakSet();

let foo={name:'leo'};

weakSet.add(foo);
console.log(weakSet.has(foo));
foo=null;
console.log(weakSet.has(foo));


// 但是在JS 中可以使用一种投机取巧的方式 实现这种对值类型的填入
const weakSet1=new WeakSet();
let a=123;
// Uncaught TypeError: Invalid value used in weak set
// weakSet1.add(a);

let b=new Number(123);
weakSet1.add(b);
console.log(weakSet1.has(b));

// 能通上面的内容可以看书，无法加入值类型的原因在于，值类型在通过语法表示的时候，是不存在引用的。而且之类型底层在进行操作的时候会频繁出现内存操作和引用的变动。比如字符串不存在字符串修改这一说法，程序在对字符串进行操作的时候，都会从新创建一个字符串的到操作结果，而不是原有的数据进行修改。