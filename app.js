// Event Listeners
const dotsContainer = document.querySelector('.dots-container');
const testimonialContainer = document.querySelector('.testimonials-container');
const firstTestimonial = document.querySelector('.div-4');
const secondTestimonial = document.querySelector('.div-5');
const thirdTestimonial = document.querySelector('.div-6');

// Change the testimonial to see, only on phone
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

function handleTouchStart(e) {
    touchStartOnXAxis = e.touches[0].clientX;
}

function handleTouchMove(e) {
    let touchMove = e.touches[0];
 
    // moveChange will keep the difference from the starting point of touch and the current touch point on X axis
    let distanceBetweenPoints = touchStartOnXAxis - e.touches[0].clientX;

    // if the user swipes from right to left
    if (distanceBetweenPoints > 150) {
        currentProfileDetails++;
        console.log(currentProfileDetails);

        if (currentProfileDetails == 1) {
            // display the correct info based on their number
            firstTestimonial.classList.remove('hidden');
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.add('hidden');

            // reset the position for starting point so no more than one change happene
            touchStartOnXAxis = 0;
           

            // "select" the correct dot by appying the class selected
            dotsContainer.children[0].classList.add('selected');
            // "unselect" other two orange dots
            dotsContainer.children[1].classList.remove('selected');
            dotsContainer.children[2].classList.remove('selected');
            console.log('s-a activat scenariul unu');
            console.log(currentProfileDetails);
        }
        else if (currentProfileDetails == 2) {
            // display the correct info based on their number
            secondTestimonial.classList.remove('hidden');
            firstTestimonial.classList.add('hidden');
            thirdTestimonial.classList.add('hidden');

            // reset the position for starting point so no more than one change happene
            touchStartOnXAxis = 0;
           
            
               // "select" the correct dot by appying the class selected
            dotsContainer.children[1].classList.add('selected');
            console.log(dotsContainer.children[1]);
            // "unselect" other two orange dots
            dotsContainer.children[0].classList.remove('selected');
            dotsContainer.children[2].classList.remove('selected');
            console.log(dotsContainer.children[1]);
            console.log('s-a activat scenariul doi');
            console.log(currentProfileDetails);
        }
        else if (currentProfileDetails == 3) {
            // display the correct info based on their number
            firstTestimonial.classList.add('hidden');
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.remove('hidden');

            // reset the position for starting point so no more than one change happene
            touchStartOnXAxis = 0;
            // increase the info id to the correct one
            currentProfileDetails = 0;

            // "select" the correct dot by appying the class selected
            dotsContainer.children[2].classList.add('selected');
            // "unselect" other two orange dots
            dotsContainer.children[0].classList.remove('selected');
            dotsContainer.children[1].classList.remove('selected');
            console.log(dotsContainer.children[2]);
            console.log(currentProfileDetails);
            console.log(thirdTestimonial);
        }
        
    }

    console.log(currentProfileDetails);

    // if the user swipes from left to right
    if (distanceBetweenPoints < -150) {
        currentProfileDetails--;

        if (currentProfileDetails == -1) {
            // display the correct info based on their number
            firstTestimonial.classList.remove('hidden');
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.add('hidden');

            // reset the position for starting point so no more than one change happene
            touchStartOnXAxis = 0;
           
            // increase the info id to the correct one
            currentProfileDetails = 4;

            // "select" the correct dot by appying the class selected
            dotsContainer.children[0].classList.add('selected');
            // "unselect" other two orange dots
            dotsContainer.children[1].classList.remove('selected');
            dotsContainer.children[2].classList.remove('selected');
            console.log('s-a activat scenariul unu');
            console.log(currentProfileDetails);
        }
        else if (currentProfileDetails == -2) {
            // display the correct info based on their number
            secondTestimonial.classList.remove('hidden');
            firstTestimonial.classList.add('hidden');
            thirdTestimonial.classList.add('hidden');

            // reset the position for starting point so no more than one change happene
            touchStartOnXAxis = 0;
           
            
               // "select" the correct dot by appying the class selected
            dotsContainer.children[1].classList.add('selected');
            console.log(dotsContainer.children[1]);
            // "unselect" other two orange dots
            dotsContainer.children[0].classList.remove('selected');
            dotsContainer.children[2].classList.remove('selected');
            console.log(dotsContainer.children[1]);
            console.log('s-a activat scenariul doi');
            console.log(currentProfileDetails);
        }
        else if (currentProfileDetails == -3) {
            // display the correct info based on their number
            firstTestimonial.classList.add('hidden');
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.remove('hidden');

            // reset the position for starting point so no more than one change happene
            touchStartOnXAxis = 0;
            

            // "select" the correct dot by appying the class selected
            dotsContainer.children[2].classList.add('selected');
            // "unselect" other two orange dots
            dotsContainer.children[0].classList.remove('selected');
            dotsContainer.children[1].classList.remove('selected');
            console.log(dotsContainer.children[2]);
            console.log(currentProfileDetails);
            console.log(thirdTestimonial);
        }
        
    }
}