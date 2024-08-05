import './WeatherForecast.css';

function WeatherForecast({weatherForecast}) {

    const {day,img,imgAlt,conditions,time} = weatherForecast;
    
    return (
        <div className="weather">   
            <h2>{day}</h2>
            <img src={img} alt={imgAlt} />
            <p><span>conditions: {conditions} </span>current weather conditions</p>
            <p><span>time: {time}</span>time of day</p>
        </div>
      )
}

export default WeatherForecast;