        // ** Working My Way Thru 01/27 Lessons **

// const colors = ["red", "green", "blue"];
// console.log(colors);            // Output: ["red", "green", "blue"]
// console.log(colors[1]);         // Output: "green"
// console.log(colors.length);     // Output: 3

// const mixedArray = [1, "hello", true, { name: "John" }, [10, 20]];
// console.log(mixedArray); 

// const colors = ["red", "green", "blue"];
// console.log(colors[0]); 
// console.log(colors[2]); 

// colors[1] = "orange"; 
// console.log(colors); 


        // FOR LOOP
// for (let i = 0; i < 5; i++) {
//         console.log(i);
// }

        // WHILE LOOP
// let count = 0;
// while (count < 4) {
//         console.log(count);
//         count++;
// }

        // FOR...OF LOOP
// const fruits = ["watermelon", "orange", "coconut"];
// for (const fruit of fruits) {
//         console.log(fruit);
// }

        // !! NOT QUITE SURE OF DIFFERENCE 
        // !! BETWEEN FOR...OF and "FOR...IN"??
        // NEVER MIND LATER NOTES CLEARED IT UP

 
/// ** PRACTICAL EXAMPLES ** ///

// 1: SUMMING ARRAY ELEMENTS
// const numbers = [20, 40, 60];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
// }
// console.log(`Sum: ${sum}`);

// 2: DOUBLING ARRAY ELEMENTS
// const numbers = [1.2, 2.4, 3.5];
// const doubled = [];

// for (let i = 0; i < numbers.length; i++) {
//         doubled.push(numbers[i] * 2);
// }
// console.log(doubled)

                // ?? TRIPLING ?? //
                const numbers = [1.2, 2.4, 3.5];
                const tripled = [];

                for (let i = 0; i < numbers.length; i++) {
                        tripled.push(numbers[i] * 3);           // <-- but ewww
                }
                console.log(tripled);
                console.log((tripled).toFixed(2));              // <-- i forgot how (pls HELP)

// 3: FILTER *ODD* NUMBERS
// const numbers = [3, 4, 5, 6, 7, 8];
// const odds = [];

// for (let number of numbers) {
//         if (number % 2 ==! 0) {
//              odds.push(number);   
//         }
// }
// console.log(odds);


                // TO-DO LIST PROCESSOR

// const todoList = ["Make dinner", "Wash dishes", "Study JavaScript"];

                // Add a new task
// todoList.push("Watch a tutorial");
// console.log(todoList); 
                
// Remove the first task
// todoList.shift();
// console.log(todoList);
                