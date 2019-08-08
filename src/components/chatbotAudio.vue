<!-- 音乐播放器 -->
<template>
  <div class="audio">
    <audio
      ref="audio"
      :src="this.playUrl"
      controls
      autoplay
    >
      您的浏览器不支持 audio 标签。
    </audio>
    <!-- <div class="controller clearfix">
      <div class="toggle">
        <img :src="$refs.audio.paused ? '/img/play_back.png' : '/img/pause.png'">
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "chatbot-audio",
  props: {
    playUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  created() {
    console.log('url: ' + this.playUrl)
  }
};
</script>

<style lang="stylus" scoped></style>
