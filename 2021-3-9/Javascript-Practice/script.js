//Bài 1:
// for (let i = 1; i <= 100; i++){
//     console.log(i)
// }

//Bài 2:
// for (let i = 100; i > 0; i--){
//     if (i % 2 == 0) {
//         console.log(`${i} là một số chẵn.`)
//     } else {
//         console.log(`${i} là một số lẻ.`)
//     }
// }

//Bài 3:
// function findEven(number) {
//     for (let i = 2; i <= number; i += 2) {
//         console.log(i)
//     }
// }
// number = prompt("Please enter a number.")
// findEven(number)

//Bài 4:
let box = document.getElementById("box")
box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "red";
})
box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "blue";
})

//Bài 5:
function numberOneTriangle(number) {
    for (let i = 1; i <= number; i++) {
        let one = "1";
        for (let j = 1; j < i; j++) {
            one += "1";
        }
        console.log(one);
    }
}
number5 = prompt("Please enter a number.");
numberOneTriangle(number5);