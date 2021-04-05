// 1. Use strict
// addin Es 5
// use this for valina Javascript.

"use strict";

// 2. Variable
// ES 6(let)

let globalName = "global name"; //글로벌은 메모리의 공간을 항상 차지하기에 많이 사용하지 않는 것이 좋다. 필요한 부분에서 변수를 섫정하여 사용한다.

{
  let name = "kyeongmin";
  console.log(name);
  name = "test";
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. const(Contants)
// favor immutable data type always for a few reasons:
// - security(해킹으로부터 보안적이다.)
// - thread safety(스레드가 여러값을 동시에 참조할 때 잘못된 참조를 예방한다. 즉 안전.)
// - reduce human mistakes(다른 개발자가 소스를 수정할 때 실수를 방지한다.)

const name = "kimkyeomgmin";
const age = 27;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); //``
console.log("value: " + helloBob + " type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "kyeongmin", age: 26 };
ellie.age = 27;

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
