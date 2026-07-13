const number_list = document.querySelectorAll(".number");
const number_arr = Array.from(number_list);

const operator_list = document.querySelectorAll(".operator");
const op_arr = Array.from(operator_list);

const expression = document.querySelector(".expression");
const result = document.querySelector(".result");

const equal = document.querySelector(".equal");
const clear = document.querySelector(".allclear");


function add(num1,num2) {
    return num1+num2;
}
function sub(num1,num2) {
    return num1-num2;
}
function multiply(num1,num2) {
    return num1*num2;
}
function divide(num1,num2) {
    if(!num2) return "Chill out bro. Don't divide by 0!!";
    return num1/num2;
}
function operate(num1,operand,num2) {
    if(operand==="+") {
        return add(num1,num2);
    }
    else if(operand==="-") {
        return sub(num1,num2);
    }
    else if(operand==="*") {
        return multiply(num1,num2);
    }
    else if(operand==="/"){
        return divide(num1,num2);
    }
}
let a=0;
let b=0;
let op="";


function update_a(num1) {
    a=Number(num1);
}
function update_b(num2) {
    b=Number(num2);
}
function update_op(operand) {
    op=operand;
}

let num1="";
let num2="";
for(let i=0;i<number_arr.length;i++) {
    const button=number_arr[i];
    let digit_string = button.textContent;
    button.addEventListener("click",()=>{
        if(op==="") {
            num1+=digit_string;
            update_a(num1);
        }
        else{
            num2+=digit_string;
            update_b(num2);
        }
        expression.replaceChildren();
        expression.textContent=`${num1}${op}${num2}`;
    })
}


for(let i=0;i<op_arr.length;i++) {
    const operator=op_arr[i];
    let op_string = operator.textContent;
    operator.addEventListener("click",()=>{
        if(op==="") {
            update_op(op_string);
            expression.replaceChildren();
            expression.textContent=`${num1}${op}${num2}`;
        }
    })
}

equal.addEventListener("click",()=>{
    let ans=operate(a,op,b);
    result.replaceChildren();
    result.textContent=`${ans}`;
})
clear.addEventListener("click",()=>{
    num1="";
    num2="";
    op="";
    expression.replaceChildren();
    result.replaceChildren();
})