function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }
    itunesService.getMusicByArtist('hello').then(drawSongs);
    function drawSongs(songList) {
        // console.log(songList);
        var template = ""
        var id = 0
        for (var i = 0; i < songList.length; i++) {
            var song = songList[i]
            if (song.collection) {
                template +=
                    `
                    <div id = "song-list" class="col-md-4">
                    <div class="img-container">
                    <img class='album-art' src='${song.albumArt}'>
                    <h3 class ="title" onclick="itunesCtrl.playController(${id})">${song.title.slice(0, 24)}</h3>
                    <h4>${song.artist}</h4>
                    <h4>${song.collection.slice(0, 30)}</h4>
                    <h4><i class="fa fa-credit-card" aria-hidden="true"></i> $${song.price}</h4>
                    </h4><audio class="songControl" controls id="${id}"><source src="${song.preview}" type="audio/mpeg"></audio></h4>   
                    </div>
                    </div>
                    `
                id++
            }
        }
        document.getElementById('songs').innerHTML = template
    }
    var currentSongPlaying;
    var isPlaying = false

    this.playController = function (id) {
        var start = document.getElementById(id)
        if (currentSongPlaying && isPlaying) {
            currentSongPlaying.pause();
            isPlaying = false
        }
        currentSongPlaying = start
        isPlaying = true;
        start.play();
    }

    document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);

}







var itunesCtrl = new ItunesController()