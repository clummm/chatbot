<!-- 聊天界面 -->
<template>
  <div class="chatting">
    <div class="header">
      <span class="title">小T</span>
    </div>
    <div
      class="contentbox"
      ref="content"
    >
      <div class="messages">
        <div
          class="clearfix"
          v-for="(message, index) in messages"
          :key=index
        >
          <chatbubble
            :class="message.sender === 't' ? 'left' : 'right'"
            :message=message.content
          ></chatbubble>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="input-area">
        <div class="input-wrapper">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="textarea"
          ></el-input>
        </div>
      </div>
      <div class="send-box">
        <div class="send">
          <!-- <el-popover
            trigger="manual"
            placement="top-start"
            content="发送内容不能为空"
            v-model="showHint"
          ></el-popover> -->
          <el-button
            round
            @click="sendMessage"
          >发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chatbubble from "./chatbubble";
import Message from "../common/Message";
import { setTimeout } from "timers";

const reply = new Message("t", "知道了");

export default {
  name: "chatting",
  components: {
    chatbubble
  },
  data() {
    return {
      // 问候消息
      firstMessage: new Message("t", "您好"),
      // 消息队列
      messages: [],
      // 用户输入的内容
      textarea: "",
      // 显示字数提醒
      showHint: false
    };
  },
  methods: {
    // 发送消息
    sendMessage() {
      let vue = this;
      vue.scrollBottom();

      console.log("scrollTop" + this.$refs.content.scrollTop);
      console.log("scrollHeight" + this.$refs.content.scrollHeight);
      console.log("clientHeight" + this.$refs.content.clientHeight);

      // 发送内容不能为空
      if (this.checkFormat(this.textarea)) return;

      vue.messages.push({ sender: "my", content: vue.textarea });
      // 向后端发送闲聊消息
      vue.$http
        .post("/api/chat", {
          query: vue.textarea
        })
        .then(function(response) {
          // 添加到消息队列
          vue.messages.push(new Message("t", response.data.payload.text));
          vue.scrollBottom();
        })
        .catch(function(error) {
          console.log(error);
          vue.messages.push(new Message("t", "诶呀，出错了"));
          vue.scrollBottom();
        });
      vue.textarea = "";
    },
    // 字数限定检查
    checkFormat(content) {
      this.showHint = content.trim().length < 1 || content.trim().length >= 400;
      return this.showHint;
    },
    // 滚动到最底部
    scrollBottom() {
      let vue = this;
      let content = vue.$refs.content;
      let delay = content.scrollHeight / 4;
      if (content.scrollHeight > content.clientHeight) {
        content.scrollTop += Math.max(delay, 10);
        setTimeout(function() {
          vue.scrollBottom();
        }, 30);
      }
      content.scrollTop =
        content.scrollHeight > content.clientHeight
          ? content.scrollHeight
          : content.scrollTop;
    }
  },
  created() {
    this.messages.push(this.firstMessage);
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
    .input-area
      .input-wrapper
        padding 20px 10px 10px
        .el-textarea>>>.el-textarea__inner
          border 0
    .send-box
      padding 10px
      text-align right
  .contentbox
    position absolute
    bottom 180px
    top 51px
    width 100%
    overflow auto
    .messages
      overflow-y auto
</style>
