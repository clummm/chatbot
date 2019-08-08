class Music {
  constructor(code, songs, playUrl) {
    this.code = code;
    this.songs = songs;
    this.playUrl = playUrl;
  }
}

class Song {
  constructor(id, name, album) {
    this.id = id;
    this.name = name;
    this.album = album;
  }
}

class Album {
  constructor(name, picUrl) {
    this.name = name;
    this.picUrl = picUrl;
  }
}
export { Music, Song, Album };
