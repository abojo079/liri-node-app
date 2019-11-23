````
require("dotenv").config();
var keys= require("./keys.js")
var spotify = newSpotify(keys.spotify);


const search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
const term = process.argv.slice(3).join(" ");

function userInput(search, term){
switch (userInput){
case 'concert-this':
    concertThis();
    break;
case 'spotify-this':
    spotifyThis();
    break;
case 'movie-this' :
    movieThis();
    break;

}

}













function spotifyThisSong(){
if (spotifyThisSong === undefined || null) {
spotifyThisSong = "The Sign Ace of Base";
}}