import addToDom from './add_to_dom';
import calcDefault, {add, myArray} from './calculate';

console.log(myArray);

calcDefault();

addToDom('h1', `2+8=${add(2,8)}`);

