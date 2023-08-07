input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (run == "F") {
        run = "S"
    } else {
        run = "F"
    }
    radio.sendString(run)
    basic.showString(run)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("L")
    basic.showString("L")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
    basic.showString("R")
})
let run = ""
radio.setGroup(1)
