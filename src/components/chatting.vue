<template>
  <div id="chatting">
    <div id="chatbox">
      <div id="header"></div>
      <div id="contentbox"></div>
      <div id="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatting",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.chatting {
  background-color: #f3f3f3;

  .chatbox {
    height: 100%;
  }
}
</style>
