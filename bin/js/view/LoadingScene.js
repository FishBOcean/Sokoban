/*
* 加载界面
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super.call(this) || this;
        _this.loadRes = [];
        _this.init();
        return _this;
    }
    LoadingScene.prototype.init = function () {
        var width = Laya.stage.width;
        var height = Laya.stage.height;
        console.log("width = %f, height = %f", width, height);
        var bg = new Laya.Sprite();
        bg.loadImage("res/loading.png");
        this.addChild(bg);
        bg.pos(0, 0);
        // 
        //  Laya.loader.load(l);
        this.timerOnce(3 * 1000, this, this.loadSucces); // 3秒 后 跳转到下个场景
    };
    LoadingScene.prototype.loadSucces = function () {
        console.log("LoadingScene:loadSucces()");
        this.removeSelf();
        Controller.instance.ShowLevelScene();
    };
    /**
     * 打开UI
     * obj打开UI时传入的参数
     * call打开UI后加载完数据的回调
     */
    LoadingScene.prototype.open = function (obj, call) {
        if (call) {
            call.run();
            call = null;
        }
    };
    LoadingScene.prototype.close = function () {
    };
    LoadingScene.prototype.hide = function () {
    };
    LoadingScene.prototype.show = function () {
    };
    return LoadingScene;
}(Laya.Sprite));
//# sourceMappingURL=LoadingScene.js.map