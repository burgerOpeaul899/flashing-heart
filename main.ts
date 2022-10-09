basic.showString("Welcome to Squid Game")
music.playMelody("C5 B C5 B C5 A G - ", 120)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Umbrella)
    basic.showIcon(IconNames.Square)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
