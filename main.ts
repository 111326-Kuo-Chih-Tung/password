radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.stringPlayable("C D E F G A B C5 ", 100), music.PlaybackMode.InBackground)
    basic.showString("stop")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.setGroup(0)
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(3)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(0)
    basic.showNumber(0)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    music.play(music.stringPlayable("C5 B A G F E D C ", 100), music.PlaybackMode.InBackground)
    basic.showString(receivedString)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.setGroup(4)
    radio.sendString(receivedString)
    radio.setGroup(3)
})
radio.setGroup(3)
basic.forever(function () {
	
})
