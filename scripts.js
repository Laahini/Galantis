//Parallax scroll - Home
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

//countdown
var countDownDate = new Date("May 11, 2022 15:37:25").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


function openVideo(evt, videoName) {
    var i, videocontent, videolinks;
    videocontent = document.getElementsByClassName("videocontent");
    for (i = 0; i < videocontent.length; i++) {
        videocontent[i].style.display = "none";
    }
    videolinks = document.getElementsByClassName("videolinks");
    for (i = 0; i < videolinks.length; i++) {
        videolinks[i].className = videolinks[i].className.replace(" active", "");
    }
    document.getElementById(videoName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
