/*
* 主函数 程序入口
*/
class Main{
    private pController:Controller;

    constructor(){
        Laya.init(750,1334);
        
        //设置适配策略 
        Laya.stage.scaleMode = "showall";

        this.pController = new Controller();
        
    }
}

new Main();
