
// Target buttons

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        window.location.href = "./html/contact.html";
    });
});