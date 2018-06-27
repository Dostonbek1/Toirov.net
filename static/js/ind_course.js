
// populating data for video list


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