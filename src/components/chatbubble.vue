<!-- 只包含文字的聊天气泡 -->
<template>
  <div class="chatbubble">
    <div class="text">{{ message.text }}</div>
    <div
      class="music"
      v-if="message.type === 1"
    >
      <div class="clearfix">
        <div
          class="album-img left"
          :style="{backgroundImage: `url(${message.music.data.songs[0].al.picUrl})`}"
          @click="play"
        >
          <img
            class="play-icon"
            src="/img/play.png"
          >
          <!-- <i class="el-icon-video-play play-icon"></i> -->
        </div>

        <div class="music-detail left">
          <p>{{message.music.data.songs[0].name}}</p>
          <p>{{`歌手：${message.music.singer}`}}</p>
          <p>{{`专辑：《${message.music.data.songs[0].al.name}》`}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatbubble",
  props: {
    message: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    play() {
      // this.$router.push({
      //   name: "playing",
      //   params: {
      //     music: this.message.music
      //   }
      // });
      if(!sessionStorage.getItem("musicList")) {
        sessionStorage.setItem("musicList", JSON.stringify({}));
      }
      let list = JSON.parse(sessionStorage.getItem("musicList"));
      list[this.message.music.data.songs[0].id] = this.message.music;
      sessionStorage.setItem("musicList", JSON.stringify(list));
      console.log("list")
      console.log(sessionStorage.getItem("musicList"));
      this.rHelper.openPlayerNewWindow(this.message.music.data.songs[0].id);
    }
  },
  created() {
  }
};
</script>

<style lang="stylus" scoped>
.chatbubble
  background-color #f3f3f3
  min-width 50px
  max-width 600px
  min-height 40px
  word-wrap break-word
  white-space pre-wrap
  margin 15px 20px
  box-shadow 0 2px 5px 0 #aaaaaa
  .text
    padding 10px
    vertical-align middle
  .music
    border-top 1px solid #d6d6d6
    min-height 15px
    padding 10px
    .album-img
      width 120px
      height 120px
      border-radius 120px
      cursor pointer
      text-align center
      background-repeat no-repeat
      background-position center
      background-size cover
      .play-icon
        background-color rgba(187, 187, 187, 0.3)
        position relative
        top 50%
        transform translateY(-50%)
        height 50%
        border-radius 50%
    .music-detail
      &>p
        padding 8px 13px
</style>

