// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================
import cows from "cows";
// 1. Accept arguments

// how will you accept arguments?
const args = process.argv.slice(2);

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = '';
saying = args.join(" ");

// 3. Make a cow that takes a string


// how will you make the speech bubble contain the text?

// where will the cow picture go?

// how will you account for the parameter being empty?
function cowsay(saying) {
  if (!saying) {
    saying = "Moo!";
  }

  const bubbleWidth = saying.length + 2;

  const bubbleTop =  `${topLine.repeat(bubbleWidth)} `;
  const bubbleMiddle = `< ${saying} >`;
  const bubbleBottom =  `${bottomLine.repeat(bubbleWidth)}` ;

//   const cowPicture = `
//          \\   ^__^
            // \\  (oo)\\_______
            //     (__)\\       )\\/\\
            //         ||----w |
            //         ||     ||
//   `;
  const randomCow = cows()[3];
  return `${bubbleTop}\n${bubbleMiddle}\n${bubbleBottom}\n${randomCow}`;
}

//4. Pipe argument into cowsay function and return a cow
// how will you log this to the console?

console.log(cowsay(saying))