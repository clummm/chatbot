import Vue from "vue";
import { Button, Card, Input, Popover, Message } from "element-ui";

Vue.use(Button);
Vue.use(Card);
Vue.use(Input);
Vue.use(Popover);
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;
