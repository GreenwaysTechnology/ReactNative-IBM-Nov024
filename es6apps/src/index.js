import Greeter, { name, message } from "./util.js";

function main(){
  let greet = new Greeter();
  console.log(greet.sayGreet())
  console.log(name,message)
}
main()