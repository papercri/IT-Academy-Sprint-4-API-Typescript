# IT-Academy-Sprint-4-API-Typescript

Este proyecto es una aplicación web que utiliza varias APIs para obtener chistes y permite a los usuarios calificarlos. Además, incluye una funcionalidad para detectar la ubicación del usuario y mostrar el clima actual basado en su geolocalización o dirección IP. Está desarrollado con **TypeScript** y utiliza buenas prácticas de programación para garantizar un código limpio y mantenible.


## Características

- Obtención de chistes aleatorios desde dos APIs:
  - [icanhazdadjoke](https://icanhazdadjoke.com/).
  - [Chuck Norris Joke API](https://api.chucknorris.io/).
- Alternancia automática entre las dos APIs para mostrar chistes variados.
- Interfaz interactiva para mostrar chistes.
- Botones para calificar los chistes con puntuaciones de 1 a 3.
- Registro de chistes calificados con su puntuación y fecha en un historial.
- Detección de la ubicación del usuario mediante la API de geolocalización del navegador.
- Obtención de la ubicación basada en la dirección IP como alternativa si el usuario bloquea la geolocalización.
- Visualización del clima actual basado en la ubicación del usuario.


## Tecnologías utilizadas

- **TypeScript**: Para un desarrollo más robusto y tipado estático.
- **HTML/CSS**: Para la estructura y el diseño de la interfaz.
- **Fetch API**: Para realizar solicitudes HTTP a las APIs de chistes y clima.
- **Geolocation API**: Para obtener la ubicación del usuario.
- **IPInfo API**: Para obtener la ubicación basada en la dirección IP.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/papercri/IT-Academy-Sprint-4-API-Typescript.git

2. Navega al directorio del proyecto:

    ```bash
    cd IT-Academy-Sprint-4-API-Typescript

3. Instala las dependencias necesarias:

    ```bash
    npm install

4. Compila el código TypeScript a JavaScript:

    ```bash
    npm tsc

5. Abre el archivo index.html en tu navegador para ver la aplicación en acción.

## Uso

1. Haz clic en el botón "Get a new joke" para obtener un chiste aleatorio.
2. Los chistes se alternarán automáticamente entre las APIs icanhazdadjoke y Chuck Norris Joke API.
3. Usa los botones de puntuación (1, 2 o 3) para calificar el chiste.
4. Los chistes calificados se registrarán en la consola con su puntuación y fecha.
5. La aplicación detectará automáticamente tu ubicación y mostrará el clima actual en la interfaz.
6. Si bloqueas la geolocalización, la aplicación usará tu dirección IP para determinar tu ubicación y mostrar el clima.


## APIs utilizadas


1. [icanhazdadjoke](https://icanhazdadjoke.com/)  
   Esta API se utiliza para obtener chistes aleatorios. Devuelve los datos en formato JSON y requiere que las solicitudes incluyan el encabezado `Accept: application/json`.

2. [Chuck Norris Joke API](https://api.chucknorris.io/)
   Esta API se utiliza para obtener chistes aleatorios de Chuck Norris. Devuelve los datos en formato JSON.

3. [IPInfo](https://ipinfo.io/)  
   Esta API se utiliza como alternativa para obtener la ubicación del usuario basada en su dirección IP. Devuelve información como la ciudad, región y coordenadas geográficas.

4. [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)  
   Se utiliza para obtener la ubicación del usuario mediante el navegador. Si el usuario bloquea el acceso, se recurre a la API de IPInfo.
