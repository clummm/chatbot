export default class Message {
  constructor(sender, content) {
    this.sender = sender
    this.content = content
  }
  getSender() {
    return this.sender
  }
  getContent() {
    return this.content
  }

  setSender(sender) {
    this.sender = sender
  }
  setContent(content) {
    this.content = content
  }
}
