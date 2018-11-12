import {UPDATEUSERMESSAGE,USERLOGIN} from "./ConstUrl";
import {DeterMineData} from "./DeterMineData";

export class UpdataUserMessage extends DeterMineData{
    constructor(game_id,game_auth_code,open_id,optional){
        super(game_id,game_auth_code);
        this.open_id = open_id;
        this.game_id = game_id;
        this.optional = optional;
    }
    
    updataUserMessage(successCallback = super.request,failsCallback = super.request){
        this.deterMineData(failsCallback,()=>{
            const systemInfo = this.dataStore.get('systemInfo');
            const networkType = this.dataStore.get('networkType');
            const params = {
                game_id:this.game_id,
                open_id:this.open_id,
                brand: systemInfo.brand,
                model: systemInfo.model,
                version:systemInfo.version,
                system: systemInfo.system,
                platform:systemInfo.platform,
                network: networkType.networkType
            }
            if (this.optional!==undefined){
                if (this.optional.game_zone_id!==undefined){
                    params.game_zone_id = this.optional.game_zone_id
                }
                if (this.optional.outer_name!=undefined){
                    params.outer_name = this.optional.outer_name
                }
                if (this.optional.user_info!==undefined){
                    const userInfo = this.optional.user_info;
                    params.user_info = JSON.stringify(userInfo.userInfo);
                }
            }

            super.requestServer(successCallback,failsCallback,UPDATEUSERMESSAGE,params)
        })
    }
}