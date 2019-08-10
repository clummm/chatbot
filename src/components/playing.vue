<!-- 音乐播放界面 -->
<template>
  <div class="playing">
    <div class="header">
      <!-- <img
        class="close icon"
        src="/img/close.png"
        @click="close"
      > -->
    </div>
    <div class="detail">
      <p class="detail-item song">{{ music.song }}</p>
      <p class="detail-item singer">{{ music.singer }}</p>
      <p class="detail-item album">{{ `《${music.data.songs[0].al.name}》` }}</p>
      <div class="detail-item album-img">
        <img :src="music.data.songs[0].al.picUrl">
      </div>
    </div>
    <div class="player">
      <chatbot-audio :play-url="music.playUrl"></chatbot-audio>
    </div>
  </div>
</template>

<script>
import chatbotAudio from "./chatbotAudio";

export default {
  name: "playing",
  data() {
    return {
      music: null
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
    if (!this.$route.params.id) {
      this.$message("音乐消息错误，请关闭页面");
      return;
    }
    let list;
    if(!sessionStorage.getItem("musicList")) {
      this.$message("音乐消息错误，请关闭页面");
    } else {
      list = JSON.parse(sessionStorage.getItem("musicList"));
      this.music = list[this.$route.params.id];
    }
    console.log("new page, list");
    console.log(list);
    console.log("music");
    console.log(this.music);
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
    min-height 34px
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
