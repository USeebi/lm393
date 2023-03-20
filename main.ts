function LED_Off () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
LED_Off()
basic.pause(200)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.pause(1000)
    } else {
        pins.analogWritePin(AnalogPin.P13, pins.analogReadPin(AnalogPin.P0))
        pins.analogWritePin(AnalogPin.P14, pins.analogReadPin(AnalogPin.P0))
        pins.analogWritePin(AnalogPin.P15, pins.analogReadPin(AnalogPin.P0))
    }
})
