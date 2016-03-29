var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 61, 177, 255, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.player = new Player();
        this.player.setPosition( new cc.Point( 550, 50 ) );
        this.addChild( this.player );
        this.player.scheduleUpdate();
        
        this.way = new Way();
        this.way.setPosition( new cc.Point( 300, 50 ) );
        this.addChild( this.way );
        this.way.scheduleUpdate();
//        
//        this.bg = new BG();
//        this.bg.setPosition( new cc.Point( 200, 200 ) );
//        this.addChild( this.bg );
//        this.bg.scheduleUpdate();
        
        return true;
    },
     addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
    
    onKeyDown: function( keyCode, event ) {
        
    },
 
    onKeyUp: function( keyCode, event ) {
    }
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});