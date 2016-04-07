var GameLayer = cc.LayerColor.extend({
    init: function() {
        
        this.setBG();
        this.setPlayer();
        this.setWay();
        this.setEnemy();
        
        
        this.addKeyboardHandlers();
        
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
        if ( keyCode == 39 ) {
            this.player.turnRigth();    
        } else if ( keyCode == 37 ) {
            this.player.turnLeft();
        } else if ( keyCode == 38 ) {
            this.player.jump();
        }
    },
 
    onKeyUp: function( keyCode, event ) {
        if ( this.player.getPosition() != 50 ) {
            this.player.fallDown();
        }
    },
    
    setPlayer: function() {
        this.player = new Player();
        this.player.setPosition( new cc.Point( 550, 50 ) );
        this.addChild( this.player );
        this.player.scheduleUpdate();
    },
    
    setWay: function() {
        this.way = new Way();
        this.way.setPosition( new cc.Point( 300, 10 ) );
        this.addChild( this.way );
        this.way.scheduleUpdate();
    },
    
    setBG: function() {
        this.bg = new BG();
        this.bg.setPosition( new cc.Point( 300, 350 ) );
        this.addChild( this.bg );
        this.bg.scheduleUpdate();   
    },
    
    setEnemy: function() {
        this.enemy = new Enemy();
        this.enemy.setPosition( new cc.Point( 100, 700 ) );
        this.addChild( this.enemy );
        this.enemy.scheduleUpdate();
        
        this.enemy = new Enemy();
        this.enemy.setPosition( new cc.Point( 200, 720 ) );
        this.addChild( this.enemy );
        this.enemy.scheduleUpdate();
        
         this.enemy = new Enemy();
        this.enemy.setPosition( new cc.Point( 350, 800 ) );
        this.addChild( this.enemy );
        this.enemy.scheduleUpdate();
        
         this.enemy = new Enemy();
        this.enemy.setPosition( new cc.Point( 500, 780 ) );
        this.addChild( this.enemy );
        this.enemy.scheduleUpdate();
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