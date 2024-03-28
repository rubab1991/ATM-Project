#! /usr/bin/env node
import inquirer from "inquirer"
let myBalance=10000; // dollar
let myPin=1234
let pinAnswer= await inquirer.prompt([
    {
        name:"pin",
        type:"number",
        message:"enter your pin"

}
]
)
if (pinAnswer.pin===myPin){
    console.log("correct pin code!!!");
    let optionAns=await inquirer.prompt([{
name:"option",
message:"please select option",
type:"list",
choices:["withdraw","check balance","fast cash"]
    }
]
);
console.log(optionAns);
if (optionAns.option === "withdraw"){
    let amountAns=await inquirer.prompt([{
        name:"amount",
        type:"number",
        message:"please select amount"
    }])

    if(amountAns.amount > myBalance) 
    console.log("your balance is insufficient")
    else if(myBalance -= amountAns.amount)
        console.log("your remaining balance is :" + myBalance)
        
}



else if(optionAns.option === "fast cash"){
let cashoutAns=await inquirer.prompt([{
name:"cashout",
message:"select the amount you want to cashout",
type:"list",
choices:["2000","4000","5000","10000"]
}])
myBalance -= cashoutAns.cashout
console.log("your remaining balance is :" + myBalance)

}


else if(optionAns.option === "check balance")
{console.log("Your balance is :" + myBalance)}
}
else{console.log("Incorrect pin number");}











