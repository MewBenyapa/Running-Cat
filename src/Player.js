var Player = cc.Sprite.extend ({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/Cat.png' );
        this.vy = 15;
    },
    
    turnRigth: function() {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x + 30, pos.y) );
    },
    
    turnLeft: function() {
       var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x - 30, pos.y) );
    },
    
    jump: function() {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
        this.vy += .5;
    },
    
    fallDown: function() {
        if ( pos.y > 50 ) {
            var pos = this.getPosition();
            this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
            this.vy += -.001;
        }
    }
    
});