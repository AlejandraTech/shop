# Shop 🛍️

Este es un proyecto de aplicación web que simula un sitio de comercio electrónico. Proporciona una experiencia de usuario completa para explorar productos, autenticarse como usuario registrado y realizar compras. La aplicación está desarrollada utilizando Angular, ofreciendo una interfaz intuitiva y funcionalidades avanzadas para una experiencia de compra óptima.

## Contenido del Repositorio 📂

- **`app/`**: Directorio principal que contiene las carpetas y archivos esenciales de la aplicación.
  - **`app/components/`**: Aquí se encuentran los componentes principales de la aplicación.
    - **`areaprivada/`**: Componente para el área privada de la aplicación.
    - **`cistella/`**: Componente para gestionar la cesta de la compra.
    - **`collections/`**: Componente para mostrar colecciones de artículos.
    - **`identificacion/`**: Componente para la identificación de usuarios.
    - **`inicio/`**: Componente para la página de inicio de la aplicación.
    - **`not-found/`**: Componente para la página de error 404 (página no encontrada).
    - **`quisom/`**: Componente para mostrar información sobre la aplicación.
    - **`subscripcion/`**: Componente para la suscripción de usuarios.
  - **`app/services/`**: Contiene los servicios utilizados en la aplicación.
    - **`auth.service.ts`**: Servicio para la autenticación de usuarios y gestión de sesiones.
    - **`collection.service.ts`**: Servicio para obtener y gestionar colecciones de artículos.
    - **`cookie.service.ts`**: Servicio para gestionar cookies en la aplicación.
  - **`app/models/`**: Contiene los modelos utilizados para representar datos en la aplicación.
    - **`article.model.ts`**: Modelo para representar un artículo, que incluye nombre, descripción y precio.
    - **`user.model.ts`**: Modelo para representar un usuario, que incluye correo electrónico y DNI.
  - **`app/directives/`**: Contiene las directivas personalizadas utilizadas en la aplicación.
    - **`validar-dni.directive.ts`**: Directiva para validar el formato de un DNI (Documento Nacional de Identidad). Esta directiva se utiliza para garantizar que el campo de entrada de DNI cumpla con el formato adecuado.
  - **`app/pipes/`**: Contiene las tuberías personalizadas utilizadas en la aplicación.
    - **`filter.pipe.ts`**: Tubería para filtrar elementos basados en un texto de búsqueda. Esta tubería se utiliza para filtrar una lista de elementos según el texto ingresado en un campo de búsqueda.
  - **`app.component.html`**: Plantilla principal de la aplicación que incluye el componente de barra de navegación.
  - **`app-routing.module.ts`**: Configuración de las rutas de la aplicación.
  - **`app.component.css`**: Hoja de estilos del componente principal de la aplicación.
  - **`app.component.spec.ts`**: Archivo de prueba para el componente principal de la aplicación.
  - **`app.component.ts`**: Componente principal de la aplicación que gestiona el estado de autenticación y la navegación.
- **`assets/`**: Directorio para almacenar archivos estáticos como imágenes y estilos.
- **`index.html`**: Archivo principal de la aplicación Angular donde se incluyen los scripts y estilos necesarios.

## Funcionalidades 🛠️

- Implementación de enrutamiento para la navegación entre páginas.
- Uso de formularios reactivos para la gestión de datos de usuario.
- Integración de servicios para la autenticación de usuarios y la gestión de sesiones.
- Utilización de cookies y local storage para el almacenamiento de información del usuario.
- Simulación de un catálogo de productos con funcionalidades de paginación y filtrado.

## Cómo Usar 📋

Para utilizar esta aplicación, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Instala las dependencias del proyecto utilizando npm o yarn.
4. Ejecuta el servidor de desarrollo de Angular para ver la aplicación en tu navegador.

## Contribuciones 🤝

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes una idea para mejorar la aplicación, no dudes en abrir un issue o enviar un pull request.

## Autor 👩‍💻

Este proyecto fue creado por **@AlejandraTech** ([GitHub](https://github.com/AlejandraTech)).
