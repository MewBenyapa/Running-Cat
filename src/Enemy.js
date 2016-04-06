var Enemy = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/enemy1.png' );
    }
//    , 
//    
//    update: funtion() {
//        var pos = this.getPosition();
//        this.vy = 15;
//        if ( this.pos.y > 0 ) {
//            this.setPosition( new cc.Point( Math.random(), pos.y + vy ) );
//        }
//        this.vy += -1;
//    }
});