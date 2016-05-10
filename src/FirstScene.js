var FirstScene = cc.LayerColor.extend({
    init: function() {
       
        this.start = new StartGame();
        this.start.setPosition( new cc.Point( 300 , 350 ) );
        this.addChild( this.start );

        this.playScene();
        
        this.addKeyboardHandlers();
        
    },
    
    playScene: function( keyCode ){
        if ( keyCode == 32 ){
            cc.director.runScene( new gameLayerScene() );
        }
    },
    
    addKeyboardHandlers: function(){
        var self = this;
	       cc.eventManager.addListener({
		      event: cc.EventListener.KEYBOARD,
		      onKeyPressed : function( keyCode, event ) {
		          self.playScene( keyCode, event );
	           }
	       }, this );
    }
    //,
    
//    howToButton: function() {
//        this.howToButtonItem = new cc.MenuItemImage( 'res/images/howToButton.png', 
//        function() {
//            this.howToButton    
//        })
//    }
    
});

var FirstGame = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new FirstScene();
    layer.init();
    this.addChild( layer );
  }
    
});
