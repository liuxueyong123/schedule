import sendMessageToWx from '../extension/wxMessage';
import User from '../model/user';

const alertDinner = async () => {
  await sendMessageToWx('田宝该吃晚饭了哦～', [User.tiansiying]);
  // eslint-disable-next-line no-console
  console.log('提醒小田吃饭成功');
};

export default alertDinner;
