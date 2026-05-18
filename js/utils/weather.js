const defaultCity = 'Barcelona'; // Ciudad por defecto por si ocurre algun error

export const getLocalWeather = () => { // Funcion para buscar la localizacion del usuario

    if (navigator.geolocation) { // Comprobamos si el navegador soporta geolocalización

        navigator.geolocation.getCurrentPosition( // Usamos el metodo para tomar la localizacion del usuario
            (position) => {

                const location = `${position.coords.latitude}, ${position.coords.longitude}` // Guardamos la latitud y longitud

                fetchWeather(location); // Con estas coordenadas, llamamos a la API
            },
            (error) => {
                console.error("El usuario denegó el acceso o hubo un error", error); // El usuario no acepto la geolocalizacion o fallo la api
                
                fetchWeather(defaultCity) // Dejamos lista una ciudad por defecto
            }
        );
    } else {
        console.log("Tu navegador no soporta geolocalización"); // Si el ordenador es muy viejo y no soporta geolocalizacion

        fetchWeather(defaultCity)
    }
};


const fetchWeather = async (location) => { // Funcion para llamar a la API 

    const apiKey = 'e724bf96508349c990f151349262004' 

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no` // La URL de la API con la key y la localizacion

    try {

        const response = await fetch(url) // Llamamos a la API

        if (!response.ok) throw new Error('Error en la respuesta de la API')

        const data = await response.json() // Parseamos la respuesta a JSON

        renderWeather(data) // Llamamos a la funcion de renderizar pasandole la respuesta parseada

    } catch (error) {

        console.error('No se pudo obtener el clima', error);

        const widget = document.getElementById('weather-container');
        
        if (widget) widget.innerHTML = `<span style="font-size:0.8rem">⚠️ Sin datos</span>`;
    }
}

const renderWeather = (data) => { // Funcion para renderizar el widget

    if (!data) {
        console.error("No se recibieron datos válidos de la API", data);
        return;
    }

    // Guardamos la informacion necesaria
    const city = data.location.name;
    const temp = Math.round(data.current.temp_c);
    const condition = data.current.condition.text;
    const icon = `https:${data.current.condition.icon}`;
  
    const widget = document.getElementById('weather-container') // Guardamos el contenedor en una variable

    // Creamos el HTML para la tarjeta con el widget
    widget.innerHTML = `
        <div class='widget-card'>
            <div class='icon-container'>
                <img src='${icon}' alt='${condition}' class='weather-icon' />
                <p class='weather-temperature'>${temp}°C</p>
            </div>
            <p class='weather-city'>${city}</p>
        </div>
    
    `
}