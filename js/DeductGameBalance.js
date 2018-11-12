import {RequestServer} from "./RequestServer";
import {DEDUCTGAMEBALANCE} from "./ConstUrl";

export class DeductGameBalance extends RequestServer{
    constructor(game_id,game_auth_code,open_id,amount,midas_zone_id=1,bill_no,remark){
        super(game_id,game_auth_code);
        this.game_id = game_id;
        this.game_auth_code = game_auth_code;
        this.open_id = open_id;
        this.midas_zone_id = midas_zone_id;
        this.bill_no = bill_no;
        this.remark = remark;
        this.amount = amount;
    }

    deductGamebalance(successCallback = super.request,failCallback = super.request){
        const params = {
            game_id:this.game_id,
            open_id:this.open_id,
            amount:this.amount,
            midas_zone_id :this.midas_zone_id
        };
        if (this.bill_no!==undefined){
            params.bill_no = this.bill_no;
        }
        if (this.remark!==undefined){
            params.remark = this.remark;
        }
        super.requestServer(successCallback,failCallback,DEDUCTGAMEBALANCE,params);
    }
}