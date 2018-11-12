import {RequestServer} from "./RequestServer.js";
import {ObtainNetWorkData} from "./ObtainNetWorkData";
import {ObtainSystemData} from "./ObtainSystemData";

export class DeterMineData extends RequestServer {
    constructor(game_id, game_auth_code) {
        super(game_id, game_auth_code);
        this.obtainSystemData = new ObtainSystemData();
        this.obtainNetWorkData = new ObtainNetWorkData();
    }

    deterMineData(failCallback, callbacks, obtain) {
        if (obtain !== undefined) {
            obtain.getData(() => {
                this.confirmData(failCallback, callbacks);
            }, failCallback)
        } else {
            this.confirmData(failCallback, callbacks);
        }
    }

    confirmData(failCallback, callbacks) {
        if (this.dataStore.get('systemInfo') !== undefined && this.get('netWorkType') !== undefined) {
            callbacks();
            return;
        }
        if (this.dataStore.get('systemInfo') === undefined) {
            this.obtainData(this.obtainSystemData, failCallback, callbacks)
        }

        if (this.dataStore.get('networkType') === undefined) {
            this.obtainData(this.obtainNetWorkData, failCallback, callbacks)
        }
    }

    obtainData(data, failCallback, callbacks) {
        data.getData(() => {
            this.conditionSuccess(callbacks);
        }, failCallback)
    }

    conditionSuccess(callbacks) {
        let s = true;
        if (this.dataStore.get('systemInfo') === undefined || this.dataStore.get('networktype') === undefined) {
            s = false;
        }
        if (s) {
            callbacks();
        }
    }

}