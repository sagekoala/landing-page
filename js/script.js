// JS for index.html

const modeButton = document.querySelector("button");
const body = document.querySelector("body");

modeButton.addEventListener('click', () => {

    body.style.backgroundColor = "#121212";
    body.style.color = "white";

});

const array = [1, 2, 3, 4, 5, 6];

// Write my own for each function
const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length;i++) {
        const element = arr[i];
        cb(element);
    }
}

const cb = (val) => {
    console.log(val*2);
}

myForEach(array, cb); 