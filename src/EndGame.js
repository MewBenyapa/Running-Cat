var EndGame = cc.Sprite.extend({
    init: function() {
       
        this.gameOver = new GameOver();
        this.gameOver.setPosition( new cc.Point( 300 , 350 ) );
        this.addChild( this.gameOver );

        this.restartGame();
       
        this.addKeyboardHandlers();
        
    },
    
    restartGame: function( keyCode ){
        if ( keyCode == 82 ){
            cc.director.runScene( new gameLayerScene() );
        }
    },
    
    addKeyboardHandlers: function(){
        var self = this;
	       cc.eventManager.addListener({
		      event: cc.EventListener.KEYBOARD,
		      onKeyPressed : function( keyCode, event ) {
		          self.restartGame( keyCode, event );
	           }
	       }, this );
    }
    
});

var GameOverLayer = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new EndGame();
    layer.init();
    this.addChild( layer );
  }  
});
