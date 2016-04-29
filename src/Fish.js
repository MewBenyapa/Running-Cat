var Fish = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/fish.png' );
    },
    
    randomPosition: function() {
        var x = (Math.random() * 600) + 5;
        var y = (Math.random() * 700) + 5;
        this.setPosition( new cc.Point( x, y ) );
    },
    
    update: function() {
        var pos = this.getPosition();
            this.setPosition( new cc.Point( pos.x, pos.y - 3 ) );
        if (pos.y <= 0) {
            this.setPosition( new cc.Point( pos.x, 700 ) );
        }
    },
    
    closeTo: function( obj ) {
	    var myPos = this.getPosition();
	    var oPos = obj.getPosition();
  	    return ( ( Math.abs( myPos.x - oPos.x ) <= 30 ) && ( Math.abs( myPos.y - oPos.y ) <= 30 ) );
    }
    
});