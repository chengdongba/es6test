export class PayGameOrderWarp {
    constructor(payGameOrder,obtainBeforeData,obtainAfterData){
        this.payGameOrder = payGameOrder;
        this.obtainBeforeData = obtainBeforeData;
        this.obtainAfterData = obtainAfterData;
    }
    
    getData(successCallback,failCallback){
        if (this.obtainBeforeData!==undefined){
            this.obtainBeforeData.getData((res)=>{
                this.getPayGameOrderData(successCallback,failCallback);
            },failCallback);
        } else {
            this.getPayGameOrderData(successCallback,failCallback);
        }
    }

    getPayGameOrderData(successCallback,failCallback,res){
        this.payGameOrder.getData(()=>{
            if (this.obtainAfterData!==undefined){
                this.getAfterData(successCallback,failCallback,res);
            } else {
                successCallback();
            }
        },failCallback,res)
    }

    getAfterData(successCallback,failCallback,res){
        this.obtainAfterData.getData(successCallback,failCallback,res);
    }
}