import React, {useState,useEffect} from 'react'
import '../css/Clock.css'
const Clock = () => {
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const secondsRatio = time.getSeconds() / 60;
  const minutesRatio = (secondsRatio + time.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + time.getHours()) / 12;
  return (
    <>
    <div className="clock-flex-container">
    <span>Clock</span>
    <div className="clock-container">
    <div className="hand hour" style={{ '--rotation': hoursRatio * 360 }}></div>
    <div className="hand minute" style={{ '--rotation': minutesRatio * 360 }}></div>
    <div className="hand second" style={{ '--rotation': secondsRatio * 360 }}></div>
    <div className="number number1">1</div>
    <div className="number number2">2</div>
    <div className="number number3">3</div>
    <div className="number number4">4</div>
    <div className="number number5">5</div>
    <div className="number number6">6</div>
    <div className="number number7">7</div>
    <div className="number number8">8</div>
    <div className="number number9">9</div>
    <div className="number number10">10</div>
    <div className="number number11">11</div>
    <div className="number number12">12</div>
    </div>
    </div>
    </>
  )
}

export default Clock
