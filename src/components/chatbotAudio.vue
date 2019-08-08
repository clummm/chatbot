<!-- 音乐播放器 -->
<template>
  <div class="audio">
    <audio
      ref="audio"
      :src="this.playUrl"
      @timeupdate="handleTimeUpdate"
      @ended="handleEnd"
      autoplay
    >
      您的浏览器不支持 audio 标签。
    </audio>
    <div class="controller clearfix">
      <div class="toggle">
        <img
          class="icon"
          v-if="paused"
          @click="togglePlay"
          src="/img/play_black.png"
        >
        <img
          class="icon"
          v-else
          @click="togglePlay"
          src="/img/pause.png"
        >
      </div>
      <div class="progress-wrapper">
        <div
          class="progress progress-bar"
          ref="progress"
          @click="handleProgressClick"
        ></div>
        <div
          class="progress progress-bar progress-passed"
          :style="{width: progressPercent}"
        ></div>
        <div
          class="progress progress-dot"
          :style="{left: progressPercent}"
          @pointerdown="startDragging"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { secToTimer } from "../common/js/Timer";

export default {
  name: "chatbot-audio",
  props: {
    playUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // audio控件
      audio: null,
      // 进度条控件
      progressbar: null,
      // 音乐是否暂停
      paused: false,
      // 是否拖动进度条
      dragging: false,
      // 当前播放时间 / 总时长
      progress: 0,
      // 当前播放时间
      currentTime: 0
    };
  },
  created() {
    console.log("url: " + this.playUrl);
  },
  computed: {
    // 播放进度百分比计算
    progressPercent() {
      return `${this.progress * 100}%`;
    }
  },
  methods: {
    // 播放 / 暂停处理
    togglePlay() {
      console.log("before: " + this.audio.paused);
      if (this.audio.paused) {
        this.play()
      } else {
        this.pause()
      }
      console.log("after: " + this.audio.paused);
    },
    // 播放
    play() {
      this.paused = false;
      this.audio.play()
    },
    // 暂停
    pause() {
      this.paused = true;
      this.audio.pause();
    },
    // 播放结束处理
    handleEnd() {
      this.pause();
    },
    // 播放进度处理
    handleTimeUpdate() {
      this.currentTime = this.audio ? this.audio.currentTime : 0;
      this.progress = this.audio.currentTime / this.audio.duration;
      console.log("progress: " + this.progress);
    },
    // 进度条点击事件处理
    handleProgressClick(event) {
      this.setProgress(event.clientX)
    },
    // 设置进度条
    setProgress(x) {
      const progressRect = this.progressbar.getBoundingClientRect();
      let progressPercent = (x - progressRect.left) / progressRect.width;
      if (progressPercent < 0) {
        progressPercent = 0;
      } else if (progressPercent > 1) {
        progressPercent = 1;
      }
      this.audio.currentTime = this.audio.duration * progressPercent;
    },
    // 拖动进度条事件
    startDragging() {
      this.pause();
      this.dragging = true;
    }
  },
  mounted() {
    let vue = this;
    vue.audio = vue.$refs.audio;
    vue.progressbar = vue.$refs.progress;
    // 当浏览器能够开始播放指定的音频时，更新播放器时长显示
    vue.audio.oncanplay = function() {
      vue.handleTimeUpdate();
    };
  }
};
</script>

<style lang="stylus" scoped>
.icon
  width 34px
  height 34px
  cursor pointer
.audio
  .controller
    display flex
    justify-content center
    .progress-wrapper
      width 500px
      position relative
      .progress
        position absolute
        left 0
        top 0
        cursor pointer
      .progress-bar
        width 100%
        height 6px
        background-color #d3d3d3
        border-radius 6px
      .progress-passed
        background-color #ff6161
      .progress-dot
        height 10px
        width 10px
        border-radius 10px
        border 1px solid #d3d3d3
        background-color #ffffff
</style>
