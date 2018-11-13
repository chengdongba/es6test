//资源加载器
import {Resources} from "./Resources";

export class ResourceLoader {
    constructor(){
        this.map = new Map(Resources);
        for (let[key,value] of this.map){
            const  image = wx.creatImage();
            image.src = value;
            this.map.set(key,image);
        }
    }

    onLoaded(callback){
        let loadCount=0;
        for (let value of this.map.values()) {
            value.onload=()=>{
                loadCount++;
                if (loadCount>=this.map.size){
                    callback(this.map)
                }
            }
        }
    }

    static create(){
        return new ResourceLoader();
    }
}