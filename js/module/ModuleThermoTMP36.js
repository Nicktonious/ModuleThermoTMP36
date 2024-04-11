/**
 * @class
 * Класс аналогового датчика TMP36
 */
class ClassThermoTMP36 extends ClassSensor {
    constructor(_opts) {
        ClassSensor.call(this, _opts, _opts);
        if (this._Pins.length < 1) throw new Error();
    }
    Start(_chNum, _period) {
        this._ChStatus[0] = 1;
        let period = _period ? E.clip(_period, 20, 1000) : 100;
        this._Interval = setInterval(() => {
            let val = analogRead(this._Pins[0]) * 3.3;
            this.Ch0_Value = (val - 0.5) * 100;     //получение величины в Цельсиях
        }, period);
    }
    Stop() {
        this._ChStatus[0] = 0;
        clearInterval(this._Interval);
        this._Interval = null;
    }
}

exports = ClassThermoTMP36;