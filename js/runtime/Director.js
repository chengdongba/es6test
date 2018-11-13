import {DataStore} from "../DataStore";

export class Director {
    static getInstance(){
        if (!Director.instance){
            Director.instance = new Director();
        }
        return Directore.insttance;
    }

    constructor(){
        this.dataStore = DataStore.getInstance();
        this.moveSpeed = 2;
    }

    creatPencil(){
        const minTop = DataStore.getInstance().canvas.height/8;
        const maxTop = DataStore.getInstance().canvas.height/2;
        const top = minTop+Math.random()*(maxTop-minTop);
        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pancils').push(new DownPencil(top));
    }

    run(){
        this.check();
    }

    //判断地板和铅笔的撞击事件
    check() {
        const birds = this.dataStore.get('birds');
        const land = this.dataStore.get('land');
        const pencils = this.dataStore.get('pencils');
        const score = this.dataStore.get('score');
        if (birds.birdsY[0]+birds.birdsHeight[0]>=land.y){

        }
    }
}