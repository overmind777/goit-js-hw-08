import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
let player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('pause', function () {
  player.getCurrentTime().then(function (second) {
    console.log(second);
  });
});
