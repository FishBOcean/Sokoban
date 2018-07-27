/*
* name; Controller
*/
var Controller = /** @class */ (function () {
    function Controller() {
        console.log("Controller constructor");
        Controller.instance = this;
        this.init();
    }
    Controller.prototype.init = function () {
        console.log("Controller init");
        this.ShowLoadingScene();
    };
    Controller.prototype.ShowLoadingScene = function () {
        // 游戏加载 界面 or 登陆界面
        var scene = new LoadingScene();
        // scene.init();
        Laya.stage.addChild(scene);
        // scene.pos(Laya.stage.width/2,Laya.stage.height/2);
    };
    Controller.prototype.ShowLevelScene = function () {
        var scene = new LevelChioceScene();
        Laya.stage.addChild(scene);
    };
    Controller.prototype.ShowGameScene = function () {
    };
    return Controller;
}());
//# sourceMappingURL=Controller.js.map