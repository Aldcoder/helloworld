input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        music.playMelody("C5 F E F G F A B ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
basic.showString("At your service")
basic.showLeds(`
    # . # . #
    # . # . #
    # # # # #
    . . # . .
    . . # . .
    `)
