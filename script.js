const videoSources = ["videos\background.mp4", "videos\download.mp4"];
let currentIndex = 0;

const video = document.getElementById("bg-video");

function switchVideo() {
  currentIndex = (currentIndex + 1) % videoSources.length;
  video.src = videoSources[currentIndex];
  video.load();
  video.play();
}

setInterval(switchVideo, 15000); // every 15 seconds
