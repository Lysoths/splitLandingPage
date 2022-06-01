const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");


leftSide.addEventListener("mouseover",()=> {
    leftSide.style="width:70%;"
    rightSide.style="width:30%;"
    console.log(leftSide.style);
})

rightSide.addEventListener("mouseover",()=> {
    rightSide.style="width:70%;"
    leftSide.style="width:30%;"
    console.log(leftSide.style);
})