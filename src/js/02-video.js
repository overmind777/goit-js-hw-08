import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const updateCurrentTime = throttle(time => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
});

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', data => {
  const currentTime = data.seconds;
  updateCurrentTime(currentTime);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
