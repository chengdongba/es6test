export class ObtainAdvertLm {
    obtainAdvertLm(){
        wx.onShow(res=>{
            const query = res.query;
            const lm = query.lm;
            DataStore.getInstance().put('lm',lm);
        });
    }
}