import axios from 'axios';
import config from '../config';
import User from '../model/user';

const sendMessageToWx = (msg: string, userList?: User[]) => {
  let uids = Object.values(User);

  if (userList) {
    uids = userList;
  }

  axios.request({
    method: 'POST',
    url: 'http://wxpusher.zjiecode.com/api/send/message',
    data: {
      ...config.wxPusher,
      uids,
      content: msg,
    },
  });
};

export default sendMessageToWx;
