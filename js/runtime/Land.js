import {Sprite} from "../base/Sprite";
import {DataStore} from "../DataStore";
import {Director} from "./Director";

export class Land extends Sprite{
    constructor(){
        const image = Land.getImage('land');
        super(image,0,0,image.width,image.height,0,DataStore.getInstance().canvas.height-image.height,
            image.width,image.height);
        //地板的水平变化坐标
        this.landX = 0;
        //地板的移动速度
        this.landSpeed = Director.getInstance().moveSpeed;
    }

    draw(){
        this.landX = this.landX+this.landSpeed;
        if (this.landX > (this.img.width - DataStore.getInstance().canvas.width)) {
            this.landX=0;
        }
        super.draw(this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            -this.landX,
            this.y,
            this.width,
            this.height)
    }
}