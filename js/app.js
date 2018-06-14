//-console.log("JS is active..")

//1. Easy Going

for (let i=1; i<21; i++){
	console.log(i);

}

//-logged numbers 1-20

//2. Get Even

for (let i=0; i<201; i+=2){
	console.log(i);

}

//-logged evens 0-200

//3. Excited Kitten

const kitten=["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for (let i=0; i<20; i++){
	
	mew = Math.floor(Math.random() * 3);

	if (i % 2 === 0){
		console.log("Love me, pet me HSSSSSSS!" + kitten[mew]);
	}
	else{
		console.log("Love me, pet me HSSSSSSS!")
	}
}

//-logged 20 HSSSSSSS, even RND*3 " "

//4. Fizz Buzz

result = "foo"

for (i=0; i<101; i++){
	if (i % 3 === 0 && i % 5 === 0){
		result = "fizzbuzz";

	}
	else if (i % 3 === 0){
		result = "fizz";

	}
	else if (i % 5 === 0){
		result = "buzz";

	}
	else {
		result = i;
	}
console.log(result);
}

//- FizzBuzzed!

//5. Getting to Know you

const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0]="Gameboy";
karolin[1]=17;
matt[2]="Gotham City";
kristyn[2]="Brooklyn";

//console.log (thom + karolin + kristyn + matt);

//- array registers changed

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (i=0; i<turtles.length; i++){
	//turtleUp = turtles[i].toUpperCase();
	console.log(turtles[i].toUpperCase());
}

//- YELLED at those teenagers!

//6. Return of the Closets

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log(kristynsCloset); //for properties
console.log(thomsCloset);

//-> **Commit 7 - Kristyn and Thom DO NOT have their outfits ready for class! 










