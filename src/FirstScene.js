var FirstScene = cc.LayerColor.extend({
    init: function() {
       
        this.start = new StartGame();
        this.start.setPosition( new cc.Point( 300 , 350 ) );
        this.addChild( this.start );

        this.playScene();
        
        //this.howToButton();
        
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
    },
    
//    howToButton : function(){
//        this.howToItem = new cc.MenuItemImage('res/images/howtoButton.png', 
//                                              function() {
//             var showHowTo = new HowTo();
//        showHowTo.init();
//        this.addChild( showHowTo );
//            
//        } ,this);
//        this.howto = new cc.Menu( this.howToItem );
//        this.howto.setPosition( 50, 40 );
//        this.addChild( this.howto );                                   
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
