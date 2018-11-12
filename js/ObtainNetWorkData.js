import {DataStore} from "./DataStore.js";

export class ObtainNetWorkData {
    getData(succendCallbacks,failCallbacks){
        wx.getNetworkType({
            success:res=>{
                DataStore.getInstance().put('networkType',res);
                succendCallbacks();
            },
            fail:res=>{
                failCallbacks(res);
            }
        });
    }
}