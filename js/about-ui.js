// Script to control sidebar selectors and display corresponding sections

// Reference to content sections
const introductionSection = document.querySelector('.introduction-section');
const servicesSection = document.querySelector('.services-section');
const certificationsSection = document.querySelector('.certification-section');

// List of sidebar selectors
const selectors = document.querySelectorAll('.selector');

// Set up event listener on each selector, display corresponding text

selectors.forEach((selector) => {
    selector.addEventListener('click', (e) => {
        let selection = e.srcElement.innerText;
        if (selection === 'Introduction') {
            introductionSection.style.display = 'block';
            servicesSection.style.display = 'none';
            certificationsSection.style.display = 'none';

        } else if (selection === 'Services') {
            servicesSection.style.display = 'block';
            introductionSection.style.display = 'none';
            certificationsSection.style.display = 'none';
        } else if (selection === 'Certifications') {
            certificationsSection.style.display = 'block';
            introductionSection.style.display = 'none';
            servicesSection.style.display = 'none';
        }
    });
});



