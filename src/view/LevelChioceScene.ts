/*
* name;
*/

class LevelChioceScene extends Laya.Sprite {
    constructor(){
        super();
        this.init();
    }
    private init()
    {
        var bg:Laya.Sprite = new Laya.Sprite();
        bg.loadImage("res/chioce.png");
        this.addChild(bg);
        bg.pos(0,0);
    }
}