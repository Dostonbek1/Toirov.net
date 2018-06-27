
// populating data for video list
var videos = {
    1: {name: "1. Installing Python 3", link: "https://www.youtube.com/embed/IX6mc9l6tY4?rel=0&autoplay=1"},
    2: {name: "2. Print Function and Strings", link: "https://www.youtube.com/embed/UsCQXe1OHZk?rel=0&autoplay=1"},
    3: {name: "3. Math", link: "https://www.youtube.com/embed/BvgPM9-krOY?rel=0&autoplay=1"},
    4: {name: "4. Variables", link: "https://www.youtube.com/embed/vKqVnr0BEJQ?rel=0&autoplay=1"},
    5: {name: "5. While Loop", link: "https://www.youtube.com/embed/jSs58VZVLw8?rel=0&autoplay=1"},
    6: {name: "6. For Loop", link: "https://www.youtube.com/embed/xtXexPSfcZg?list=PLQVvvaa0QuDe8XSftW-RAxdo6OmaeL85M?rel=0&autoplay=1"},
    7: {name: "7. If Statement", link: "https://www.youtube.com/embed/4u2ClNCtcgY?list=PLQVvvaa0QuDe8XSftW-RAxdo6OmaeL85M?rel=0&autoplay=1"},
    8: {name: "8. If Else", link: "https://www.youtube.com/embed/qf0sfRZ0hHc?list=PLQVvvaa0QuDe8XSftW-RAxdo6OmaeL85M?rel=0&autoplay=1"},
    9: {name: "9. If Elif Else", link: "https://www.youtube.com/embed/42MBMSOZgD4?list=PLQVvvaa0QuDe8XSftW-RAxdo6OmaeL85M?rel=0&autoplay=1"},
};

window.onload=function(){
    var select = document.getElementById("video-list");
    var video;

    for (var key in videos) {
        video = document.createElement("a");
        video.id = videos[key].link;
        video.className = "link";
        video.style = "cursor: pointer;"
        select.appendChild(video);
        var video_li = document.createElement("li");
        video.appendChild(video_li);
        var video_li_h6 = document.createElement("h6");
        video_li_h6.textContent = videos[key].name;
        video_li.appendChild(video_li_h6);
    }

    var links = document.getElementsByClassName("link") ;
    console.log(links)
    for (var i=0; i<links.length; i++) {
        links[i].onclick = handler;
        console.log(links[i]);
    }

    function handler(e) {
        videotarget = this.getAttribute("id");
        var video_player = document.getElementById('video-iframe');
        if (videotarget != video_player.src) {
            video_player.src = videotarget;
        }
    }   

};

var links = document.getElementsByClassName("link") ;
    console.log(links)
    for (var i=0; i<links.length; i++) {
        links[i].onclick = handler;
        console.log(links[i]);
    }

    function handler(e) {
        videotarget = this.getAttribute("id");
        var video_player = document.getElementById('video-iframe');
        if (videotarget != video_player.src) {
            video_player.src = videotarget;
        }
    }