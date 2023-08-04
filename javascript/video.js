// ? Play the video
// function playVideo() {
//     var video = document.getElementById('video-player');
//     video.play();
//   }
  
//  ? Pause the video
//   function pauseVideo() {
//     var video = document.getElementById('video-player');
//     video.pause();
//   }
  
//  ? Stop the video
//   function stopVideo() {
//     var video = document.getElementById('video-player');
//     video.pause();
//     video.currentTime = 0;
//   }
  
//? Add event listeners to the video player controls
//   document.getElementById('video-player').addEventListener('play', function() {
//     console.log('Video is playing');
//   });
  
//   document.getElementById('video-player').addEventListener('pause', function() {
//     console.log('Video is paused');
//   });
  
//   document.getElementById('video-player').addEventListener('ended', function() {
//     console.log('Video playback ended');
//   });
  

//? Define the video element
let video = document.getElementById('video-player');

//? Play the video
function playVideo() {
  video.play();
}

//? Pause the video
function pauseVideo() {
  video.pause();
}

//? Stop the video
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

//? Add event listeners to the video player controls
video.addEventListener('play', function() {
  console.log('Video is playing');
});

video.addEventListener('pause', function() {
  console.log('Video is paused');
});

video.addEventListener('ended', function() {
  console.log('Video playback ended');
});
