

const progress = document.querySelector('#progress');
const previousButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;

//Next Button
nextButton.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
});

//Previous Button
previousButton.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
});

// Update circles state
function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = `${(actives.length / circles.length) * 100}%`;
}