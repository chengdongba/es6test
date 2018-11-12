import {RequestServer} from "./RequestServer";
import {QUERYGAMEBALANCE} from "./ConstUrl";

export class QueryGameBalance extends RequestServer{
    constructor(game_id,game_auth_code,open_id,midas_zone_id=1){
        super(game_id,game_auth_code);
        this.game_id = game_id;
        this.open_id = open_id;
        this.midas_zone_id = midas_zone_id;
    }

    queryGameBalance(successCallback = super.request,failCallback = super.request){
        const params = {
            game_id : this.game_id,
            open_id:this.open_id,
            midas_zone_id :this.midas_zone_id
        };

        super.requestServer(successCallback,failCallback,QUERYGAMEBALANCE,params,'GET');
    }
}