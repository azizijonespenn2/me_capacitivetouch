input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
    music.playTone(175, music.beat(BeatFraction.Whole))
    basic.pause(200)
    basic.clearScreen()
})
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
music.playTone(494, music.beat(BeatFraction.Double))
basic.forever(function () {
	
})
