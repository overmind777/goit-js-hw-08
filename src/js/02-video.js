import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const updateCurrentTime = time => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
};

player.on(
  'timeupdate',
  throttle(data => {
    const currentTime = data.seconds;
    updateCurrentTime(currentTime);
  }, 1000)
);

const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
