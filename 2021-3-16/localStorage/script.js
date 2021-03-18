// 1
localStorage.setItem("students", JSON.stringify(["An", "Anh", "Minh", "Phương", "Dương", "Khánh"]));
let lesson = {
    web: "html css js",
    others: "open source",
};
localStorage.setItem("lessons", JSON.stringify(lesson));
localStorage.setItem("numOfPeople", 6);
// 2
console.log(JSON.parse(localStorage.getItem("students")));
console.log(JSON.parse(localStorage.getItem("lessons")));
console.log(JSON.parse(localStorage.getItem("numOfPeople")));
// 3
localStorage.removeItem("lessons");
// 4
localStorage.clear();