/*
* 主函数 程序入口
*/
var Main = /** @class */ (function () {
    function Main() {
        Laya.init(750, 1334);
        //设置适配策略 
        Laya.stage.scaleMode = "showall";
        this.pController = new Controller();
    }
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map