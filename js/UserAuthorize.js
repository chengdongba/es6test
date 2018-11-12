import {RequestServer} from "./RequestServer";
import {USERAUTHORIZE} from "./ConstUrl";

export class UserAuthorize extends RequestServer{
    constructor(game_id,game_auth_code){
        super();
        this.game_id = game_id;
        this.game_auth_code = game_auth_code;
    }

    userAuthorize(successCallback = super.request,failsCallback = super.request){
        const params = {
            game_id:this.game_id;
            game_auth_code:this.game_auth_code
        };
        super.requestServer(successCallback(),failsCallback(),USERAUTHORIZE,params)
    }
}