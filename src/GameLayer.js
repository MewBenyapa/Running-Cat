var GameLayer = cc.LayerColor.extend ({
    init: function() {
        
        this.setBG();
        this.setPlayer();
        this.setWay();
        this.setEnemy();
        this.setFish();
        this.setHeart();
        
        this.scheduleUpdate();
        
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
        
    },
    
    update: function() {
	   if ( this.fish.closeTo( this.player ) ) {
	       this.fish.randomPosition();
	   }
    },
    
    setPlayer: function() {
        this.player = new Player();
        this.player.setPosition( new cc.Point( 550, 50 ) );
        this.addChild( this.player );
        this.player.scheduleUpdate();
    },
    
    setWay: function() {
        var posX = [ 700, 250, 200, 650 ];
        var posY = [ 400, 20, 250, 130 ];
        for (var i = 0; i < 4; i++) {
          this.way = new Way();
          this.way.setPosition( new cc.Point( posX[i], posY[i] ) );
          this.addChild( this.way );
          this.way.scheduleUpdate();   
        }
    },
    
    setBG: function() {
        this.bg = new BG();
        this.bg.setPosition( new cc.Point( 300, 350 ) );
        this.addChild( this.bg );
        this.bg.scheduleUpdate();   
    },
    
    setEnemy: function() {
        var posYOfEnemy = [ 1000, 800, 1200, 700 ];
        var posXOfEnemy = [ 100, 220, 350, 480 ];
        for ( var i = 0; i < 4; i++ ) {
            this.enemy = new Enemy();
            this.enemy.setPosition( new cc.Point( posXOfEnemy[i], posYOfEnemy[i] ) );
            this.addChild( this.enemy );
            this.enemy.scheduleUpdate();
        }
    },
    
    setFish: function() {
        //for (var i = 0; i < 3; i++) {
            this.fish = new Fish();
            this.fish.randomPosition();
            this.addChild( this.fish );
            this.fish.scheduleUpdate();
       // }
        
//        var posX = [ 50, 500, 350 ];
//        var posY = [ 200, 310, 310 ];
//        for ( var i = 0; i < 4; i++ ) {
//            this.fish = new Fish();
//            this.fish.setPosition( new cc.Point( posX[i], posY[i] ) );
//            this.addChild( this.fish );
//            this.fish.scheduleUpdate();
//        }
        
    },
    
    updateFish: function() {
        if ( this.gold.closeTo( this.ship ) ) {
            this.gold.randomPosition();
        }
    },
    
    setHeart: function() {
        this.heart = new Heart();
        this.heart.setPosition( new cc.Point( 500, 670 ) );
        this.addChild( this.heart );
        this.heart.scheduleUpdate();
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