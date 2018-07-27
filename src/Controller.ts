/*
* name; Controller 
*/
class Controller{
    public static instance:Controller;  //控制器 实例对象
    
    constructor(){
        console.log("Controller constructor");
        Controller.instance = this;
        this.init();
    }
    public init():void
    {
        console.log("Controller init");
        this.ShowLoadingScene();
    }
    public ShowLoadingScene():void 
    {
        // 游戏加载 界面 or 登陆界面
        var scene:LoadingScene = new LoadingScene();
        // scene.init();
        Laya.stage.addChild(scene);
        // scene.pos(Laya.stage.width/2,Laya.stage.height/2);
    }
    public ShowLevelScene():void
    {
        var scene:LevelChioceScene = new LevelChioceScene();
        Laya.stage.addChild(scene);
    }

    public ShowGameScene():void
    {
        
    }
}