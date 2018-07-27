/*
* name;
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
var LevelChioceScene = /** @class */ (function (_super) {
    __extends(LevelChioceScene, _super);
    function LevelChioceScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    LevelChioceScene.prototype.init = function () {
        var bg = new Laya.Sprite();
        bg.loadImage("res/chioce.png");
        this.addChild(bg);
        bg.pos(0, 0);
    };
    return LevelChioceScene;
}(Laya.Sprite));
//# sourceMappingURL=LevelChioceScene.js.map