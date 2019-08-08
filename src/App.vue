<template>
  <div id="app">
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import chatting from "./components/chatting";

export default {
  name: "app",
  components: {
    chatting
  },
  created() {
    // 测试跨域请求
    this.$http
      .get("/api/chat")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  height 100%
  min-height 600px
  overflow hidden
  background-color #f3f3f3
  .wrapper
    max-width 1000px
    min-width 800px
    height 100%
    margin 0 auto
    box-shadow 0 2px 12px 0 #aaaaaa
    border-radius 4px
    background-color #ffffff
</style>
