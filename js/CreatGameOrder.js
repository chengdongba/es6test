import {RequestServer} from "./RequestServer";
import {PayGameOrder} from "./PayGameOrder";
import {PayGameOrderWarp} from "./PayGameOrderWarp";
import {CREATEGAMEORDER} from "./ConstUrl";

export class CreatGameOrder extends RequestServer{
    constructor(game_id,game_auth_code,open_id,quantity,outer_order_no,midas_zone_id=1,remark){
        super(game_id,game_auth_code);
        this.game_id = game_id;
        this.midas_zone_id = midas_zone_id;
        this.quantity  = quantity;
        this.open_id = open_id;
        this.game_auth_code = game_auth_code;
        this.remark = remark;
        this.outer_oder_no = outer_order_no
    }

    creatGameOrder(successCallback = super.request,failCallback = super.request){
        const payGameOrder = new PayGameOrder();
        const confirmGameOder = new ConfirmGameOrder(this.game_id,this.game_auth_code,this.open_id,this.midas_zone_id);
        const payGameOrderWarp = new PayGameOrderWarp(payGameOrder,this,confirmGameOder);
        payGameOrderWarp.getData(successCallback,failCallback);
    }

    getData(successCallback = super.request,failCallback=super.request){
        const params = {
          game_id : this.game_id,
          open_id:this.open_id,
          quantity:this.quantity,
          midas_zone_id:this.midas_zone_id
        };
        if (this.remark!==undefined){
            params.remark=this.remark;
        }
        if (this.outer_order_no!=undefined){
            params.outer_order_no = this.outer_oder_no;
        }
        super.requestServer(successCallback,failCallback,CREATEGAMEORDER,params);
    }
}