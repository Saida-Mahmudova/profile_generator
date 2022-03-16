const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let q1 = "What's your name? Nicknames are also acceptable :)";
let q2 = "What's an activity you like doing?";
let q3 = "What do you listen to while doing that?";
let q4 = "Which meal is your favourite (eg: dinner, brunch, etc.)";
let q5 = "What's your favourite thing to eat for that meal?";
let q6 = "Which sport is your absolute favourite?";
let q7 = "What is your superpower? In a few words, tell us what you are amazing at!";

rl.question(q1, answer => {
  rl.question(q2, answer1 => {
    rl.question(q3, answer2 => {
      rl.question(q4, answer3 => {
        rl.question(q5, answer4 => {
          rl.question(q6, answer5 => {
            rl.question(q7, answer6 => {
              console.log(`Thank you for your valuable feedback: \n${q1}: ${answer} \n${q2}: ${answer1} \n${q3}: ${answer2} \n${q4}: ${answer3} \n${q5}: ${answer4} \n${q6}: ${answer5} \n${q7}: ${answer6}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});