import {RequestServer} from "./RequestServer";
import {OBTAINOPENID} from "./ConstUrl";

export class ObtainOpenId extends RequestServer{
    constructor(game_id,game_auth_code,code){
        super(game_id,game_auth_code);
        this.game_id = game_id;
        this.code = code;
    }

    obtainOpenId(successCallback = super.request,failCallback = super.request){
        const params = {
            game_id:this.game_id,
            code:this.code,

        };
        super.requestServer(successCallback,failCallback,OBTAINOPENID,params,'GET')
    }
}