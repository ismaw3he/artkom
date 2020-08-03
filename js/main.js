const nameInput= document.getElementById("name");
const numberInput= document.getElementById("number");
const messageInput= document.getElementById("message");
function zoomImg(){
    let img=document.getElementById("tv-image");
    img.classList.add("zoom-in-tv");
}
window.addEventListener('scroll', function(e) {
    if(window.scrollY >330){
        zoomImg();
    }
});
window.onload = function() {
    document.getElementById("submit-btn").addEventListener('click',(event)=>{

        let message = {
            name: nameInput.value,
            number: numberInput.value,
            message: messageInput.value
        };
        emailjs.send("gmail", "artkom", message,'user_cQXScjsh5GkmXVxqDhC9F')
    });
    const loaderContainer= document.getElementsByClassName("loader-container")[0];
    loaderContainer.classList.add("hidden");
};

const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const indicatorParents = document.querySelector('.controls ul');
let sectionIndex = 0;

function setIndex() {
    document.querySelector(".controls .selected")
        .classList.remove("selected");
    slider.style.transform = "translate(" + (sectionIndex) * -33.33 + "%)";
}

function moveSlider(direction) {
    if (direction === "left") {
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
        setIndex()
        indicatorParents.children[sectionIndex].classList.add('selected');
    }
    else if (direction === "right") {
        sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
        setIndex()
        indicatorParents.children[sectionIndex].classList.add('selected');
    }
}

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
    indicator.addEventListener("click", () => {
        sectionIndex = ind;
        setIndex()
        indicator.classList.add("selected")

    });
});

leftArrow.addEventListener("click", () => {
    moveSlider("left");
});

rightArrow.addEventListener("click", () => {
    moveSlider("right");
});

const carousel = document.querySelector(".carousel");
let initialPosition = null;
let moving = false;

function gestureDown(e) {
    initialPosition = e.pageX;
    moving = true;
}
function gestureMove(e) {
    if (moving) {
        const currentPosition = e.pageX;
        const diff = currentPosition - initialPosition;
        if (diff < 0) {
            moveSlider("right");
        }
        else {
            moveSlider("left");
        }
        moving = false;
    }
}

if (window.PointerEvent) {
    slider.addEventListener("pointerdown", gestureDown)
    slider.addEventListener("pointermove", gestureMove)
}
else {
    slider.addEventListener("touchdown", gestureDown)
    slider.addEventListener("touchmove", gestureMove)
    slider.addEventListener("mousedown", gestureDown)
    slider.addEventListener("mousemove", gestureMove)
}



