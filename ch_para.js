let ABC_AUS = 'W1ilCy6XrmI';
let FTV_TW = 'XGEmg3vhrzU';
let CTS_TW = 'yUTy1U1wTwE';
let PTS_TW = 'JAzRXylm3M0';

let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let ytplayer1,ytplayer2,ytplayer3,ytplayer4;

function onYouTubeIframeAPIReady() {
  ytplayer1 = new YT.Player('ABC', {
    playerVars: { 'autoplay': 1 },
    videoId: ABC_AUS,
    events: {
      'onReady': onPlayerReady
    }
  });
  ytplayer2 = new YT.Player('FTV', {
    playerVars: { 'autoplay': 1 },
    videoId: FTV_TW,
    events: {
      'onReady': onPlayerReady
    }
  });
  ytplayer3 = new YT.Player('CTS', {
    playerVars: { 'autoplay': 1 },
    videoId: CTS_TW,
    events: {
      'onReady': onPlayerReady
    }
  });
  ytplayer4 = new YT.Player('PTS', {
    playerVars: { 'autoplay': 1 },
    videoId: PTS_TW,
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

$(document).on('mouseenter', '#ABC', function() {
  ytplayer1.unMute();
  ytplayer2.mute();
  ytplayer3.mute();
  ytplayer4.mute();
});
$(document).on('mouseenter', '#FTV', function() {
  ytplayer2.unMute();
  ytplayer1.mute();
  ytplayer3.mute();
  ytplayer4.mute();
});
$(document).on('mouseenter', '#CTS', function() {
  ytplayer3.unMute();
  ytplayer1.mute();
  ytplayer2.mute();
  ytplayer4.mute();
});
$(document).on('mouseenter', '#PTS', function() {
  ytplayer4.unMute();
  ytplayer1.mute();
  ytplayer2.mute();
  ytplayer3.mute();
});
