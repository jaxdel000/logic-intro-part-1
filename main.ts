function changeScore () {
    info.changeScoreBy(1)
}
function gameOver () {
    game.over(false)
}
function enemy () {
    Enemie = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . e e e e . . . . . . . 
. . . . . e d d e . . . . . . . 
. . . . . . d d . . . . . . . . 
. . d d d d 7 7 d d d d . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . . 7 7 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Enemie.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenHeight()))
    extra_velocity = 0
    if (Math.percentChance(20)) {
        extra_velocity = Math.randomRange(0, 50)
    } else {
        extra_velocity = Math.randomRange(-16, 16)
    }
    Enemie.vx = -50 - 5 * info.score() - extra_velocity
    if (info.score() <= 20) {
        controller.moveSprite(Spaceship, 100 - 2 * info.score(), 100 - 2 * info.score())
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    gameOver()
})
let extra_velocity = 0
let Enemie: Sprite = null
let Spaceship: Sprite = null
Spaceship = sprites.create(img`
. . . . . . . c . . . . . . . . 
. . . . . . c c c . . . . . . . 
. . . . . c c 3 c c . . . . . . 
. . . . . c 3 3 3 c . . . . . . 
. . . . . c c 3 c c . . . . . . 
. . . . . . c 3 c . . . . . . . 
. . . . . c c 3 c c . . . . . . 
. . . . . c c 3 c c . . . . . . 
. . . . . c c 3 c c . . . . . . 
. . . . . c c 3 c c . . . . . . 
. . . . . c c 3 c c . . . . . . 
. . . . . c c 3 c c . . . . . . 
. . . . . . c 3 c . . . . . . . 
. . . . . 1 3 3 3 1 . . . . . . 
. . . . 1 3 1 1 1 3 1 . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
`, SpriteKind.Player)
controller.moveSprite(Spaceship)
Spaceship.x = 8
Spaceship.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    changeScore()
    enemy()
})
game.onUpdateInterval(2000, function () {
	
})
