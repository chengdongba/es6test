import {DeterMineData} from "./DeterMineData.js";
import {USERLOGIN} from "./ConstUrl.js";

export class UserLogin extends DeterMineData {
    constructor(game_id, game_auth_code, auth, code, optinal) {
        super(game_id, game_auth_code);
        this.game_id = game_id;
        this.optioinal = optinal;
        this.auth = auth;
        this.code = code;
    }

    userLogin(successCallback = super.request, failCallback = super.request) {
        super.deterMineData(failCallback, () => {
            this.loginServer(successCallback, failCallback);
        })
    }


    loginServer(successCallback, failCallback) {
        const systemInfo = this.dataStore.get('systemInfo');
        const networkType = this.dataStore.get('networkType');

        const params = {
            auth: this.auth,
            game_id: this.game_id,
            code: this.code,
            brand: systemInfo.brand,
            model: systemInfo.model,
            version: systemInfo.version,
            system: systemInfo.system,
            platform: systemInfo.platform,
            network: networkType.networktype,
        };

        if (this.optioinal !== undefined) {
            if (this.optioinal.game_zone_id !== undefined) {
                params.game_zone_id = this.optioinal.game_zone_id;
            }
            if (this.dataStore.get('lm') !== undefined) {
                params.lm = this.dataStore.get('lm');
            }
            if (this.optioinal.outer_name != undefined) {
                params.outer_name = this.optioinal.outer_name;
            }
            if (this.optioinal.userInfo !== undefined) {
                const userInfo = this.optioinal.userInfo;
                params.user_info = JSON.stringify(userInfo.userInfo);
                params.iv = userInfo.iv;
                params.encrypteData = userInfo.encrypteData;
                params.rawData = userInfo.rawData;
                params.signature = userInfo.signature;
            }
        }
        super.requestServer(successCallback, failCallback, USERLOGIN, params)
    }
}