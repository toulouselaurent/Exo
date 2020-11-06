// Here are our Astro signs provided as a string.

const aries = `♈`,
  taurus = `♉`,
  gemini = `♊`,
  cancer = `♋`,
  leo = `♌`,
  virgo = `♍`,
  libra = `♎`,
  scorpio = `♏`,
  sagittarius = `♐`,
  capricorn = `♑`,
  aquarius = `♒`,
  pisces = `♓︎`;

// In Western Astrology there are 12 signs, organized by Earth Elements (Eart, Water, Air, Fire)  //
// You are going to manipulate the following arrays along with this challenge:  //

const fireSigns = [aries, leo];
const earthSigns = [sagittarius, taurus, virgo, capricorn];
const airSigns = [libra, aquarius];
const waterSigns = [cancer, scorpio, pisces];

/* –––––––––––––––––– */

/*  Part 1 - Manipulating elements inside arrays   */

/*  🏁 Add one final element to an array 
    
    Sagittarius is missing from fire signs please add it at the END of the array
    and verify the result.

*/

// ✒️ Write your code here
fireSigns.push(sagittarius);
console.log(fireSigns);


console.log(
  fireSigns[fireSigns.length - 1] === "♐"
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);


/* 🏁 Remove the first element of an array

      Sagittarius should not be on earth Signs, please remove Sagittarius from the array, and verify
      the result.
*/

// ✒️ Write your code here
earthSigns.shift();
console.log(earthSigns);

console.log(earthSigns[0] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

/* 🏁 Adding an element at the beginning of the array

      Gemini is missing in airSigns, please add it at the beginning of the array, and verify the result.

 */

// ✒️ Write your code here
airSigns.unshift(gemini);
console.log(airSigns);

console.log(airSigns[0] === "♊" ? "Good Answer ✅" : "Wrong Answer ❌");

/*  🏁  Could you please log in to the console the index position of Scorpio (♏) within water signs? (use lastIndexOf) */

const indexScorpio = waterSigns.lastIndexOf(scorpio); // ✒️ Write your code here
console.log(indexScorpio === 1 ? "Good Answer ✅" : "Wrong Answer ❌");

/* 🏁  Could you please log in to the console the second element of waterSigns?  */
const secondElement = waterSigns[1]; // ✒️ Write your code here
console.log(secondElement === "♏" ? "Good Answer ✅" : "Wrong Answer ❌");

/* 

Part 2 –  Merging arrays

    🏁  Initialize an empty array in javascript
     Please initialize an empty array and store it in a let variable called zodiacSigns

 */
let zodiacSigns = []; // ✒️ Write your code here

/*  
     🏁 🏁 Merge Fire, Earth, Water, and Air arrays into zodiacSigns (in that order), using the concat methods 
*/

// ✒️ Write your code here
zodiacSigns = fireSigns.concat(earthSigns, waterSigns, airSigns);

console.log(
  (zodiacSigns !== null && zodiacSigns.toString() === "♈,♌,♐,♉,♍,♑,♋,♏,♓︎,♊,♎,♒")
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);
/*  
    🏁 Please print dynamically in console how many elements you have now in the zodiacSigns array
 */

console.log("There is " + zodiacSigns.length,"signs in the zodiac");
