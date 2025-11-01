const a=10;
const first=()=>{
    console.log("Hello i am from first");
}
const second=()=>{
    third();
    console.log("I am from second");
}
const third=()=>{
    console.log("I am from third");
}
const b=20;

first();
console.log("ami sobar sesh");