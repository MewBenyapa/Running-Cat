var Player = cc.Sprite.extend ({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/Cat.png' );
        this.vy = 10;
        this.started = false;
    },
    
    turnRigth: function() {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x + 30, pos.y) );
        if ( pos.x >= 600 ) {
            this.setPosition( new cc.Point( 0, pos.y ) );
        }
    },
    
    turnLeft: function() {
       var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x - 30, pos.y) );
        if ( pos.x <= 0 ) {
            this.setPosition( new cc.Point( 600, pos.y ) );
        }
    },
    
    jump: function() {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
        this.vy += 5;
//        var pos = this.getPosition();
//        this.setPositionY( this.getPositionY()+ this.vy );
 //       this.vy += 5;
    },
    
    fallDown: function( dt ) {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x, pos.y - this.vy ) );
        this.vy -= 2;
//       this.vy=-20;
    },
    
//    update : function() {
//        if ( this.getPositionY() >= 50 ) {
//            this.fallDown();
//        } else if ( this.getPositionY() ) {
//            this.setPositionY( 50 );
//        }
//    }
    
});