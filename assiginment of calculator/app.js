import inquirer from "inquirer";
import chalk from "chalk";
//import chalkAnimation from 'chalk-animation';
const result = await inquirer.prompt([
    {
        type: 'number',
        name: "num1",
        message: "Enter 1st Number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter 2nd Number",
    },
    {
        type: "list",
        name: "arthOperator",
        message: "Choose an opretor",
        choices: ['+', '-', '*', '/', '%',]
    }
]);
let answer;
switch (result.arthOperator) {
    case '+':
        answer = result.num1 + result.num2;
        console.log(chalk.bgGray(`answer is :${answer}`));
        break;
    case '-':
        answer = result.num1 - result.num2;
        console.log(`answer is :${answer}`);
        break;
    case "*":
        answer = result.num1 * result.num2;
        console.log(`answer is : ${answer}`);
        break;
    case '/':
        answer = result.num1 / result.num2;
        console.log(`answer is : ${answer}`);
        break;
    default: {
        console.log(`Invalid Option`);
    }
}
