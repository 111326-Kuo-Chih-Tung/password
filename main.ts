input.onButtonPressed(Button.A, function () {
    radio.setGroup(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(0)
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
