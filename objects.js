const playlist = {
  Pokolgep: "Farkasok dala"
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, playlist.artist){
  delete playlist.artist;
  return playlist;
}
