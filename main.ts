radio.onReceivedValue(function (name, value) {
    Connected.showUserText(3, name)
    Connected.showUserNumber(4, value)
    if (name == "joyCente") {
        TPBot.stopCar()
        Connected.ledBrightness(Connected.DigitalRJPin.J1, true)
    } else if (name == "joyLeft") {
        if (value > 1) {
            TPBot.setWheels(-25, 25)
        } else {
            TPBot.stopCar()
        }
    } else if (name == "joyRight") {
        if (value >= 1) {
            TPBot.setWheels(25, -25)
        } else {
            TPBot.stopCar()
        }
    } else if (name >= "joyUp") {
        if (value > 1) {
            TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 30)
        } else {
            TPBot.stopCar()
        }
    } else if (name >= "joyDown") {
        if (value > 1) {
            TPBot.setTravelSpeed(TPBot.DriveDirection.Backward, 30)
        } else {
            TPBot.stopCar()
        }
    } else if (name == "joyButto") {
        if (value == 5) {
            Connected.laserSensor(Connected.DigitalRJPin.J2, true)
        } else if (value == 6) {
            Connected.laserSensor(Connected.DigitalRJPin.J2, false)
        } else if (value == 2) {
            TPBot.setServo360(TPBot.ServoList.S2, 15)
            basic.pause(15)
            TPBot.setServo360(TPBot.ServoList.S2, 0)
        } else if (value == 3) {
            TPBot.setServo360(TPBot.ServoList.S2, -15)
            basic.pause(15)
            TPBot.setServo360(TPBot.ServoList.S2, 0)
        } else if (value == 1) {
            TPBot.setWheels(-25, 25)
            basic.pause(40)
            TPBot.stopCar()
        } else if (value == 4) {
            TPBot.setWheels(25, -25)
            basic.pause(40)
            TPBot.stopCar()
        } else {
        	
        }
    }
})
radio.setGroup(80)
