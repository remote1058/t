input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("S")
    basic.showString("S")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("L")
    basic.showString("L")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("F")
    basic.showString("F")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
    basic.showString("R")
})
radio.setGroup(1)
