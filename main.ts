input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    music.playTone(349, music.beat(BeatFraction.Whole))
})
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
