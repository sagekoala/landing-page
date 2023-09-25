// Script to control sidebar selectors and display corresponding sections

// List of sidebar selectors
const selectors = document.querySelectorAll('.selector');

// Rewrite below eventListener but create eventHandler function
selectors.forEach((selector) => {
    selector.addEventListener('click', eventHandler);
});

// Pass the event to displaySelectedElement();
function eventHandler(selectedElement) {
    displaySelectedElement(selectedElement);
}

// Add active class and display content for selectedElement, remove display for non-selected siblings
function displaySelectedElement(selectedElement) {
    let kids = selectedElement.srcElement.parentElement.children; // Node list of selectedElement and siblings
    let selectedElementText = selectedElement.srcElement.innerText;

    for (let i = 0; i < kids.length; i++) {

        // Get reference to currentElement
        let temp = kids[i].innerText.toLowerCase() + '-section';
        let currentElement = document.querySelector(`.${temp}`);

        // If not the selected element, remove active class and set display to none
        if (kids[i].innerText !== selectedElementText) {
            kids[i].classList.remove('active');
            currentElement.style.display = 'none';
        } else {
            kids[i].classList.add('active');
            currentElement.style.display = 'block';
        }
    }
}
