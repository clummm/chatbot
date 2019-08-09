const SKILL_ID = {
  chat: 0,
  music: 1
};

// 测试数据
const data = {
  header: {
    skillId: 1,
    skillName: "music",
    code: 0,
    message: "正常"
  },
  payload: {
    text: "主人，我已经为找到刘德华的忘情水啦",
    music: {
      code: 200,
      data: {
        songs: [
          {
            id: "110740",
            name: "忘情水(Live)",
            singer: "刘德华",
            al: {
              name: "爱你一万年 99演唱会",
              picUrl:
                "http://p2.music.126.net/LRWWw0_d0wZWWicIKQIkfA==/65970697667341.jpg"
            }
          }
        ]
      },
      musicName: "忘情水",
      singer: "刘德华",
      // playUrl: "https://v1.itooi.cn/netease/url?id=110740&quality=flac"
      playUrl: "https://v1.itooi.cn/netease/url?id=110740&quality=flac"
    }
  }
};

export { SKILL_ID, data };
