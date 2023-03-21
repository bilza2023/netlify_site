


export default class FireOnce {



constructor(){
this.fired = false;

}

fire(){
        if(this.fired == false){
            this.fired = true;
        }else {
            throw new Error("Fire Once error");
        }
}

fired(){
return this.fired;
}

}