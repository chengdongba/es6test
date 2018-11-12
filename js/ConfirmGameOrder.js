import {RequestServer} from "./RequestServer";
import {CONFIRMGAMEORDER} from "./ConstUrl";

export class ConfirmGameOrder extends RequestServer{
    constructor(game_id,game_auth_code,open_id,_midas_zone_id){
        super(game_id,game_auth_code);
        this.game_id = game_id;
        this.open_id = open_id;
        this.midas_zone_id = _midas_zone_id;
    }

    confirmGameOrder(successCallback = super.request,failCallback = super.request){
        this.getData(succesCallback,failCallback);
    }

    getData(successCallback,failCallback,res){
        const params = {
          game_id:this.game_id,
          open_id:this.open_id,
          oder_no:res.data.data.order_no,
          midas_zone_id:this.midas_zone_id
        };
        super.requestServer(successCallback,failCallback,CONFIRMGAMEORDER,params);
    }
}