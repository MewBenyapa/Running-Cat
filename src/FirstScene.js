var FirstScene = cc.LayerColor.extend({
    init: function() {
       
        this.start = new StartGame();
        this.start.setPosition( new cc.Point( 300 , 350 ) );
        this.addChild( this.start );

        this.showGame();
        
        this.addKeyboardHandlers();
        
    },
    
    showGame: function( keyCode ){
        if ( keyCode == 32 ){
            cc.director.runScene( new gameLayerScene() );
        }
    },
    
    addKeyboardHandlers: function() {
        var self = this;
	       cc.eventManager.addListener({
		      event: cc.EventListener.KEYBOARD,
		      onKeyPressed : function( keyCode, event ) {
		          self.showGame( keyCode, event );
	           }
	       }, this );
    },
    
});

var FirstGame = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new FirstScene();
        layer.init();
        this.addChild( layer );
    }
    
});
