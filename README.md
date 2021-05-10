# Pruebas automatizadas Entregable Semana 5
# Instrucciones para ejecutar los escenarios
*A continuación se descbribe una serie de pasos necesarios para ejecutar los escenarios de forma correcta con la api de automatización Cypress*:
------------------
  1. Tener funcionando Ghost en su versión 3.3.0 de forma local, asegurandose que el puerto de salida es http://localhost:2368/
  2. Clonar este repositorio
  3. Por medio de un editor de texto se debe configurar las credenciales para correr las pruebas exitosamente.
  4. El archivo de configuración de credenciales se encuentra en : "cypress/fixtures/login_credentials.json", por favor poner los datos del correo y password utilizados en la cofiguración de su ambiente local para Ghost 3.3.0.
  5. Ejecutar por medio de consola el siguiente comando: cypress run --headless --spec "cypress/integration/*".
  6. La herramienta cypress se ejecutará en modo Headless y podra visualizar los videos de cada una de las pruebas.
  7. Para visualizar el reporte en video puede hacerlo desde la ruta: "cypress/videos/*" en cada carpeta se encuentra las funcionalidades y en cada funcionalidad puede visualizar los 4 escenarios propuestos.
# Funcionalidades bajo prueba en GHOST
## Administración Post
* *Primer escenario (Crear un Post)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Posts"
  3. Dar clic en "New post"
  4. Ingresar un texto para el titulo del post
  5. Regresar a la vista posts
* *Segundo escenario (Editar un Post)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Posts"
  3. Seleccionar el primer post con estado "Draft"
  4. Activar el cuerpo del post e ingresar texto de prueba
  5. Regresar a la vista posts
* *Tercer escenario (Publicar un Post)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Posts"
  3. Seleccionar el primer post con estado "Draft"
  4. Dar clic en Publish
  5. Dar clic en la opción "Set it live now"
  6. Dar clic en el botón "Publish"
  7. Regresar a la vista posts
* *Cuarto escenario (Desactivar un Post)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Posts"
  3. Dar clic sobre el primer post con estado "Published"
  4. Dar clic en "Update"
  5. Dar clic en "Unpublished"
  6. Dar clic en el botón "Unpublish"
  7. Regresar a la vista posts
* *Quinto escenario (Eliminar un Post)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Posts"
  3. Dar clic sobre el primer post de la lista
  4. Dar clic en el icono "Settings"
  5. Dar clic en "Delete post"
  6. Dar clic en el botón "Delete" de la ventana desplegada
  7. Regresar a la vista posts
## Administración Page
* *Primer escenario (Crear una página)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Dar clic en "New page"
  4. Ingresar un texto para el titulo de la página
  5. Devolverse a la pestaña de pages y verificar que exista la página creada correctamente
* *Segundo escenario (Modificar el título de una página)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Crear una página con el título "Mi segunda página" y volver al listado de páginas actuales.
  4. Seleccionar la página con titulo "Mi segunda página"
  5. Borrar el texto del título y cambiar el texto por "Modificando mi primer página"
  6. Devolverse a la pestaña de pages y verificar que la página fue modificada correctamente
* *Tercer escenario (Publicar una página)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Crear una página con el título "Mi tercer página" y volver al listado de páginas actuales.
  4. Seleccionar la página con titulo "Mi tercer página"
  5. Realizar la publicación de la página
  6. Devolverse a la pestaña de pages y verificar que la página el estado sea "Published"
* *Cuarto escenario (Eliminar una página)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Crear una página con el título "Mi cuarta página" y volver al listado de páginas actuales.
  4. Seleccionar la página con titulo "Mi cuarta página" y dar clic en el icono de configuración
  5. Bajar el scroll hasta la parte final y seleccionar "Delete Page"
  6. Confirmar el mensaje emergente dando clic la opción "Delete"
  7. Devolverse a la pestaña de pages y verificar que la página fue eliminada correctamente
## Administración Tag
## Administración de usuarios
* *Primer escenario (Modificar Role de un usuario)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff"
  3. Dar clic sobre el primer "usuario" de la lista
  4. Dar clic sobre el "Role" activo
  5. Seleccionar el "Role" "Editor"
  6. Dar clic en el botón "Save"
  7. Regresar a la vista "Staff"

* *Segundo escenario (Modificar cover de un usuario)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff"
  3. Dar clic sobre el primer "usuario" de la lista
  4. Dar clic sobre el "Change Cover"
  6. Dar clic en el botón "Save"
  7. Regresar a la vista "Staff"

* *Tercer escenario (Modificar la biografía del usuario Ghost)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff e ingresar al usuario Ghost"
  3. Limpiar la biografía y escribir "Somos estudiantes de la maestría en ingeniería de software, actualmente nos encontramos en proceso de aprendizaje para aplicar pruebas E2E con la api de automatización Cypress".
  4. Guardar los cambios y nos devolvemos a la sección de staff.
  5. Volver a ingresar al usuario Ghost para verificar los cambios en la biografia.
## Configuraciones Generales
