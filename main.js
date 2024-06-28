//*Question 1:* Install Node.js, TypeScript and VS Code on your computer/Laptop

//*Question 2:* Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
var personName = "ERIC";
console.log("hello ".concat(personName, ", would you like to learn some python today?"));
//*Question 3:* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// lower case
var personName = "Faraz";
console.log("lowercase:", personName.toLowerCase());
//UPPER CASE
console.log("uppercase:", personName.toUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
//Day 2
//*Question 4:* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
var quote = "A person who never made a mistake never tried anything new";
var author = "Albert Einstein";
console.log("".concat(author, "once said, \"").concat(quote));
// *Question 5:* Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var quote = "A person who never made a mistake never tried anything new.";
var famousPerson = "Alber Enistin";
var message = "".concat(famousPerson, "once said, ").concat(quote);
console.log(message);
// *Question 6:* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
var personName = "\n\t Faraz\t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);
//*Question 7:* Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
console.log(5 + 3); // Addition
console.log(11 - 3); //Subtraction
console.log(2 * 4); //multiplication
console.log(16 / 2); //division
//*Question 8:* You should create four lines that look like this:
console.log(5 + 3);
//Your output should simply be four lines with the number 8 appearing once on each line.
//same as same question 7:;
//*Question 9:* Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.
var favoriteNumber = 25;
console.log("this is my favorite number ".concat(favoriteNumber));
//*Question 10:* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// answer
//my name is Faraz
//date : 1/3/2024
// this is simple message of hello world
console.log("hello world");
//Questio 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//Answer
var names = ["Farhad", "Jawad", "Zaid",];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
/*Question 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.*/
//Answer
var names = ["Farhad", "Jawad", "Zaid",];
var message = "did you complete your assignment, ";
for (var i = 0; i < names.length; i++) {
    console.log(message + names[i]);
}
// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
//to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transpotation = ["honda 125", "electric bus", "train", "elentra"];
for (var i = 0; i < transpotation.length; i++) {
    console.log("i would like to own a ", transpotation[i]);
}
/* Question 14 :Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
var guestList = ["Farhad", "Jawad", "Zaid"];
exports.guestList = guestList;
for (var i = 0; i < guestList.length; i++) {
    console.log("\nrespected MR.", guestList[i], "\nwe invited  you on dinner today\n Thnak you\n");
}
/* *Question 15 :  Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.*/
var absentMember = "Farhad";
var newMember = "Zain";
guestList[0] = newMember;
for (var i = 0; i < guestList.length; i++) {
    console.log("respected MR.", guestList[i], "\nwe invited  you on dinner today\n Thnak you\n");
}
/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.*/
var guestList = ["Farhad", "Jawad", "Zaid"];
exports.guestList = guestList;
for (var i = 0; i < guestList.length; i++) {
    console.log("\nrespected MR.", guestList[i], "\nwe invited  you on dinner today\n Thnak you\n");
}
var absentMember = "Farhad";
var newMember = "Zain";
guestList[0] = newMember;
for (var i = 0; i < guestList.length; i++) {
    console.log("respected MR.", guestList[i], "\nwe invited  you on dinner today\n Thnak you\n");
}
guestList.unshift("Nafees", "Naveed", "Mudasir");
for (var i = 0; i < guestList.length; i++) {
    console.log("respected MR.", guestList[i], "\nwe invited  you on dinner today. we found big table so we decide invite 3 more guest\n Thnak you\n");
}
//Question 17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var guestList = ["Farhad", "Jawad", "Zaid"];
exports.guestList = guestList;
for (var i = 0; i < guestList.length; i++) {
    console.log("\nrespected MR.", guestList[i], "\nwe invited  you on dinner today\n Thnak you\n");
}
var absentMember = "Farhad";
var newMember = "Zain";
guestList[0] = newMember;
for (var i = 0; i < guestList.length; i++) {
    console.log("respected MR.", guestList[i], "\nwe invited  you on dinner today\n Thnak you\n");
}
guestList.unshift("Nafees", "Naveed", "Mudasir");
for (var i = 0; i < guestList.length; i++) {
    console.log("respected MR.", guestList[i], "\nwe invited  you on dinner today. we found big table so we decide invite 3 more guest\n Thnak you\n");
}
console.log("\nUnfortunately we can not arrange big table . Only two people allow");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry Mr.".concat(removeGuest, " you are not invited for dinner\n"));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("respected MR.", guestList[i], "\nYes you are still invited on today dinner\nThnak you\n");
}
guestList.splice(0, 2);
console.log(guestList);
//18. Seeing the World: Think of at least five places in the world you’d like to visit.
var lovesPlaces = ["turkey", "Chaina", "UK", "Saudai", "Dubai"];
//• Print your array in its original order.
console.log("original order: ", lovesPlaces);
//• Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order: ", __spreadArray([], lovesPlaces, true).sort());
//• Print your array in its original order.
console.log("original order: ", lovesPlaces);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("alphabetical reversed order: ", __spreadArray([], lovesPlaces, true).sort().reverse());
//• Print your array in its original order.
console.log("original order: ", lovesPlaces);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(" reversed order: ", __spreadArray([], lovesPlaces, true).reverse());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("alphabetical reversed order: ", __spreadArray([], lovesPlaces, true).sort().reverse());
console.log("\n PRINTING NUMBER OF GUEST INVITED");
console.log(" WE HAD FINALLY INVITED ".concat(guestList.length, " people "));
/* Question : 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.*/
var countries = ["Pakistan", "India", "Chaina", "UK",];
console.log("list of countries");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var top_1 = countries_1[_i];
    console.log(top_1);
}
var leptop = {
    Brand: "HP",
    Model: "probook",
    Ram: "8gb",
    SSD: 256,
};
var Mobil = {
    Brand: "Samsung",
    Model: "S7 edge",
    Ram: "4gb",
    SSD: 32,
};
console.log("Leptop Brand: ".concat(leptop.Brand, ", RAM : ").concat(leptop.Ram));
console.log("Mobil Brand: ".concat(Mobil.Brand, ", RAM : ").concat(Mobil.Ram));
//*Question 22:* Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
var array = ["Mango", "Orange", 101, 102, "Banana",];
console.log("intentional error :", array[7]);
console.log(array[3]);
console.log(array[4]);
//*Question 23:* Conditional Tests: Write a series of conditional tests. Predict the results of each test.
var car = 'subaru';
console.log("is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); // true
console.log("is car != 'subaru'? I predict false.");
console.log(car != 'subaru'); //false
console.log("is car === 'subaru'? I predict true.");
console.log(car === 'subaru'); //true
console.log("is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); //false
console.log("is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); // true
console.log("is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); //false
console.log("is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru'); // true
console.log("is car? I predict true.");
console.log(car == 'subaru' ? "truse" : "false"); // true
// *Question 24:* More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// answer
var car = "subaru";
var age = 25;
// test 1: Equality (true)
console.log(car == 'subaru'); // true
// test 2: Strict Equality (False)
console.log(age === "25"); // False (case-sensitive)
// test 3: not Equality (true)
console.log(car != 'corolla'); // true 
// test 4: Strict not Equality (False)
console.log(car !== "Subaru"); // False (case-sensitive)
// ** lowerCase  Funcation Test**
// Test 5: lowerCase conversion (False)
console.log(car.toLowerCase() == "subaru"); // true (converted to lowerCase)
// test 6 : 
console.log(car === car.toUpperCase()); // False (original value remains)
//test 7 : oprators
console.log(11 > 9);
//test 8
console.log(1 + 5 > 6);
//*Question 25:* Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
//Answer
console.log("Question : 25");
var alien_color = "Red";
//Version that passes:
if (alien_color === "Red") {
    console.log("The player just earned 5 points");
}
var alienColor = "Green";
//Version that fails (no output):
if (alienColor === "yellow") {
    console.log("you are rong");
}
//*Question 26:* Alien Colors #2: Choose a color for an alien, then write an if-else chain.
console.log("Question : 26");
alien_color = "Red";
//Version that passes:
if (alien_color === "Red") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else
    (alien_color != "Red");
{
    console.log("the player just earned 10 points");
}
//*Question 27:* Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
//Answer
// 1st version
console.log("Question : 27");
console.log("version 1");
if (alienColor === "Green") {
    console.log("you earned 5 points");
}
else if (alienColor === "Yellow") {
    console.log("you earned 10 points");
}
else if (alienColor === "red") {
    console.log("you earned 15 points");
}
else {
    console.log("plz salect right color");
}
// version 2
console.log("version 2");
alienColor = "red";
if (alienColor === "Green") {
    console.log("you earned 5 points");
}
else if (alienColor === "Yellow") {
    console.log("you earned 10 points");
}
else if (alienColor === "red") {
    console.log("you earned 15 points");
}
else {
    console.log("plz salect right color");
}
// version 3
console.log("version 3");
alienColor = "Yellow";
if (alienColor === "Green") {
    console.log("you earned 5 points");
}
else if (alienColor === "Yellow") {
    console.log("you earned 10 points");
}
else if (alienColor === "red") {
    console.log("you earned 15 points");
}
else {
    console.log("plz salect right color");
}
//*Question 28:* Stages of Life: Determine a person’s life stage with an if-else chain.
// answer
console.log("\n*Question 28:");
var age = 13;
if (age < 2) {
    console.log("The person is baby");
}
else if (age == 2 && age < 4) {
    console.log("the person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("the person is kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person is teenager");
}
else if (age >= 20 && age < 65) {
    console.log("the person is adult");
}
else
    (age == 65);
{
    console.log("the person is elder\n");
}
//*Question 29:* Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
//  Answer
console.log("*Question 29:");
var Favorite_fruits = ["apple", "banana", "mango",];
// 1
if (Favorite_fruits.includes("apple")) {
    console.log("I really like apple!");
}
// 2
if (Favorite_fruits.includes("graps")) {
    console.log("I really like graps!");
}
// 3
if (Favorite_fruits.includes("banana")) {
    console.log("I really like banana!");
}
// 4
if (Favorite_fruits.includes("mango")) {
    console.log("I really like mango!");
}
// 5
if (Favorite_fruits.includes("orange")) {
    console.log("I really like orange!\n");
}
// *Question 30:* Hello Admin: Greet users differently, especially 'admin'.
//Answer
console.log("\n*Question 30:");
var userNames = ["Faraz", "Arslan", "Ahsan", "admin"];
var res = function (userNames) {
    if (userNames === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames, ", thank you for logging in again."));
    }
};
userNames.forEach(res);
//*Question 31:* No Users: Ensure your user list isn’t empty.
//                                           Answer
console.log("\n*Question 31");
var userNames = ["Faraz", "Arslan", "Ahsan", "admin"];
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    userNames = [];
    console.log("All user have been removed", +userNames.length);
}
//*Question 32:* Checking Usernames: Ensure uniqueness in usernames.
var current_users = ["Faraz", "Jawad", "Ahsan", "Umer", "Faisal"];
var new_users = ["zaid", "adil", "faraz", "zeeshan", "ahsan"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this user name ".concat(new_one_user, " is available"));
    }
});
//*Question 33:* Ordinal Numbers: Display numbers with their ordinal suffixes.
console.log("\n*Question 33");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var chart = numbers_1[_a];
    var ordinalending = void 0;
    if (chart === 1) {
        ordinalending = "st";
    }
    else if (chart === 2) {
        ordinalending = "end";
    }
    else if (chart === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log("".concat(chart).concat(ordinalending));
}
// *Question 34:* Pizzas: Share your favorite pizzas and express your love for them.
//                                          Answer
// console.log("\n*Question 34:\n");
var pizza = ["Fajita", "Chiken Tika", "Malai Cheese"];
for (var _b = 0, pizza_1 = pizza; _b < pizza_1.length; _b++) {
    var likePizza = pizza_1[_b];
    console.log("I really like ".concat(likePizza, " pizza"));
}
console.log("I eat pizza");
//*Question 36:* T-Shirt: Create a function for customizing t-shirts.
console.log("\n*Question 36:\n");
function make_shirt(size, message) {
    console.log("You salected ".concat(size, " size shirt with ").concat(message, " prints on it"));
}
make_shirt("large", "discount price");
//*Question 37:* Large Shirts: Default values in make_shirt().
console.log("\n*Question 37\n");
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("you have order a ".concat(size, " shirt that says ").concat(message));
}
makeShirt("large");
makeShirt("medium");
makeShirt("small");
//*Question 38:* Cities: Describing cities with a function.
console.log("\n*Question 38\n");
function cities(cities, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(cities, " is big city of ").concat(country));
}
cities("Karachi");
cities("tokyo", "Japan");
cities("Makka", "saudia");
//*Question 39:* City Names: Formatting city-country pairs.
function Cities_Country(cities, country) {
    return "".concat(cities, ",").concat(country, " ");
}
var res1 = Cities_Country("Krachi", "Pakistan");
var res2 = Cities_Country("Ankra", "Turkey");
var res3 = Cities_Country("Bijing", "Chaina");
console.log(res1);
console.log(res2);
console.log(res3);
//*Question 40:* Album: Create objects for music albums.
// console.log("\n*Question 40\n");
// function make_album(artist: string, title: string,) {
//     let album = { artist, title };
//     return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album"));
//*Question 41:* Magicians: Display magician names from an array.
// console.log("\n*Question 41\n");
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicians = ["Ahsan", "Faraz", "Zaid"];
// show_magicians(magicians);
//*Question 42:* Great Magicians: Add "the Great" to magician names.
//console.log("\n*Question 42\n");
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
/* *Question 40:* Album: Create objects for music albums.
console.log("\n*Question 40\n"); */
function make_album(artist, title) {
    var album = { artist: artist, title: title };
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album"));
//*Question 41:* Magicians: Display magician names from an array.
console.log("\n*Question 41\n");
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicians = ["Ahsan", "Faraz", "Zaid"];
// show_magicians(magicians);   
//*Question 42:* Great Magicians: Add "the Great" to magician names.
//console.log("\n*Question 42\n");
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
/*Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("".concat(magicians[i], "the Great"));
    }
    return greatMagicians;
}
var magicians3 = ["Ahsan", "Faraz", "Zaid"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
/*Question 44: Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log(" ".concat(items[i]));
    }
}
console.log("enjoy your sandwich Faraz ");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
function createCar(manufacturer, model, optional) {
    return __assign({ manufacturer: manufacturer, model: model }, optional);
}
var myCar = createCar("toyota", "fortuner", { color: "black", year: "2024" });
console.log(myCar);
//*45 assignment completed by Faraz*//
