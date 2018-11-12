// const URL = 'https://api.9377.com';
const URL = 'http://192.168.10.67';

//游戏授权
const USERAUTHORIZE = '/api/gateway/wechat/miniprogram/game/auth';

//用户登录
const USERLOGIN = '/api/gateway/wechat/miniprogram/member/login';

//更新用户信息
const UPDATEUSERMESSAGE = '/api/gateway/wechat/miniprogram/member/updateInfo';

//创建游戏充值订单
const CREATEGAMEORDER = '/api/gateway/wechat/miniprogram/order/create';

//游戏充值订单确认
const CONFIRMGAMEORDER = '/api/gateway/wechat/miniprogram/order/confirm';

//查询米大师游戏币余额
const QUERYGAMEBALANCE = '/api/gateway/wechat/miniprogram/payment/midas/balance';

//扣除米大师游戏币
const DEDUCTGAMEBALANCE = '/api/gateway/wechat/miniprogram/payment/midas/pay';

//获取openId
const OBTAINOPENID = '/api/gateway/wechat/miniprogram/member/openId';

//切支付需要跳转的AppId
const ROUTINE_APPID = 'wxc2f0dd2e8f62084c';


export {
    URL,
    UPDATEUSERMESSAGE,
    USERAUTHORIZE,
    USERLOGIN,
    CREATEGAMEORDER,
    CONFIRMGAMEORDER,
    QUERYGAMEBALANCE,
    DEDUCTGAMEBALANCE,
    OBTAINOPENID,
    ROUTINE_APPID
};