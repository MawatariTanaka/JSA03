localStorage.setItem("username", ["Bùi Nhật Minh", "Lương Minh Quân", "Dương Hồng Sơn"]);
console.log(localStorage.username);
localStorage.setItem("students", JSON.stringify(["Bùi Nhật Minh", "Trần Phương", "Duong Nguyen"]));
console.log(JSON.parse(localStorage.students));
console.log(JSON.parse(window.localStorage.getItem("students")));