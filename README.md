# Pruebas automatizadas Entregable Semana 5
# Funcionalidades bajo prueba en GHOST
## Administración Post
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
* *Tercer escenario (Modificar la biografía del usuario Ghost)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff e ingresar al usuario Ghost"
  4. Limpiar la biografía y escribir "Somos estudiantes de la maestría en ingeniería de software, actualmente nos encontramos en proceso de aprendizaje para aplicar pruebas E2E con la api de automatización Cypress".
  5. Realizar la publicación de la página
  6. Devolverse a la pestaña de pages y verificar que la página el estado sea "Published"
## Configuraciones Generales
