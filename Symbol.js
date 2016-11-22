

const Symbol=Symbol('something');
const SymbolNum=Symbol(123.345);
const SymbolObj=Symbol({name:'leo'});

const SymbolSymbol=Symbol(Symbol);//Error


console.log(Symbol(123)==Symbol(123));//false

console.log(Symbol.for(123)==Symbol.for(123));// true

const a = Symbol.for('one');
const b = Symbol.for('two');
const c = Symbol.for('three');
console.log(Symbol.keyFor(a));
console.log(Symbol.keyFor(b));
console.log(Symbol.keyFor(c));


console.log([1,2,3,4][Symbol.iterator]);

// Array
for( const num of [1,2,3,4])console.log(num);
//String
for( const str of 'String')console.log(str);
//TypeArray
for( const value of new Uint8Array([0x00,0xff]) ) console.log(value);
// Map
for(const entry of new Map([['a',1],['b',2]])) console.log(entry);
// Set
for(const entry of new Set([1,2,3,4]))console.log(entry);
// Generator
function* fn(){yield 1};
for(const value of fn())console.log(value);








