input.onButtonPressed(Button.A, function () {
    SpelerAWint += 1
    basic.showLeds(`
        . . # # .
        . # . . #
        . # # # #
        . # . . #
        . # . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Gewonnen!")
    basic.showLeds(`
        . . # # .
        . # . . #
        . # # # #
        . # . . #
        . # . . #
        `)
    basic.showNumber(SpelerAWint)
    basic.pause(2000)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # # . . .
        `)
    basic.showNumber(SpelerBWint)
    basic.pause(2000)
    basic.showString("Ties!")
    basic.showNumber(Gelijkspel)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Gelijkspel += 1
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("wedstrijden gespeeld.")
    basic.showNumber(SpelerAWint + (SpelerBWint + Gelijkspel))
})
input.onButtonPressed(Button.B, function () {
    SpelerBWint += 1
    basic.showLeds(`
        # # . . .
        # . # . .
        # # # . .
        # . # . .
        # # . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
let Gelijkspel = 0
let SpelerBWint = 0
let SpelerAWint = 0
SpelerAWint = 0
SpelerBWint = 0
Gelijkspel = 0
basic.forever(function () {
	
})
