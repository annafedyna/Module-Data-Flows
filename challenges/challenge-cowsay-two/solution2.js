// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 2. Make supplies for our speech bubble
const topLine = "_";
const bottomLine = "-";
// 3. Make a cow that takes a string

const cow = (saying) => {
    if (!saying) {
        saying = "Moo!";
    }

    const bubbleWidth = saying.length + 2;

    const bubbleTop =  `${topLine.repeat(bubbleWidth)} `;
    const bubbleMiddle = `< ${saying} >`;
    const bubbleBottom =  `${bottomLine.repeat(bubbleWidth)} `;

    const cowPicture = `
            \\   ^__^
             \\  (oo)\\_______
                 (__)\\       )\\/\\
                    ||----w |
                    ||     ||
    `;

    return `${bubbleTop}\n${bubbleMiddle}\n${bubbleBottom}\n${cowPicture}`;
    }


// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)
rl.question(`What's cows say?`, (input) => {
  console.log(cow(input));
  rl.close();
});