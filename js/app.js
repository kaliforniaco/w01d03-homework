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

