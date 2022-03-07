// Event Listeners
const dotsContainer = document.querySelector('.dots-container');
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

let touchstartX = 0
let touchendX = 0

const slider = document.getElementById('testimonials-container')

function handleGesture() {
  if (touchendX < touchstartX) alert('swiped left!');
  if (touchendX > touchstartX) alert('swiped right!');
}

slider.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  })
  
  slider.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    handleGesture()
  })