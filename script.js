// // 1. Declare an empty array using JS literal notation
// var studentNames = [];

// // 2. Declare an empty array using JS object notation
// var studentNames = new Array();

// // 3. Declare and initialize a strings array
// var fruits = ["Apple", "Banana", "Mango"];

// // 4. Declare and initialize a numbers array
// var numbers = [10, 20, 30, 40];

// // 5. Declare and initialize a boolean array
// var flags = [true, false, true];

// // 6. Declare and initialize a mixed array
// var mixedArray = ["Ali", 25, true, null];

// // 7. Store education qualifications & display in browser
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Qualifications in Pakistan</h2>");
// for (var i = 0; i < qualifications.length; i++) {
//   document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

// // 8. Store students’ names, scores & percentages
// var students = ["Ali", "Ahmed", "Sara"];
// var scores = [420, 380, 450];
// var totalMarks = 500;

// for (var i = 0; i < students.length; i++) {
//   var percentage = (scores[i] / totalMarks) * 100;
//   document.write(
//     "Score of " + students[i] + " is " + scores[i] +
//     ". Percentage: " + percentage + "%<br>"
//   );
// }

// // 9. Colors Array Operations
// var colors = ["Red", "Green", "Blue"];
// document.write("<b>Original Array:</b> " + colors + "<br><br>");

// // a. Add color to beginning
// var addStart = prompt("Which color you want to add at beginning?");
// colors.unshift(addStart);
// document.write("After adding at beginning: " + colors + "<br>");

// // b. Add color to end
// var addEnd = prompt("Which color you want to add at end?");
// colors.push(addEnd);
// document.write("After adding at end: " + colors + "<br>");

// // c. Add two more colors at beginning
// colors.unshift("Purple", "Yellow");
// document.write("After adding two colors at beginning: " + colors + "<br>");

// // d. Delete first color
// colors.shift();
// document.write("After deleting first color: " + colors + "<br>");

// // e. Delete last color
// colors.pop();
// document.write("After deleting last color: " + colors + "<br>");

// // f. Add color at desired index
// var indexAdd = prompt("At which index you want to add color?");
// var colorName = prompt("Enter color name:");
// colors.splice(indexAdd, 0, colorName);
// document.write("After adding at index: " + colors + "<br>");

// // g. Delete colors from desired index
// var indexDel = prompt("At which index you want to delete colors?");
// var delCount = prompt("How many colors you want to delete?");
// colors.splice(indexDel, delCount);
// document.write("After deleting colors: " + colors + "<br>");

// // 10. Store student scores & sort in ascending order
// var scores = [320, 230, 480, 120];
// scores.sort(function(a, b) {
//   return a - b;
// });

// document.write("Sorted Scores: " + scores);

// // 11. Copy city names into another array
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(1, 4);

// document.write("<br><br>Cities: " + cities);
// document.write("<br>Selected Cities: " + selectedCities);



