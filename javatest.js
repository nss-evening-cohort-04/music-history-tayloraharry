var songs = [];
var currentSong = 0;

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Stairway to Heaven by Led Zeppelin on the album Led Zeppelin IV");
songs.push("Baba O'Reilly by The Who on the album Who's Next");

for (var i = 0; i < songs.length; i++) {
  songs[i]=songs[i].replace(">",'');
  songs[i]=songs[i].replace("*",'');
  songs[i]=songs[i].replace("@",'');
  songs[i]=songs[i].replace("(",'');
  songs[i]=songs[i].replace("!",'');
  songs[i]=songs[i].replace("  ",' ');
  currentSong++;
  document.getElementById("songs").innerHTML += '<ul>' + songs[i] + '</ul>'

}
