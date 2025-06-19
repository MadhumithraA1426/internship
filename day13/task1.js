//1
const fruit=["Apple","Banana","Cherry","Orange","Jackfruit"];
console.log(fruit[2]);
fruit.push("Mango");
fruit.shift();
console.log(fruit.length);
fruit.forEach(fru=>console.log(fru));
//2
const numbers=[1,2,3,4,5];
numbers.reverse();
console.log(numbers);
let sum=0;
numbers.forEach(num=>sum+=num);
console.log(sum);


