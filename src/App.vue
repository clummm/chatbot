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
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
