var score = 0;

var GameLayer = cc.LayerColor.extend ({
    init: function() {
        
        this.setBG();
        this.setPlayer();
        this.setEnemy();
        this.setFish();
        this.setHeart();
        this.setScore();
                
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
    
    updateEnemy: function() {
        if ( this.enemy.closeTo( this.player ) ) {
            
        }
    },
    
    setFish: function() {
        this.fish = new Fish();
        this.fish.randomPosition();
        this.addChild( this.fish );
        this.fish.scheduleUpdate();
    },
    
    updateFish: function() {
        if ( this.fish.closeTo( this.player ) ) {
            this.updateScore();
            this.fish.randomPosition();
        }
    },
    
    setHeart: function() {
        var posXOfHeart = [ 470, 510, 550 ];

        for ( var i = 0; i < 3; i++ ) {
            this.heart = new Heart();
            this.heart.setPosition( new cc.Point( posXOfHeart[i], 650 ) );
            this.addChild( this.heart );
            this.heart.scheduleUpdate();
        }
        
//        this.label = cc.LabelTTF.create(": 0", 'Peach Play', 40);
//        this.label.setPosition(new cc.Point( 500, 650));
//        this.addChild(this.label);
    },
    
    setScore: function() {
        this.scoreLabel = cc.LabelTTF.create( "SCORE: " + score, 'Peach Play', 40 );
        this.scoreLabel.setString( "SCORE: " + score );
        this.scoreLabel.setPosition(new cc.Point( 100, 650 ) );
        this.addChild( this.scoreLabel );
    },
    
    updateScore: function() {
        score += 10;
        this.setScore();
        //this.scoreLabel.setString( "SCORE: " + score );
    }
    
});
 
var gameLayerScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});