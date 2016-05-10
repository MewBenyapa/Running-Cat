var Fish = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/fish.png' );
    },
    
    randomPosition: function() {
        var x = (Math.random() * 500) + 5;
        var y = (Math.random() * 600) + 5;
        this.setPosition( new cc.Point( x, y ) );
    },
    
    closeTo: function( obj ) {
	    var myPos = this.getPosition();
	    var oPos = obj.getPosition();
  	    return ( ( Math.abs( myPos.x - oPos.x ) <= 50 ) && ( Math.abs( myPos.y - oPos.y ) <= 50 ) );
    }
    
});