//小鸟类,循环渲染三只小鸟,其实渲染图片的三个部分
import {Sprite} from "../base/Sprite";
import {DataStore} from "../DataStore";

export class Birds extends Sprite{
    constructor() {
        const image = Sprite.getImage('birds');
        super(image, 0, 0, image.width, image.height,
            0, 0, image.width, image.height);
        //计算三只小鸟剪裁的x,y坐标,小鸟的宽度34,小鸟的高度24,上下边距是10,左右边距是9
        this.clippingX = [
            9,
            9 + 34 + 18,
            9 + 34 + 18 + 34 + 18
        ];
        this.clippingY = [10, 10, 10];
        this.clippingWidth = [34, 34, 34];
        this.clippingHeight = [24, 24, 24];
        const birdX = DataStore.getInstance().canvas.width/4;
        this.birdsX=[birdX,birdX,birdX];
        const birdY = DataStore.getInstance().canvas.height/2;
        this.birdsY = [birdY,birdY,birdY];
        const birdWidth = 34;
        this.birdsWidth = [birdWidth,birdWidth,birdWidth];
        const birdHeight = 24;
        this.birdsHeight = [birdHeight,birdHeight,birdHeight];
        this.y = [birdY,birdY,birdY];
        this.index = 0;
        this.count = 0;
        this.time = 0;
    }

    draw(){
        //小鸟切换的速度
        const speed = 0.2;
        this.count = this.count+speed;
        if (this.count >= 2) {
            this.count =0;
        }
        this.index = Math.floor(this.count);
        //模拟重力加速度
        const g = 0.98/3;
        //向上移动距离
        const offsetUp=30;
        //计算偏移值
        const offsetY = (g*this.time*(this.time-offsetUp))/2;
        //重新计算小鸟的Y坐标
        for (let i=0;i<=2;i++){
            this.birdsY[i]=this.y+offsetY;
        }
        this.time++;
        super.draw(this.img,
            this.clippingX[this.index],this.clippingY[this.index],
            this.clippingWidth[this.index],this.clippingHeight[this.index],
            this.birdsX[this.index],this.birdsY[this.index],
            this.birdsWidth[this.index],this.birdsHeight[this.index]);
    }
}