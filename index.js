import inquirer from "inquirer";
const randomnumber = 13;
const answer = await inquirer.prompt([
    {
        name: "userguessednumer",
        type: "number",
        message: "please guess a number:",
    },
]);
if (answer.userguessednumer === randomnumber) {
    console.log("congrulation you guess a right number");
}
else {
    console.log("you guessed a wrong number");
}
