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
// testimonialContainer.addEventListener('touchend', handleTouchEnd);

let touchStartOnXAxis;
let currentProfileDetails = 1;

function handleTouchStart(e) {
    touchStartOnXAxis = e.touches[0].clientX;
    console.log('Starting point: ' + touchStartOnXAxis);
}

function handleTouchMove(e) {
    let touchMove = e.touches[0];
    

    // moveChange will keep the difference from the starting point of touch and the current touch point on X axis
    let distanceBetweenPoints = touchStartOnXAxis - e.touches[0].clientX;
    console.log(distanceBetweenPoints);

    if (distanceBetweenPoints > 150) {
        if (currentProfileDetails == 1) {
            firstTestimonial.classList.add('hidden');
            secondTestimonial.classList.remove('hidden');
            touchStartOnXAxis = 0;
            currentProfileDetails++;
        }
        else if (currentProfileDetails == 2) {
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.remove('hidden');
            touchStartOnXAxis = 0;
            currentProfileDetails++;
        }
        else if (currentProfileDetails == 3) {
            // display the correct info based on their number
            secondTestimonial.classList.add('hidden');
            thirdTestimonial.classList.add('hidden');
            firstTestimonial.classList.remove('hidden');
            // reset the position for starting point so no more than one change happene
            touchStartOnXAxis = 0;
            // increase the info id to the correct one
            currentProfileDetails = 1;
        }
        
    }
}

function handleTouchEnd(e) {

}