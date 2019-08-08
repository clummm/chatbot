export default class Message {
  constructor(type, sender, text, timestamp, music) {
    this.type = Number(type); // 0 -> 闲聊, 1 -> 音乐
    this.sender = sender;
    this.text = text;
    this.music = music;
    this.timestamp = timestamp || new Date().getTime();
  }
  getSender() {
    return this.sender;
  }
  getText() {
    return this.text;
  }

  setSender(sender) {
    this.sender = sender;
  }
  setContent(text) {
    this.content = text;
  }
  setTimeStamp(timestamp) {
    this.timestamp = timestamp;
  }
}
