input.onButtonPressed(Button.A, function () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, maqueen.sensor(PingUnit.Centimeters))
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(5000)
    maqueen.motorStopAll()
})
