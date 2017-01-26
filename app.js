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
        for (var i = 0; i < songList.length; i++) {
            var song = songList[i]
            if(song.collection){
            template +=
                `<div id = "song-list" class="col-md-4">
                    <div class="img-container">
                    <img class='album-art' src='${song.albumArt}'>
                    <h3 class ="title">${song.title.slice(0,24)}</h3>
                    <h4>${song.artist}</h4>
                    <h4>${song.collection.slice(0,30)}</h4>
                    <h4><i class="fa fa-credit-card" aria-hidden="true"></i> $${song.price}</h4>
                    </h4><audio controls><source src="${song.preview}" type="audio/mpeg"></audio></h4>
                    </div>
                    </div>`
        }}
        document.getElementById('songs').innerHTML = template
    }
}





var itunesCtrl = new ItunesController()