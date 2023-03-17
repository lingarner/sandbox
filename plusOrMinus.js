let add = document.getElementById("more");
let less = document.getElementById("less");
let num = document.querySelector(".number");
let start = 0;
num.innerHTML = start;

add.addEventListener("click", () => {
    start++;
    num.innerHTML = start;
});

less.addEventListener("click", () => {
    if(start <= 0){
        start = 1;
    }
    start--;
    num.innerHTML = start;
});









