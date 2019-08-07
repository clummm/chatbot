<!-- 包含音乐信息的聊天气泡 -->
<template>
  <div class="musicbubble">
    <div class="content">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "musicbubble",
  props: {
    message: {
      type: "Object",
      default: {}
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped></style>

