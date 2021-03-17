// Câu 1:
let sub1 = document.getElementById("sub1");
let input1 = document.getElementById("input1");
let ans1 = document.getElementById("ans1");

sub1.addEventListener("click", () => {
    findEven(input1.value);
});
function findEven(number) {
    if (4 <= number && number <= 20) {
        ans1.innerHTML = "Answer: ";
        for (let i = 4; i <= number; i += 2) {
            ans1.innerHTML += i + " ";
        }
    } else {
        ans1.innerHTML = "Answer: The input is out of range.";
    }
}

// Câu 2:
let square2 = document.getElementById("square2");
square2.addEventListener("mouseover", () => {
    let red = Math.floor(Math.random() * 360);
    let blue = Math.floor(Math.random() * 360);
    let green = Math.floor(Math.random() * 360);
    square2.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})
square2.addEventListener("mouseout", () => {
    square2.style.backgroundColor = "black";
})

// Câu 3:
let sub3 = document.getElementById("sub3");
let input3 = document.getElementById("input3");
let ans3 = document.getElementById("ans3");

sub3.addEventListener("click", () => {
    numberOneTriange(input3.value);
});
function numberOneTriange(number) {
    ans3.innerHTML = "<p>Answer:</p>"
    for (let i = 0; i < number; i++) {
        text = "1";
        for (let j = 0; j < i; j++) {
            text += "1";
        }
        ans3.innerHTML += `<p>${text}</p>`;
    }
}

// Câu 4:
function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // hour = fixTime(hour);
    // minute = fixTime(minute);
    // second = fixTime(second);
    document.getElementById("clock").innerHTML = hour + " : " + minute + " : " + second;
    // let t = setTimeout(function () { currentTime() }, 1000);
}

function fixTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime();