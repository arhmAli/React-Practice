import { foods } from "./fruits";
import { choice,remove } from "./helpers";
let fruit=choice(foods);
console.log(`i like one ${fruit}`);
console.log(`here is ur ${fruit}`);
let remaining=remove(foods,fruit);
console.log(`we gave ${remaining.length}`)