const request = require('request')
const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHVzaGFyaWFzIiwiYSI6ImNrenZtOW4yeDFpNngyb21vMzVwZGplbjYifQ.Wj6uyG-Mdl_Y5tEBJ5B4Xg&limit=1'
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services',undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to connect to find location . Try again ',undefined)
        }
        else {

            callback(undefined, {

                 latitude : body.features[0].center[1],
                 longitude : body.features[0].center[0],
                 location : body.features[0].place_name
    
            })
           
        }
    })
}

module.exports = geocode