# Proyecto Final - Hotel Patagonia 🏨

Bienvenido al repositorio del proyecto final, una aplicación completa para la gestión de un hotel 4 estrellas llamado **Hotel Patagonia**. Esta aplicación ofrece una experiencia de usuario intuitiva y herramientas poderosas para los administradores y clientes del hotel. Construida con **React** y una variedad de dependencias de primer nivel, permite desde la reserva de habitaciones hasta la administración completa de usuarios y servicios.

**Repositorio del Backend:** [backendProyectoFinal](https://github.com/santinohamada/backendProyectoFinal)

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
  - [assets](#assets)
  - [components](#components)
  - [Context](#context)
  - [CustomHooks](#customhooks)
  - [DateRange](#daterange)
  - [Modal](#modal)
  - [pages](#pages)
  - [RegistrationForm](#registrationform)
  - [ReservarComponents](#reservarcomponents)
  - [Usuarios](#usuarios)
  - [helpers](#helpers)
  - [queries](#queries)
  - [routes](#routes)
- [Instalación y Configuración](#instalación-y-configuración)
- [Dependencias Principales](#dependencias-principales)
- [Características Principales](#características-principales)
- [Mejoras Futuras](#mejoras-futuras)
- [Colaboradores](#colaboradores)
- [Licencia](#licencia)

---

## Descripción

El **Hotel Patagonia** es una aplicación web orientada tanto a clientes como a administradores de un hotel de lujo. Incluye una interfaz fácil de usar para realizar reservas, gestionar habitaciones y visualizar información del hotel. Los administradores pueden gestionar usuarios, habitaciones y reservas, proporcionando una solución completa para la operación de un hotel en línea.

## Estructura del Proyecto

La estructura de este proyecto sigue una organización modular, separando los componentes, contextos, hooks personalizados, y páginas de la aplicación. A continuación se describe cada carpeta y sus componentes más importantes:

### `assets/`
Contiene archivos estáticos como imágenes y otros recursos visuales.

### `components/`
Componentes comunes y reutilizables para toda la aplicación.

- **Footer.jsx**: Pie de página con enlaces y opciones de navegación adicionales.
- **Menu.jsx**: Menú de navegación principal que facilita el acceso a diferentes secciones de la aplicación.

### `Context/`
Proporciona estados globales para manejar la información en toda la aplicación a través de Context API.

- **CartContext.jsx**: Estado global para manejar el carrito de reservas de habitaciones.
- **DateContext.jsx**: Almacena y gestiona las fechas seleccionadas por los usuarios para sus reservas.
- **FiltersContext.jsx**: Controla los filtros aplicados en la búsqueda de habitaciones.
- **UserContext.jsx**: Contiene la información del usuario actualmente autenticado.

### `CustomHooks/`
Custom Hooks para encapsular lógica repetitiva o específica del negocio.

- **useCart.jsx**: Proporciona funcionalidades relacionadas con el carrito de reservas.
- **useFilters.jsx**: Controla la lógica de filtrado para la búsqueda de habitaciones.
- **useModal.jsx**: Facilita la apertura y cierre de modales de manera consistente.
- **useUser.jsx**: Administra la información del usuario y su autenticación.

### `DateRange/`
Componente especializado para la selección de rangos de fechas.

- **DateRange.jsx**: Permite a los usuarios seleccionar un intervalo de fechas para la reserva.

### `Modal/`
Componente de modal personalizable para ventanas emergentes.

- **MyModal.jsx**: Modal reutilizable en diferentes partes de la aplicación, configurado para distintos usos como confirmaciones y alertas.

### `pages/`
Páginas principales que representan diferentes vistas de la aplicación.

- **Administracion.jsx**: Interfaz de administración para gestionar reservas, usuarios y habitaciones.
- **Contacto.jsx**: Página de contacto donde los usuarios pueden enviar mensajes al hotel.
- **Error404.jsx**: Página de error 404 para rutas no encontradas.
- **IniciarSesion.jsx**: Página de inicio de sesión para usuarios registrados.
- **Inicio.jsx**: Página de inicio de la aplicación que da la bienvenida al usuario.
- **Nosotros.jsx**: Información general sobre el hotel y sus valores.
- **Reservar.jsx**: Página donde los usuarios pueden seleccionar y reservar habitaciones.
- **VerHabitaciones.jsx**: Muestra todas las habitaciones disponibles en el hotel.

### `RegistrationForm/`
Componentes dedicados a la funcionalidad de registro de usuarios.

- **RegistrationForm.jsx**: Formulario de registro para nuevos usuarios con validación de datos.

### `ReservarComponents/`
Componentes específicos para el flujo de reserva de habitaciones.

- **CartCard.jsx**: Tarjeta que muestra detalles de una reserva en el carrito.
- **RoomCards.jsx**: Tarjetas de presentación para las habitaciones disponibles.
- **ReservationForm.jsx**: Formulario de reserva con selección de habitación, fechas y cantidad de personas.
- **SelectPersonas.jsx**: Selector para definir el número de personas en la reserva.

### `Usuarios/`
Componentes para la administración y visualización de los usuarios registrados.

- **TablaUsuarios.jsx**: Tabla que muestra una lista completa de usuarios.
- **ListaHabitaciones.jsx**: Lista con todas las habitaciones y su estado actual.

### `helpers/`
Funciones auxiliares y utilidades para operaciones comunes o específicas.

### `queries/`
Consultas y peticiones a la API para interactuar con el backend y manejar datos en tiempo real.

### `routes/`
Rutas protegidas y específicas para diferentes roles de usuario.

- **RutaProtegida.jsx**: Ruta accesible solo para usuarios autenticados.
- **RutasAdministrador.jsx**: Ruta para usuarios con permisos de administrador.

---

## Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/santinohamada/ProyectoFinal.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd ProyectoFinal
   ```

3. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

4. Configura las variables de entorno en un archivo `.env`:
   ```bash
   VITE_API_INICIARSESION = Endpoint destinado al Inicio de sesión
   VITE_API_USUARIOS = Endpoint destinado a peticiones de usuarios
   VITE_API_RESERVAS = Endpoint destinado a peticiones de reservas
   VITE_API_HABITACIONES = Endpoint destinado a peticiones de habitaciones
   VITE_API_HABITACIONESDISPONIBLES = Endpoint destinado a habitaciones disponibles
   VITE_API_VERIFICARADMIN = Endpoint destinado a verificar rol admin
   ```

5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Dependencias Principales

- **React**: Librería para construir la interfaz de usuario.
- **Bootstrap y Bootstrap Icons**: Framework de estilos y colección de íconos.
- **Framer Motion**: Biblioteca para animaciones fluidas y atractivas.
- **React Bootstrap**: Componentes de Bootstrap adaptados a React.
- **React Datepicker**: Selector de fechas utilizado en el flujo de reserva.
- **React Hook Form**: Facilita la validación y gestión de formularios.
- **React Router Dom**: Sistema de enrutamiento para aplicaciones SPA.
- **Rsuite**: Biblioteca de componentes UI para React.
- **SweetAlert2**: Herramienta para mostrar alertas y mensajes personalizados.

## Características Principales

- **Reserva de Habitaciones**: Interfaz para seleccionar fechas y habitaciones, con un flujo intuitivo de reserva.
- **Gestión de Usuarios y Roles**: Registro e inicio de sesión de usuarios, incluyendo roles y permisos de administrador.
- **Interfaz de Administración**: Panel para gestionar habitaciones, reservas y usuarios, accesible solo para administradores.
- **Carrito de Reservas**: Permite a los usuarios revisar y modificar sus selecciones antes de confirmar.
- **Filtros de Búsqueda**: Búsqueda y filtrado de habitaciones según distintos criterios.
- **Alertas y Notificaciones**: Mensajes interactivos que mejoran la experiencia del usuario.

## Mejoras Futuras

- **Reservar más de una habitación por reserva**.
- **Cambio de tono claro a oscuro**.
- **Añadir una interfaz al momento del pago**.
- **Permitir registrarse e iniciar sesión con APIs externas**.
- **Añadir más filtros. Ej: capacidad de habitación, precio**.

## Colaboradores

¡Agradecemos a los siguientes colaboradores por sus contribuciones! Puedes visitar sus perfiles haciendo clic en sus nombres:

| Colaborador        | Perfil                                    |
|--------------------|-------------------------------------------|
| ![Santino Hamada](https://github.com/santinohamada.png) | [Santino Hamada](https://github.com/santinohamada) |
| ![Felicitas Ralle](https://github.com/FelicitasRalle.png) | [Felicitas Ralle](https://github.com/FelicitasRalle) |
| ![Gustavo Gettar](https://github.com/gusgettar.png) | [Gustavo Gettar](https://github.com/gusgettar) |
| ![Matoma1607](https://github.com/Matoma1607.png) | [Matoma1607](https://github.com/Matoma1607) |

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
```