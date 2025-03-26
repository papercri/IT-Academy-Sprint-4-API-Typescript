# IT-Academy-Sprint-4-API-Typescript

Este proyecto es una aplicación web que utiliza una API para obtener chistes y permite a los usuarios calificarlos. Está desarrollado con **TypeScript** y utiliza buenas prácticas de programación para garantizar un código limpio y mantenible.

## Características

- Obtención de chistes aleatorios desde la API [icanhazdadjoke](https://icanhazdadjoke.com/).
- Interfaz interactiva para mostrar chistes.
- Botones para calificar los chistes con puntuaciones de 1 a 3.
- Registro de chistes calificados con su puntuación y fecha en un historial.

## Tecnologías utilizadas

- **TypeScript**: Para un desarrollo más robusto y tipado estático.
- **HTML/CSS**: Para la estructura y el diseño de la interfaz.
- **Fetch API**: Para realizar solicitudes HTTP a la API de chistes.

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
2. Usa los botones de puntuación (1, 2 o 3) para calificar el chiste.
3. Los chistes calificados se registrarán en la consola con su puntuación y fecha.

## API utilizada
Este proyecto utiliza la API icanhazdadjoke para obtener chistes aleatorios. La API devuelve los datos en formato JSON y requiere que las solicitudes incluyan el encabezado Accept: application/json.
