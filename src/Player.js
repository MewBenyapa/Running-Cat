var Player = cc.Sprite.extend ({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/Cat.png' );
        this.vy = 30;
        this.vx = 30;
        this.accX = 0.1;
    
    },
    
    turnRigth: function() {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x + this.vx, pos.y) );
        if ( pos.x >= 600 ) {
            this.setPosition( new cc.Point( 0, pos.y ) );
        }
    },
    
    turnLeft: function() {
       var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x - this.vx, pos.y) );
        if ( pos.x <= 0 ) {
            this.setPosition( new cc.Point( 600, pos.y ) );
        }
    },
    
    jump: function() {
        this.vy = Player.JUMPING_VELOCITY;
        var pos = this.getPosition();
        this.setPositionY( this.getPositionY() + this.vy );
        this.vy += 2;
    },
    
    update: function( dt ) {
        if (this.getPositionY() > 50) {
            var pos = this.getPosition();
            this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
            this.vy += -1;
        } else {
            this.setPositionY( 50 );
        }
    }

});

Player.G = -1;
Player.JUMPING_VELOCITY = 15;