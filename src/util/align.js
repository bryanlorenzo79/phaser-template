export default class Align {
    static scaleToGameW(obj, per, game) {
        obj.displayWidth = game.config.width * per;
        obj.scaleY = obj.scaleX;
    }
    static scaleToGameH(obj, per, game) {
        obj.displayHeight = game.config.height * per;
        obj.scaleX = obj.scaleY;
    }
    static centerH(obj, game) {
        obj.x = game.config.width / 2 - obj.displayWidth / 2;
    }
    static centerV(obj, game) {
        obj.y = game.config.height / 2 - obj.displayHeight / 2;
    }
    static center2(obj, game) {
        obj.x = game.config.width / 2 - obj.displayWidth / 2;
        obj.y = game.config.height / 2 - obj.displayHeight / 2;
    }
    static center(obj, game) {
        obj.x = game.config.width / 2;
        obj.y = game.config.height / 2;
    }
}
