// Event Listeners
const dotsContainer = document.querySelector('.dots-container');
const testimonialContainer = document.querySelector('.testimonials-container');
const firstTestimonial = document.querySelector('.div-4');
const secondTestimonial = document.querySelector('.div-5');
const thirdTestimonial = document.querySelector('.div-6');

// Change the testimonial to see (only on phone)
dotsContainer.addEventListener('click', (e) => {
    const children = dotsContainer.children;

    if (e.target.classList.contains('dot-1')) {
        // if the selected avatar is not displayed, display it
        if (firstTestimonial.classList.contains('hidden')) {
            firstTestimonial.classList.remove('hidden');
        }

        // unselect all dots
        for(let i = 0; i < children.length; i++) {
            children[i].classList.remove('selected');
        }

        // select the right dot
        document.querySelector('.dot-1').classList.add('selected');

        // hide the rest of the avatars
        secondTestimonial.classList.add('hidden');
        thirdTestimonial.classList.add('hidden');

        console.log(e.target);
    }

    else if (e.target.classList.contains('dot-2')) {
        // if the selected avatar is not displayed, display it
        if (secondTestimonial.classList.contains('hidden')) {
            secondTestimonial.classList.remove('hidden');
        }

        // unselect all dots
        for(let i = 0; i < children.length; i++) {
            children[i].classList.remove('selected');
        }

        // select the right dot
        document.querySelector('.dot-2').classList.add('selected');

        // hide the rest of the avatars
        firstTestimonial.classList.add('hidden');
        thirdTestimonial.classList.add('hidden');
        console.log(e.target);

    }

    else if (e.target.classList.contains('dot-3')) {
        // if the selected avatar is not displayed, display it
        if (thirdTestimonial.classList.contains('hidden')) {
            thirdTestimonial.classList.remove('hidden');
        }

        // unselect all dots
        for(let i = 0; i < children.length; i++) {
            children[i].classList.remove('selected');
        }

        // select the right dot
        document.querySelector('.dot-3').classList.add('selected');

        // hide the rest of the avatars
        firstTestimonial.classList.add('hidden');
        secondTestimonial.classList.add('hidden');
        console.log(e.target);

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
    console.log('Userul are voi sa face swipe din nou: ' + allolwSwipe);
}

function handleTouchMove(e) {
    console.log('Se activeaza functia de swipe');
    let touchMove = e.touches[0].clientX;
 
    // moveChange will keep the difference from the starting point of touch and the current touch point on X axis
    // so I know if the user swipes left or right based on the start touch point and curent touch point
    let distanceBetweenPoints = touchStartOnXAxis - e.touches[0].clientX;


    // if the user swipes from right to left
    if (distanceBetweenPoints > 150 && allolwSwipe == true) {
        currentProfileDetails++;

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
            console.log('Swipe left');
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
            console.log('Swipe left');
        }
        else if (currentProfileDetails == 3) {
        console.log('Swipe right');
            // display the correct info based on their number
            firstTestimonial.classList.add('hidden');
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.remove('hidden');


  
            // increase the info id to the correct one
            currentProfileDetails = 0;

            // "select" the correct dot by appying the class selected
            dotsContainer.children[2].classList.add('selected');
            // "unselect" other two orange dots
            dotsContainer.children[0].classList.remove('selected');
            dotsContainer.children[1].classList.remove('selected');
            console.log('Swipe left');
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