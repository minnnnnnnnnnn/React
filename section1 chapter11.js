// 1. 함수 표현식
function funcA() {
    console.log("funA");
}

let varA = funcA;
console.log(varA);
varA();

let varB = function (){
    console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = (value) => value + 1;
