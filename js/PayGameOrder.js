export class PayGameOrder {
    getData(successCallback,failCallback,datas){
        const data = datas.data.data;
        wx.requestMidasPayment({
            mode:data.mode,
            env:data.env,
            offerId:data.offerId,
            currencyType:data.currencyType,
            platform:data.platform,
            buyQuantity:data.buyQuantity,
            zoneId:data.zoneId,
            success:res=>{
                successCallback();
            },
            fail:res=>{
                failCallback(res);
            }
        });
    }
}