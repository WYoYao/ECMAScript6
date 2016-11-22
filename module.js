
import name from 'moudle_name';
import * as mine from 'moudle_mine';
import {member} from 'moudle_member';
import { leo as baba } from 'person';
import 'only_requier';


import {default as main,tool} from 'tool';

import 'namespace';

export const leo='wy';
export function fn(){};


export 'Hello';
export const a;
export ()=>{};


//client.js
export default class client{

}
// app.js
import Client from 'client';



//client.js
export default class client{

}

export const hello=()=>1;

// app.js
import Client,{hello} from 'client';



// module-1.js
export function foo(){};
// module.js
export * from 'module-1';
// app.js
export {foo} from 'module';
foo();


export {member} from 'member';
export {default as moduleDefault} from 'module';



