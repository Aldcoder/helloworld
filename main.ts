input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 F E F G F A B ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
basic.showLeds(`
    # . # . #
    # . # . #
    # # # # #
    . . # . .
    . . # . .
    `)
