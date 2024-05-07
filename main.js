const displayMediaOptions = {
  video: {
      displaySurface: "monitor",
  },
  audio: false,
};

const container = document.querySelector('#container');
const video = document.querySelector('video');
const viewportSize = 100;

document.addEventListener('mousemove', event => {
  const {screenX, screenY} = event;
  video.style.marginLeft = -screenX + viewportSize / 2;
  video.style.marginTop = -screenY + viewportSize / 2;
})

navigator.mediaDevices.getDisplayMedia(displayMediaOptions).then((screenCapture) => {
  video.srcObject = screenCapture;
})
