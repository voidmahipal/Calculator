const number_list = document.querySelectorAll(".number");
const arr = Array.from(number_list);
const operator_list = document.querySelectorAll(".operator");
const op_arr = Array.from(operator_list);
const expression = document.querySelector(".expression");
const result = document.querySelector(".result");



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
    let res="";
    if(operand==="+") {
        res+=add(num1,num2);
    }
    else if(operand==="-") {
        res+=sub(num1,num2);
    }
    else if(operand==="*") {
        res+=multiply(num1,num2);
    }
    else if(operand==="/"){
        res+=divide(num1,num2);
    }
    result.append(res);
}
let a;
let b;
let op;
function update_a(num1) {
    let n=Number(num1);
    a=n;
    expression.replaceChildren();
    expression.append(num1);
}
function update_b(num2) {
    let n=Number(num2);
    b=n;
    expression.append(num2);
}
function update_op(operand) {
    op=operand;
    expression.append(op);
}
let temp="";
let first=true;
for(let i=0;i<arr.length;i++) {
    const button=arr[i];
    let digit_string = button.textContent;
    button.addEventListener("click",()=>{
        if(first) {
            temp+=digit_string;
            update_a(temp);
        }
        else{
            temp=digit_string;
            update_b(temp);
        }
    })
}
for(let i=0;i<op_arr.length;i++) {
    const op=op_arr[i];
    let op_string = op.textContent;
    op.addEventListener("click",()=>{
        if(first) {
            update_op(op_string);
            first=false;
        }
        else{
            operate(a,op,b);
        }
    })
}