input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
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
