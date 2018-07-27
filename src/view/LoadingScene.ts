/*
* 加载界面
*/

class LoadingScene extends Laya.Sprite {
    private loadRes:string[] = [];

    constructor(){
        super();
        this.init();
    }
    private init():void 
    {
        var width = Laya.stage.width;
        var height = Laya.stage.height;

        console.log("width = %f, height = %f",width,height);

        var bg:Laya.Sprite = new Laya.Sprite();
        bg.loadImage("res/loading.png");
        this.addChild(bg);
        bg.pos(0,0);
        // 
        //  Laya.loader.load(l);
        this.timerOnce(3*1000,this,this.loadSucces); // 3秒 后 跳转到下个场景
    }

    private loadSucces():void
    {
        console.log("LoadingScene:loadSucces()")
        this.removeSelf();
        Controller.instance.ShowLevelScene();
    }
    /**
     * 打开UI
     * obj打开UI时传入的参数
     * call打开UI后加载完数据的回调
     */
    public open(obj: any[], call: Laya.Handler):void
    {
        if(call) {
            call.run();
            call = null;
        }
    }
    public close():void
    {

    }
    public hide():void
    {

    }
    public show():void
    {

    }
}
