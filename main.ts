radio.onReceivedString(function (receivedString) {
    if (receivedString == "på") {
        på = !(på)
        if (på == true) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "sving") {
        sving = value
    }
    if (name == "frembak") {
        frembak = value
    }
})
let frembak = 0
let sving = 0
let på = false
radio.setGroup(30)
på = false
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (på) {
        bitbot.move(BBMotor.Left, BBDirection.Reverse, sving)
        bitbot.move(BBMotor.Right, BBDirection.Reverse, 100 - sving)
    } else {
        bitbot.stop(BBStopMode.Coast)
    }
})
