import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const number = new NumbersCollection([1, 22, 0, -3]);
const word = new CharactersCollection('numberXcolelction');
const list = new LinkedList();
list.add(5);
list.add(-5);
list.add(0);
list.add(10);
number.sort();
word.sort();
list.sort();
console.log(number.data);
console.log(word.data);
list.print();