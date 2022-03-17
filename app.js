// Event Listeners
const dotsContainer = document.querySelector('.dots-container');
const testimonialContainer = document.querySelector('.testimonials-container');
const firstTestimonial = document.querySelector('.div-4');
const secondTestimonial = document.querySelector('.div-5');
const thirdTestimonial = document.querySelector('.div-6');

// Change the testimonial you want to see (only on phone)
dotsContainer.addEventListener('click', (e) => {
    const children = dotsContainer.children;

    if (e.target.classList.contains('dot-1')) {
        // if the selected avatar is not displayed, display it
        if (firstTestimonial.classList.contains('hidden')) {
            firstTestimonial.classList.remove('hidden');
        }

        // unselect all dots
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('selected');
        }

        // select the right dot
        document.querySelector('.dot-1').classList.add('selected');

        // hide the rest of the avatars
        secondTestimonial.classList.add('hidden');
        thirdTestimonial.classList.add('hidden');
    }

    else if (e.target.classList.contains('dot-2')) {
        // if the selected avatar is not displayed, display it
        if (secondTestimonial.classList.contains('hidden')) {
            secondTestimonial.classList.remove('hidden');
        }

        // unselect all dots
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('selected');
        }

        // select the right dot
        document.querySelector('.dot-2').classList.add('selected');

        // hide the rest of the avatars
        firstTestimonial.classList.add('hidden');
        thirdTestimonial.classList.add('hidden');
    }

    else if (e.target.classList.contains('dot-3')) {
        // if the selected avatar is not displayed, display it
        if (thirdTestimonial.classList.contains('hidden')) {
            thirdTestimonial.classList.remove('hidden');
        }

        // unselect all dots
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('selected');
        }

        // select the right dot
        document.querySelector('.dot-3').classList.add('selected');

        // hide the rest of the avatars
        firstTestimonial.classList.add('hidden');
        secondTestimonial.classList.add('hidden');
    }
});




// ############################ Handle the Phone Swipe to change the testimonial

testimonialContainer.addEventListener('touchstart', handleTouchStart);
testimonialContainer.addEventListener('touchmove', handleTouchMove);

let touchStartOnXAxis;
let currentProfileDetails = 1;

// let swipe run again
let allolwSwipe = false;

function handleTouchStart(e) {
    touchStartOnXAxis = e.touches[0].clientX;

    // if the user clicks on the screen then allow him to change the profile on swipe
    allolwSwipe = true;
}

function handleTouchMove(e) {
    let touchMove = e.touches[0].clientX;

    // moveChange will keep the difference from the starting point of touch and the current touch point on X axis
    // so I know if the user swipes left or right based on the start touch point and curent touch point
    let distanceBetweenPoints = touchStartOnXAxis - e.touches[0].clientX;


    // if the user swipes from right to left
    if (distanceBetweenPoints > 150 && allolwSwipe == true) {
        // debugger
        currentProfileDetails++;

        if (currentProfileDetails > 3) {
            currentProfileDetails = 1;
        }

        if (currentProfileDetails == 1) {
            // display the correct info based on their number
            firstTestimonial.classList.remove('hidden');
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.add('hidden');


            // "select" the correct dot by appying the class selected
            dotsContainer.children[0].classList.add('selected');
            // "unselect" other two orange dots

            dotsContainer.children[1].classList.remove('selected');
            dotsContainer.children[2].classList.remove('selected');
        }
        else if (currentProfileDetails == 2) {
            // display the correct info based on their number
            secondTestimonial.classList.remove('hidden');
            firstTestimonial.classList.add('hidden');
            thirdTestimonial.classList.add('hidden');


            // "select" the correct dot by appying the class selected
            dotsContainer.children[1].classList.add('selected');

            // "unselect" other two orange dots
            dotsContainer.children[0].classList.remove('selected');
            dotsContainer.children[2].classList.remove('selected');
        }
        else if (currentProfileDetails == 3) {
            // display the correct info based on their number
            firstTestimonial.classList.add('hidden');
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.remove('hidden');

            // "select" the correct dot by appying the class selected
            dotsContainer.children[2].classList.add('selected');
            // "unselect" other two orange dots
            dotsContainer.children[0].classList.remove('selected');
            dotsContainer.children[1].classList.remove('selected');
        }

        allolwSwipe = false;
    }

    // if the user swipes from left to right
    if (distanceBetweenPoints < -150 && allolwSwipe == true) {

        currentProfileDetails--;

        if (currentProfileDetails <= 0) {
            currentProfileDetails = 3;
        }

        if (currentProfileDetails == 1) {
            // display the correct info based on their number
            firstTestimonial.classList.remove('hidden');
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.add('hidden');


            // "select" the correct dot by appying the class selected
            dotsContainer.children[0].classList.add('selected');
            // "unselect" other two orange dots
            dotsContainer.children[1].classList.remove('selected');
            dotsContainer.children[2].classList.remove('selected');
        }
        else if (currentProfileDetails == 2) {
            // display the correct info based on their number
            secondTestimonial.classList.remove('hidden');
            firstTestimonial.classList.add('hidden');
            thirdTestimonial.classList.add('hidden');


            // "select" the correct dot by appying the class selected
            dotsContainer.children[1].classList.add('selected');

            // "unselect" other two orange dots
            dotsContainer.children[0].classList.remove('selected');
            dotsContainer.children[2].classList.remove('selected');
        }
        else if (currentProfileDetails == 3) {
            // display the correct info based on their number
            firstTestimonial.classList.add('hidden');
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.remove('hidden');


            // "select" the correct dot by appying the class selected
            dotsContainer.children[2].classList.add('selected');
            // "unselect" other two orange dots
            dotsContainer.children[0].classList.remove('selected');
            dotsContainer.children[1].classList.remove('selected');
        }

        allolwSwipe = false;
    }
}



// ############################ Handle the hamburger menu
const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');

hamburgerMenuIcon.addEventListener('click', openMenu);

function openMenu() {
    // change the image from hamburger to X
    hamburgerMenuIcon.src = "/images/icon-close.svg";

    let htmlMenu = document.createElement('div');
    htmlMenu.classList.add('hamburger-menu-mobile');

    htmlMenu.innerHTML = `
        <ul>
            <li class="list-item">Pricing</li>
            <li class="list-item">Product</li>
            <li class="list-item">About Us</li>
            <li class="list-item">Careers</li>
            <li class="list-item">Comunity</li>
        </ul>
    `;

    // Select the first section
    const firstSection = document.querySelector('.first-section');

    // Select the parent element of first section and inside it, right before first section add "htmlMenu"
    firstSection.parentElement.insertBefore(htmlMenu, firstSection);


    // add an overlay over tha page so the menu is the main element that user sees
    document.querySelector('.container').classList.add('overlay');
}

// close the hamburger menu by clicking on the overlay
const container = document.querySelector('.container');
container.addEventListener('click', closeMenu);

function closeMenu(e) {
    if (e.target.classList.contains('overlay')) {
        // change the X (close) icon to back to hamburger icon
        hamburgerMenuIcon.src = "/images/icon-hamburger.svg";

        // remove the menu
        document.querySelector('.hamburger-menu-mobile').remove();

        // remove the overlay
        container.classList.remove('overlay');
    }
}



// ############################ OPEN SOCIAL MEDIA SITES WHEN CLICKED ON THEIR ICON
document.querySelector('.facebook').addEventListener('click', () => {
    window.open('https://www.facebook.com/');
});
document.querySelector('.youtube').addEventListener('click', () => {
    window.open('https://www.youtube.com/');
});
document.querySelector('.twitter').addEventListener('click', () => {
    window.open('https://twitter.com/?lang=en');
});
document.querySelector('.printerest').addEventListener('click', () => {
    window.open('https://ro.pinterest.com/');
});
document.querySelector('.instagram').addEventListener('click', () => {
    window.open('https://www.instagram.com/');
});



// ############################ HANDLE WRONG EMAIL FORMATS INSIDE EMAIL FIELD
// a function that searches for email paterns
function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField.value)) {
        return true;
    }
    else {
        return false;
    }
}


const emailField = document.querySelector('.search-input');

document.querySelector('.send-email-button').addEventListener('click', () => {  
    //  show a validation message
    if (validateEmail(!emailField.value)) {
        // create a div // add classes to the div 
        const validationMessageContainer = document.createElement('div');
        validationMessageContainer.classList.add('validation-message', 'flex-row');

    
        // create an img // add a source to the img
        const checkMarkImg = document.createElement('img');
        checkMarkImg.classList.add('check-mark');
        checkMarkImg.src = '/images/check-mark.webp';
        

        // add the check mark image inside the div
        validationMessageContainer.appendChild(checkMarkImg);


        // createa a h3 // add thext inside the h3  // insert the h3 inside the validation message container
        const text = document.createElement('h3');
        text.textContent = 'An email was sent to your email address';
        validationMessageContainer.appendChild(text);

        // add the validation container inside the body's contianer
        const container = document.querySelector('.container');
        container.appendChild(validationMessageContainer);

        
        // REMOVE THE VALIDATION MESSAGE AFTER 3 SECONDS
        setTimeout( () => {
            validationMessageContainer.remove();
        }, 3000);
    }

    // if the "email validation function" doesn't return ture then the border and text become red and placeholder changes
    else {
        emailField.style.border = '3px red solid';
        emailField.style.color = 'red';
        emailField.placeholder = 'Please insert a valid email address'

        // after 3 second reverse the effects
        setTimeout ( () => {
            emailField.style.border = '2px rgb(133, 133, 133) solid';
            emailField.style.color = 'black';
        }, 3000);
    }
});