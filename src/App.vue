<template>
  <div id="app">
    <chatting></chatting>
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  background-color: #f3f3f3;
}
</style>
