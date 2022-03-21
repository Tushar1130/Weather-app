const request = require('request')
const forecast = (latitude, longitude, callback) =>{

    const url ='http://api.weatherstack.com/current?access_key=0a94a1383018c1e09a2831da14e69069&query='+ latitude + ',' + longitude + '&units=m'
    request({ url,json: true },(error,{body}) => {
        
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0] +' . It is currently '+ body.current.temperature + ' degrees Celsius out although it feels like '+ body.current.feelslike +' degrees Celsius . And the humidity here is ' + body.current.humidity + '%.' )
        }
    })
}

module.exports = forecast