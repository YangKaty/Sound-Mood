// ==========================
//
//         Soundmood
//
// ==========================


// ==============================
//
//   Initialize Soundcloud API
//
// ==============================

//
// # Initialize the Soundcloud API client with our client ID
//
SC.initialize({
  client_id: '3d1c831fc20ea4dd5abf626a4ec2431c'
});


// ===========================
//
//        Document ready
//
// ===========================
//
// # Document ready
//
// $(document).ready() runs once the page DOM is ready for JavaScript
// to execute. A page can't be manipulated safely until the document is ready.
//
$(document).ready(function() {
  $("#random").click(randomClicked);
  
  $("#go").click(goClicked);
  
  // Add click handlers to 'go' and 'random' buttons here.
});


// ======================================
//
//    Play a song for the user's mood
//
// ======================================

//
// # 'Go' button click handler
//
// 1. Get the user's mood from the form
// 2. Search Souncloud for a song for the mood
// 3. Update jumbotron #moodstatus to dipsplay the mood
//
function goClicked() {
  // TODO: fill this out
    var search = $("#mood").val();
    searchTracks(search);
    updateJumboTron(search);
}

//
// # Search soundcloud tracks
//
// 1. Search soundcloud using the Soundcloud API to find a song that
// matches the user's mood.
// 2. Play the song
// 3. Update jumbotron #songtitle to display the song title
//
// * **mood**, the user's mood.
//
function searchTracks(mood) {
  // TODO: fill this out
      SC.get(
      '/tracks', {q:mood, limit: 50}).then( 
      function(tracks){
        var i = Math.floor(Math.random()*tracks.length);
        var track = tracks[i];
        console.log(track);
        playTrack(track.id);
      });
  
}

//
// # Play a track
//
// Play a Soundcloud track.
// If there is already a song playing, stop that song first.
//
// Use 'currentSong' to keep track of the song that is playing.
//
// * **trackid**, the ID of the track to play.
//
var currentSong = null; // The song that is currently playing
function playTrack(trackid) {
  if (currentSong != null) {
    currentSong.pause();
    // TODO: stop the current song
  }
  SC.stream('/tracks/' + trackid).then(function(player) {
    player.play();
    currentSong = player;
  });
  // TODO: stream the track based on the given id and update 'currentSong'.
}

//
// # Update Jumbotron
//
// Updates the header text to show the user's mood.
// (Optional: change the jumbotron's color)
//
// * **mood**, the user's mood
//
function updateJumboTron(mood) {
  $('#moodstatus').text('It sounds like you are in a ' + mood +  ' mood!!');
}


// =======================
//
//      Randomization
//
// =======================


//
// # 'Random' button click handler
//
// Pick a mood at random from moodList and find a track for that mood.
//
function randomClicked() {
  // TODO: fill this out
  var Moo = randomMood();
  searchTracks(Moo);
  updateJumboTron(Moo);
}

//
// # Random Mood
//
// Returns a random mood from moodList.
//
// TODO: add moods to this list
var moodList = ["happy","sad","angry","hungry","screams"];
function randomMood() {
  // TODO: fill this out
  var randoming = Math.floor(Math.random()*moodList.length) ;
  return moodList[randoming];
}



// ========================
//
//     BONUS CHALLENGES
//
// ========================

//
// 1. Change the color of the jumbotron to fit the given mood.
//
// 2. Add a typeahead to the input field that shows the moods in our mood array.
//

//
// 1. Change jumbotron color!
//
//
// # Change the color of the jumbotron
//
// Update the background-color of the jumbotron using jQuery
//
// * **color**, the color to change to
//
function changeColor(color) {
  // TODO: fill this out
}

//
// # Get the mood color
//
// 1. Choose a color for the given mood and return it
// ex. If 'happy', then return '#fffff' (white)
// 2. Make sure to return a default color
//
// * **mood**, the user's mood
//
// * returns a color's hex code
//
function getColor(mood) {
  // TODO: fill this out
}


//
// 2. Typeahead
//
// Add a typeahead to the mood input field using the moodList as a source.
//
