import { LinkedList } from "./LinkedList.js";

console.log("\n ----- Linked List -----  \n");

const list = new LinkedList();

console.log("Init List");
list.toString();

console.log("\nAppend node");
list.append("The");
list.append("Odin");
list.append("Project");
list.toString();

console.log("\nPreppend node");
list.prepend("I Love");
list.toString();

console.log("\nList Size = " + list.size());
console.log("\nHead = " + list.first());
console.log("Tail = " + list.last());

console.log("\nAt(0) = " + list.at(0));
console.log("At(1) = " + list.at(1));
console.log("At(3) = " + list.at(3));
console.log("At(4) = " + list.at(4));

console.log("\nPop last node");
list.toString();
list.pop();
list.toString();

console.log("\nContains");
console.log("I Love : " + list.contains("I Love"));
console.log("Odin : " + list.contains("Odin"));
console.log("Hate : " + list.contains("Hate"));

console.log("\nFind");
console.log("I Love : " + list.find("I Love"));
console.log("Odin : " + list.find("Odin"));
console.log("Hate : " + list.find("Hate"));

const listNum = new LinkedList();
listNum.append(1);
listNum.append(2);
listNum.append(4);
listNum.append(5);
listNum.toString();

console.log("\nInsert at 0 -> 0");
listNum.insertAt(0, 0);
listNum.toString();

console.log("\nInsert at 3 -> 3");
listNum.insertAt(3, 3);
listNum.toString();

console.log("\nInsert at 7 -> 7");
listNum.insertAt(7, 7);
listNum.toString();

console.log("\nInsert at 6 -> 6");
listNum.insertAt(6, 6);
listNum.toString();

console.log("\nRemoveAt at 2 -> 2");
listNum.removeAt(2);
listNum.toString();
