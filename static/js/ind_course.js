var links = document.getElementsByClassName("link") ;
console.log(links)
for (var i=0; i<links.length; i++) {
    links[i].onclick = handler;
    console.log(links[i]);
}

function handler(e) {
    e.preventDefault();
    videotarget = this.getAttribute("id");
    var video_player = document.getElementById('video-iframe');
    if (videotarget != video_player.src) {
        video_player.src = videotarget;
    }
}