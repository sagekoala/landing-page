// JS for project-pages

// Store reference to main image, store array of imgs with id="small" in arrSmallImages
const mainImage = document.querySelector("#main-image");
const arrSmallImages = document.querySelectorAll("#small-image");

// Loop through arrSmallPics, set event listener on each image, replace main img with
// selected img
arrSmallImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        mainImage.src = `${e.srcElement.src}`
    });
});

// Reference to next and previous buttons
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

function getPreviousImage() {

    let newKey= 0;

    // Get current main image and key
    const currentMainImage = document.querySelector("#main-image");
    const currentKey = currentMainImage.getAttribute("data-key");
    const intCurrentKey = parseInt(currentKey);
    
    if ((intCurrentKey - 1) < 0) {
        newKey = (arrSmallImages.length - 1);
    } else {
        newKey = intCurrentKey - 1;
    }

    // Find image with data-key=newKey, update main image 
    const newCurrentImage = document.querySelector(`img[data-key="${newKey}"]`);
    currentMainImage.src = newCurrentImage.src;
    currentMainImage.setAttribute('data-key', newKey.toString());

}

function getNextImage() {
    let newKey= 0;

    // Get current main image and key
    const currentMainImage = document.querySelector("#main-image");
    const currentKey = currentMainImage.getAttribute("data-key");
    const intCurrentKey = parseInt(currentKey);

    if ((intCurrentKey + 1) > (arrSmallImages.length - 1)) {
        newKey = 0;
    } else {
        newKey = intCurrentKey + 1;
    }

    // Find image with data-key=newKey, update main image 
    const newCurrentImage = document.querySelector(`img[data-key="${newKey}"]`);
    currentMainImage.src = newCurrentImage.src;
    currentMainImage.setAttribute('data-key', newKey.toString());

}


// Add event listener on buttons
previousBtn.addEventListener('click', getPreviousImage);
nextBtn.addEventListener('click', getNextImage);