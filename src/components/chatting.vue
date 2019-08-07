<!-- 聊天界面 -->
<template>
  <div class="chatting">
    <div class="header">
      <span class="title">小T</span>
    </div>
    <div class="contentbox">contentbox</div>
    <div class="footer">
      <div class="input-area">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea"
        >内容</el-input>
      </div>
      <div class="send">
        <el-button
          round
          size="small"
        >发送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
/**
 messages: [{
   id: 0,
   sender: 't',
   content: '您好'
 }, ...]
 */
export default {
  name: "chatting",
  data() {
    return {
      // 问候消息
      firstMessage: {
        id: 0,
        sender: "t",
        content: "您好"
      },
      // 消息队列
      messages: [],
      // 用户输入的内容
      textarea: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.chatting
  max-width 1000px
  min-width 800px
  height 100%
  margin 0 auto
  box-shadow 0 2px 12px 0 #aaaaaa
  border-radius 4px
  background-color #ffffff
  position relative
  .header
    height 51px
    text-align center
    position absolute
    top 0
    left 0
    right 0
    line-height 51px
    border-bottom 1px solid #d6d6d6
  .footer
    position absolute
    bottom 0
    left 0
    right 0
    height 180px
    border-top 1px solid #d6d6d6
  .contentbox
    position absolute
    bottom 180px
    top 51px
</style>
