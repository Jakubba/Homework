const btnPlay = document.querySelector("#btnPlay");
const btnStop = document.querySelector("#btnStop");
const btnVolume = document.querySelector("#btnVolume");

var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'white',
  progressColor: 'red',
  barWidth: 4,
  height: 90,
  responsive: true,
  hideScrollbar: true,
  barRadius: 2,
});

wavesurfer.load('./media/music.mp3');

btnPlay.onclick = function(){
  wavesurfer.playPause();
  if(btnPlay.src.includes("play.png")){
    btnPlay.src = "media/pause.png"
  }else{
    btnPlay.src = "media/play.png"
  }
}
btnStop.onclick = function(){
    wavesurfer.stop();
    btnPlay.src = "media/play.png"
}
btnVolume.onclick = function(){
    wavesurfer.toggleMute();
    if(btnPlay.src.includes("volume.png")){
    btnPlay.src = "media/mute.png"
  }else{
    btnPlay.src = "media/volume.png"
  }
}