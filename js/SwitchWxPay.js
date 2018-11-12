import {ROUTINE_APPID} from "./ConstUrl";

export class SwitchWxPay {
    constructor(params){
        this.params = params;
    }

    switchWxPay(successCallback = this.switchwxPayCallback,failCallback = this.switchwxPayCallback){
        const params = {
            appId:ROUTINE_APPID,
            extraData:this.params,
            success:res=> {
                successCallback(res)
            },
            fail:(res)=>{
                failCallback(res)
            }
        };
        wx.navigateToMiniProgram(params)
    }

    switchwxPayCallback(res){

    }
}