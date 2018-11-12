import {DataStore} from "./DataStore";

export class ObtainSystemData {
    getData(succendCallbacks,failCallbacks){
        wx.getSystemInfo({
            success:res=>{
                DataStore.getInstance().put('systemInfo',res);
                succendCallbacks();
            },
            fail:res=>{
                failCallbacks(res);
            }
        });
    }
}