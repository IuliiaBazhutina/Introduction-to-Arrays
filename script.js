console.log("Step 1: Declaring Arrays");
let weekDays = new Array ("Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday");
console.log(weekDays);
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

console.log("\nStep 2: Accessing Arrays\n");
let secondWeekDay = weekDays[2];
console.log("The third day of week is: " + secondWeekDay);
let lastWeekDay = weekDays[weekDays.length-1];
console.log("The last week day is: " + lastWeekDay);
let firstNumber = numbers.at(0);
console.log("The first number is: " + firstNumber);

console.log("\nStep 3: Using Array Properties\n");
console.log("The length of array weekDays is: " + weekDays.length);
console.log("The length of array numbers is: " + numbers.length);

console.log("\nStep 4: Array Methods\n");
weekDays.push("newWeekDay");
console.log("A new week day at the end: " + weekDays);

numbers.pop();
console.log("The last number is removed: " + numbers);

let holidays = weekDays.slice(4,6);
console.log("Week days from 5 to 6: " + holidays);

numbers.unshift(-2, -1, 0);
console.log("Three additional numbers at the beginning: " + numbers);

numbers.shift();
console.log("The first number is removed: " + numbers);

console.log("\nStep 5: Iterating Through Arrays\n");
console.log("The current array weekDays looks like: ")
for (let i = 0; i < weekDays.length; i++) {
    console.log(weekDays[i]);
}

console.log("\nThe current array numbers looks like: ")
for (const number of numbers) {
    console.log(number);
}

console.log("\nStep 6: Array Destructuring\n");
let [firstDay, secondDay, ...rest] = weekDays;

console.log("The first and second elements of weekDays are: ")
console.log(firstDay); 
console.log(secondDay); 

console.log("\nThe rest days are: ")
console.log(rest);