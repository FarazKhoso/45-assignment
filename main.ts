//Day 2
 //*Question 1:* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

let quote: string= "A person who never made a mistake never tried anything new";
let author : string= "Albert Einstein";
console.log(`${author}once said, "${quote}`);



// *Question 2:* Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let quote: string= "A person who never made a mistake never tried anything new.";
let famousPerson : string ="Alber Enistin";
let message = `${famousPerson}once said, ${quote}`;
console.log(message);


// *Question 3:* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let personName:string =`\n\t Faraz\t\n`;
console.log(personName);
let stripped : string = personName.trim();
console.log(stripped);

// day 2 is completed by Faraz Khoso