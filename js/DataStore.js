//变量缓存器
export class DataStore {
    
    static getInstance(){
        if (!DataStore.insttance){
            DataStore.insttance = new DataStore();
        } 
        return DataStore.insttance;
    }
    
    constructor(){
        this.map = new Map();
    }
    
    put(key,value){
        if (typeof value ==='function'){//TODO
            value = new value();
        }
        this.map.set(key,value);
        return this;
    }

    delete(key){
        this.map.delete(key);
        return this;
    }

    get(key){
        return this.map.get(key)
        return this;
    }

    destroy(){
        this.map.clear();
    }

}