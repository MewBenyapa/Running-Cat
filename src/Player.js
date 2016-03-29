var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/Cat.png' );
    },

    update: function( dt ) {
	    var pos = this.getPosition();
	    this.setPosition( new cc.Point( pos.x, pos.y + 5 ) );
    }
    
});