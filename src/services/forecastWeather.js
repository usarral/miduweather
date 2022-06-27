
const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '71648bafecmshf9adc750d6111aep15b543jsn998506e31c26',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
export async function getDayForecast(query, lang = 'es') {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&lang=${lang}`, FETCH_OPTIONS)
    const data = await response.json();
    const { location, current } = data;
    const forecastday = data.forecast.forecastday[0];
    /* Creating a new object with the same properties as the object returned from the API. */
    const returnData = {
        current: {
            name: location.name,
            region: location.region,
            country: location.country,
            localtime: location.localtime,
            lastUpdate: current.last_updated_epoch,
            temp: current.temp_c,
            temp_f: current.temp_f,
            isday: current.is_day,
            condition_text: current.condition.text,
            condition_icon: current.condition.icon,
            wind_mph: current.wind_mph,
            wind_kph: current.wind_kph,
            wind_degree: current.wind_degree,
            wind_dir: current.wind_dir,
            pressure_mb: current.pressure_mb,
            pressure_in: current.pressure_in,
            precip_mm: current.precip_mm,
            precip_in: current.precip_in,
            humidity: current.humidity,
            feelslike_c: current.feelslike_c,
            feelslike_f: current.feelslike_f,
            vis_km: current.vis_km,
            vis_miles: current.vis_miles,
            uv: current.uv
        },
        day: {
            date_epoch: forecastday.date_epoch,
            maxtemp_c: forecastday.day.maxtemp_c,
            maxtemp_f: forecastday.day.maxtemp_f,
            mintemp_c: forecastday.day.mintemp_c,
            mintemp_f: forecastday.day.mintemp_f,
            avgtemp_c: forecastday.day.avgtemp_c,
            avgtemp_f: forecastday.day.avgtemp_f,
            maxwind_mph: forecastday.day.maxwind_mph,
            maxwind_kph: forecastday.day.maxwind_kph,
            totalprecip_mm: forecastday.day.totalprecip_mm,
            totalprecip_in: forecastday.day.totalprecip_in,
            avgvis_km: forecastday.day.avgvis_km,
            avgvis_miles: forecastday.day.avgvis_miles,
            avghumidity: forecastday.day.avghumidity,
            condition_text: forecastday.day.condition.text,
            condition_icon: forecastday.day.condition.icon,
            uv: forecastday.day.uv
        },
        hour: forecastday.hour


    }

    return returnData
}