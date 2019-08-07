<!-- 聊天气泡 -->
<template>
  <div class="chatbubble">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "chatbubble",
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.message)
  }
};
</script>

<style lang="stylus" scoped>
.chatbubble
  background-color #f3f3f3
  min-width 100px
  max-width 600px
  min-height 40px
  word-wrap break-word
  margin 15px 20px
  padding 10px
  &>span
    vertical-align middle
</style>

