<!-- 聊天界面 -->
<template>
  <div class="chatting">
    <div class="header">
      <span class="title">小 T</span>
    </div>
    <div
      class="contentbox"
      ref="content"
    >
      <div class="messages">
        <transition-group name="list">
          <div
            class="clearfix"
            v-for="message in messages"
            :key=message.timestamp
          >
            <chatbubble
              :class="message.sender === 't' ? 'left' : 'right'"
              :message=message
            ></chatbubble>
          </div>
        </transition-group>
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
import Message from "../common/js/Message";
import { SKILL_ID, data } from "../common/js/data";

export default {
  name: "chatting",
  components: {
    chatbubble
  },
  data() {
    return {
      // 问候消息
      greeting: new Message(0, "t", "您好"),
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

      console.log("scrollTop" + this.$refs.content.scrollTop);
      console.log("scrollHeight" + this.$refs.content.scrollHeight);
      console.log("clientHeight" + this.$refs.content.clientHeight);

      // 发送内容不能为空
      if (this.checkFormat(this.textarea)) {
        this.$message("字数不能为空哦");
        return;
      }
      vue.messages.push(
        new Message(0, "my", vue.textarea, new Date().getTime())
      );

      // 向后端发送闲聊消息
      vue.$http
        .post("/api/chat", {
          query: vue.textarea
        })
        .then(function(response) {
          console.log(response)
          let code = response.data.header.code;
          if (Number(code) === 0) {
            vue.messages.push(
              new Message(
                response.data.header.skillId,
                "t",
                response.data.payload.text,
                new Date().getTime(),
                response.data.payload.music
              )
            );
          } else {
            vue.messages.push(
              new Message(
                SKILL_ID.chat,
                "t",
                response.data.header.message,
                new Date().getTime()
              )
            );
          }
        })
        .catch(function(error) {
          console.log(error);
          vue.messages.push(
            new Message(0, "t", "诶呀，出错了", new Date().getTime())
          );
        });
      vue.textarea = "";
    },

    // 字数限定检查
    checkFormat(content) {
      console.log("content: " + content);
      this.showHint = content.trim().length < 1;
      return this.showHint;
    },

    // 自动滚动到最底部
    scrollBottom() {
      let vue = this;
      let content = vue.$refs.content;
      content.scrollTop = content.scrollHeight;
    }
  },
  created() {
    // this.greeting.setTimeStamp(new Date().getTime());
    // this.messages.push(this.greeting);
    // ！！！！！！！！！！！！！！！测试！！！！！！！！！！！！！！！！！！！
    this.messages.push(
      new Message(
        data.header.skillId,
        "t",
        data.payload.text,
        new Date().getTime(),
        data.payload.music
      )
    );
  },
  watch: {
    messages: function() {
      this.$nextTick(function() {
        this.scrollBottom();
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.chatting
  height 100%
  position relative
  .header
    font-weight bolder
    font-size 20px
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
      min-height 100%
.list-enter-active, .list-leave-active
  transition all 0.4s
.list-enter, .list-leave-to
  opacity 0
  transform translateY(30px)
</style>
