# Chile Natural: Flora y Fauna

¡Bienvenidos a un espacio dedicado a la asombrosa biodiversidad de Chile! Esta aplicación web fue desarrollada utilizando **Angular 17** y está diseñada como una plataforma interactiva para descubrir la impresionante flora y fauna endémica de nuestro país, al igual que un catálogo con productos locales.

## Características Principales

1. **Página de Inicio Interactiva:** 
   Una bienvenida impresionante que presenta la misión del sitio y te guía fácilmente hacia la navegación principal mediante animaciones e imágenes en alta calidad.
   
2. **Directorio de Especies (Flora y Fauna):** 
   Explora información de especies vulnerables, en peligro y patrimoniales de Chile (como el Huemul, Cóndor Andino, Zorro de Darwin, Copihue, y el Alerce). Obtiene datos e imágenes dinámicamente mediante un Servicio en Angular.

3. **Catálogo de Tienda Naturista:** 
   Muestra un vitrina interactiva de productos y souvenirs relacionados con el proyecto (Polerones, jockeys de malla, tazas).

4. **Componentes Modernos y Autónomos:** 
   El proyecto ha sido refactorizado desde una aplicación inicial de frutos secos empleando la estructura de **Standalone Components** del nuevo Angular, prescindiendo del uso de `ngModules` tradicionales.

## Tecnologías y Prácticas Implementadas

- **Framework:** Angular v17
- **Lenguaje:** TypeScript, HTML5, CSS3 Nativo
- **Estilos:** Variables CSS modernas, responsive design (adaptable a celulares y tablets), sistema de animaciones (fade-ins) y flexbox/grid.
- **Enrutamiento (Routing):** Navegación fluida entre pantallas (Inicio, Especies, Catálogo, Contacto).
- **Servicios:** Datos desacoplados e inyectables (`catalog.service.ts` y `species.service.ts`).

## Instalación y Despliegue Local

Sigue los siguientes pasos para correr este proyecto de manera local en tu entorno:

1. **Requisitos previos:** Asegúrate de tener instalado [Node.js](https://nodejs.org/) (incluye NPM) y el [Angular CLI](https://angular.dev/tools/cli) en tu computadora.

2. **Clonar/Abrir el repositorio:** Abre una terminal dentro de la carpeta raíz del proyecto (`florafauna`).

3. **Instalar dependencias:** Ejecuta el siguiente comando para asegurarte de que se descarguen con éxito las librerías necesarias de Angular:
   ```bash
   npm install
   ```

4. **Correr el servidor:** Inicia la aplicación en modo desarrollo.
   ```bash
   ng serve --open
   ```
   > Al utilizar el flag `--open`, la página abrirá de forma automática en tu navegador web y estará en `http://localhost:4200/`. El servidor cuenta con Live-Reload por lo tanto cada vez que edites tu código e guardes, tu página se actualizará enseguida.

## Estructura de Directorios Destacada

```text
florafauna/
│
├── src/
│   ├── app/
│   │   ├── components/       # Componentes reusables (Header y Footer)
│   │   ├── models/           # Interfaces de TypeScript (Species, Product)
│   │   ├── pages/            # Componentes de Vistas (Inicio, etc.)
│   │   └── services/         # Servicios de obtención de Datos
│   │
│   ├── assets/
│   │   └── imagen/           # Carpeta dedicada a toda la multimedia (íconos y fondos)
│   │
│   └── index.html            # Archivo base y título (Chile Natural)
```

---
*Este proyecto fue diseñado como parte de un trabajo universitario para la asignatura de desarrollo web.*
