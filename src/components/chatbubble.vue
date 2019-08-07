<!-- 聊天气泡 -->
<template>
  <div class="chatbubble">
    <div class="content">{{ message }}</div>
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
  min-width 50px
  max-width 600px
  min-height 40px
  word-wrap break-word
  white-space pre-wrap
  margin 15px 20px
  &>.content
    padding 10px
    vertical-align middle
</style>

