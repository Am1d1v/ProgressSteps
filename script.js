

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
    console.log(currentActive);
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
    progress.style.width = `${((actives.length - 1)/ (circles.length - 1)) * 100}%`;

    if(currentActive === 1){
        previousButton.disabled = true;
    } else if (currentActive >= 2){
        previousButton.disabled = false;
    }
    
    if (currentActive === circles.length){
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}