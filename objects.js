const playlist = {
  Pokolgep: "Farkasok dala"
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}
