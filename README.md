# Proyecto de React - Lista de Personajes de Rick and Morty


Este es un proyecto de una aplicación web desarrollada con React que muestra dos listas de personajes de la serie Rick and Morty, obtenidos a través de la API pública de Rick and Morty. Al seleccionar un personaje de cada lista, se muestran tres secciones debajo: 
- La Primera, episodios en los que aparece personaje de la primera lista.
- Segunda, los episodios que comparten ambos personajes.
- Tercera, los episodios en los que aparece el segundo personaje seleccionado.

La aplicación utiliza las siguientes librerías:

- Axios: Para realizar solicitudes HTTP a la API de Rick and Morty.
- Notistack: Para mostrar notificaciones de estilo Snackbar en la interfaz de usuario.

## El proyecto está desplegado en Firebase.
- https://rick-and-morty-c28ac.web.app/

### Características
- Muestra dos listas de personajes de Rick and Morty.
- Paginación para cargar más personajes en cada lista.
- Selección de un personaje de cada lista.
- Muestra los episodios en los que aparece cada personaje.
- Muestra los episodios que comparten ambos personajes seleccionados.

## Instalación
Clona este repositorio en tu máquina local:

```
git clone https://github.com/micaela-torre/rick-and-morty.git 
```
Instala las dependencias utilizando npm:

```
npm install
```

## Levantar el Frontend

```
npm start
```
Esto iniciará el servidor de desarrollo y la aplicación estará disponible en http://localhost:3000/.
