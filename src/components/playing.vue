<!-- 音乐播放界面 -->
<template>
  <div class="playing">
    <div class="header">
      <img
        class="close icon"
        src="/img/close.png"
        @click="close"
      >
    </div>
    <div class="detail">
      <p class="detail-item song">{{ this.song }}</p>
      <p class="detail-item singer">{{ this.singer }}</p>
      <p class="detail-item album">{{ `《${this.album.name}》` }}</p>
      <div class="detail-item album-img">
        <img :src="this.album.picUrl">
      </div>
    </div>
    <div class="player">
      <chatbot-audio :play-url="this.playUrl"></chatbot-audio>
    </div>
  </div>
</template>

<script>
import chatbotAudio from "./chatbotAudio";

export default {
  name: "playing",
  data() {
    return {
      song: this.$route.params.musicName,
      singer: this.$route.params.singer,
      album: this.$route.params.data.songs[0].al,
      playUrl: this.$route.params.playUrl
    };
  },
  components: {
    chatbotAudio
  },
  methods: {
    // 关闭音乐播放页面，返回上一页
    close() {
      this.$router.go(-1);
    }
  },
  created() {
    if (!this.$route.params || Object.keys(this.$route.params).length <= 0) {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.icon
  width 34px
  height 34px
.playing
  height 100%
  display flex
  flex-direction column
  .header
    text-align right
    padding 10px
    .close
      cursor pointer
  .detail
    text-align center
    .detail-item
      margin 30px
    .song
      font-size 24px
      font-weight bolder
    .singer
      font-size 20px
    .album
      font-size 18px
    .album-img
      img
        width 300px
        height 300px
        border-radius 300px
  .player
    flex 1
    padding 30px 10px
</style>
