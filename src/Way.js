var Way = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/catway.png' );
   },
    
    update: function( dt ) {
            var pos = this.getPosition();
            this.setPosition( new cc.Point( pos.x, pos.y - 2 ) );
        if (pos.y < 0) {
            this.setPosition( new cc.Point( pos.x, 700 ) );
        }
    },
    
    randomPosition: function() {
        var x = (Math.random() * 600) + 5;
        var y = (Math.random() * 700) + 5;
        this.setPosition( new cc.Point( x, y ) );
    },
    
});