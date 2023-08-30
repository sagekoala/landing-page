// JS for project-pages

// Store reference to main image, store array of imgs with id="small" in arrSmallImages
const mainPic = document.querySelector("#main-image");
const arrSmallImages = document.querySelectorAll("#small-image");

// Loop through arrSmallPics, set event listener on each image, replace main img with
// selected img
arrSmallImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        mainPic.src = `${e.srcElement.src}`
    });
});