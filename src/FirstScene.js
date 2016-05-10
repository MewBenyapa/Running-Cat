var FirstScene = cc.LayerColor.extend({
    init: function(){
        console.log("***");
        
        this.start = new StartScene();
        this.start.setPosition( new cc.Point( 300 , 350 ) );
        this.addChild( this.start );
        
//        this.howto = new StartScene();
//        this.howto.setPosition( new cc.Point( 300 , 350 ) );
//        this.addChild( this.howto );
                

        this.playScene();
        this.startButton();
        
        this.addKeyboardHandlers();
        
    },
    
    playScene: function( keyCode ){
        if ( keyCode == 32 ){
            cc.director.runScene( new gameLayerScene() );
        }
    },
    
    startButton: function() {
        this.startButtonItem = new cc.MenuItemImage( 'res/images/startButton.png',
         function(){
                this.startButton.setEnabled( false );
                cc.director.runScene( new gameLayerScene() );
        },this);
            this.startButton = new cc.Menu( this.startButtonItem );
            this.startButton.setPosition( 400, 70 );
            this.addChild( this.startButton );
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
    
});

var FirstGame = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new FirstScene();
    layer.init();
    this.addChild( layer );
  }
    
});
