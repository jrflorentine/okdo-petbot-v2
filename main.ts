servos.P0.setAngle(90)
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P1)) {
        servos.P0.setAngle(120)
        basic.pause(300)
        servos.P0.setAngle(60)
        basic.pause(300)
    }
})
