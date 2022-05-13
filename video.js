// https://www.googleapis.com/youtube/v3/videos?part=snippet,player&id=${videoId}&key=AIzaSyBZVoJd4B4JPO0WAW1clpcxgx9udZvvDpg


var videoDetails = JSON.parse(localStorage.getItem('videoDetails'));

document.querySelector('#videoPlayer').innerHTML=videoDetails;

