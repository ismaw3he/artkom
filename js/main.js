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



