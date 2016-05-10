var Enemy = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/enemy1.png' );
    },
    
    update: function( dt ) {
            var pos = this.getPosition();
            this.setPosition( new cc.Point( pos.x, pos.y - 5 ) );
        if (pos.y <= 0) {
            this.setPosition( new cc.Point( pos.x, 700 ) );
        }
    },
    
    randomPosition: function() {
        var x = (Math.random() * 500) + 5;
        this.setPosition( new cc.Point( x, 720 ) );
    },
    
    
    closeTo: function( obj ) {
	    var myPos = this.getPosition();
	    var oPos = obj.getPosition();
  	    return ( ( Math.abs( myPos.x - oPos.x ) <= 30 ) && ( Math.abs( myPos.y - oPos.y ) <= 30 ) );
    }
    
});