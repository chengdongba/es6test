import {DataStore} from "./DataStore.js";
import {URL} from "./ConstUrl.js";

export class RequestServer {
    constructor(game_id, game_auth_code) {
        this.headers = {
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
            'Game-ID': game_id,
            'Game-Auth-Code': game_auth_code
        };
        this.dataStore = DataStore.getInstance();
    }

    requestServer(successCallback, failsCallback, path, params, method = 'POST', headers = this.headers) {
        wx.request({
            url: '${URL}${path}',
            method:method,
            data:params,
            header:headers,
            success:(res)=>{
                if (res.data!==undefined&&res.data.code===1){
                    successCallback(res);
                } else {
                    failsCallback(res);
                }
            },
            fail:(res)=>{
                failsCallback(res)
            }
        });
    }

    //TODO
    request(res){

    }
}