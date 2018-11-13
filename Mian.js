import {DataStore} from "./js/DataStore";

export class Main {
    constructor(){
         this.myCanvas = wx.creatCanvas();
         this.context = myCanvas.getContext('2d');
         this.director = Director.getInstance();
         this.dataStore = DataStore.getInstance();
         const loader = ResourceLoader.create();
         loader.onLoaded(map=>this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map){
        this.dataStore.canvas = this.myCanvas;
        this.dataStore.ctx = this.context;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        this.director.isGameOver = false;
        this.dataStore
            .put("pencils",[])
            .put("background",BackGround)
            .put("land",land)
            .put("birds",Birds)
            .put("score",Score)
            .put('startButton',StartButton);
        this.registerEvent();
        //创建铅笔要在游戏运行之前
        this.director.createPencil()
    }
}