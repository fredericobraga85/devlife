// class MyClassThis {
//   name = "MyClass";
//   getNameObj() {
//     return this.name;
//   }
//   getNameArrow = () => {
//     this.hello('getNameArrow')
//     return this.name;
//   }

//   hello(this: MyClassThis, x:string){
//     console.log(this.name , x)
//   }
// }
// const c = new MyClassThis();
// const obj = {
//   name: "obj",
//   getName: c.getNameObj,
//   getNameArrow: c.getNameArrow,
// };

class Box {
  contents: string = "";
  set(value: string) {
    this.contents = value;
    return this;
  }
}

class ClearableBox extends Box {
  clear() {
    this.contents = "";
  }
}

const a = new ClearableBox();
const b = a.set("hello");

// Prints "obj", not "MyClass"
// console.log(obj.getName());
// console.log(obj.getNameArrow());
// c.hello('outside')
// const callTHis = c.hello
// //error
// callTHis('test')

console.log(b)
b.clear()
console.log(b)