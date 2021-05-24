# Pruebas automatizadas Entregable Semana 7
## Integrantes
| Nombre                              | Correo                                                          |
| ----------------------------------- | ----------------------------------------------------------------|
| Sonia Milena Castillo               | sm.castillo@uniandes.edu.co                                     |
| Jhonnatan Eduardo Zamudio Palacios  | j.zamudiop@uniandes.edu.co                                      |
| Miguel Angel Zapata Fraile          | ma.zapataf@uniandes.edu.co                                      |
| Carlos Felipe Peña Gómez            | cf.pena1138@uniandes.edu.co                                     |

# Instrucciónes Pruebas con datos Aleatorios Faker - Cypress (Estrategía 3 escenario aleatorio)
Se realizaron escenarios de pruebas bajo la estrategia de escenarios aleatorios usando Faker como herramienta de generación de datos. Las pruebas se encuentran en cypress/integration/datos-aleatorios-faker.

Cada escenario utilizado fue probado creando diferentes entradas no deterministicas que cambian en una nueva ejecución, probando diferentes longitudes, caracteres especiales, cadenas vacías y forzando a generar errores sobre campos y formularios. 

Para ejecutarla utilizar una instancia de Ghost version 3.42.5. Asegurarse que el puerto de salida es 2369. http://localhost:2369
* Realizar la ejecución de instalación de dependencias `npm install`
* Ejecutar Cypress desde node modules con el siguiente comando: `./node_modules/.bin/cypress open`
* No hay orden determinado para cada escenario de prueba se pueden ejecutar en desorden. 

# Instrucciones para ejecutar los escenarios de Ghost 3.3.0 con Cypress
*A continuación se describe una serie de pasos necesarios para ejecutar los escenarios de forma correcta con la api de automatización Cypress*:
------------------
  1. Tener funcionando Ghost en su versión 3.3.0 de forma local, asegurandose que el puerto de salida es http://localhost:2368/
  2. Clonar este repositorio
  3. Por medio de un editor de texto se debe configurar las credenciales para correr las pruebas exitosamente.
  4. El archivo de configuración de credenciales se encuentra en : "cypress/fixtures/login_credentials.json", por favor poner los datos del correo y password utilizados en la cofiguración de su ambiente local para Ghost 3.3.0.
  5. Ejecutar por medio de consola el siguiente comando: cypress run --headless --spec "cypress/integration/ghost-30/*".
  6. La herramienta cypress se ejecutará en modo Headless y podra visualizar los videos de cada una de las pruebas y las imágenes de los pasos en cada uno de los escenarios.
  7. Para visualizar el reporte en video puede hacerlo desde la ruta: "cypress/videos/ghost-30*" en cada carpeta se encuentra las funcionalidades y en cada funcionalidad puede visualizar los 4 escenarios propuestos.
  8. Para visualizar las imágenes puede hacerlo desde la ruta: "cypress/screenshots/ghost-30/*" en cada carpeta se encuentra las funcionalidades y en cada funcionalidad puede visualizar los 4 escenarios propuestos con sus respectivos pasos cada uno.
# Instrucciones para ejecutar los escenarios de Ghost 3.42.5 con Cypress
*A continuación se describe una serie de pasos necesarios para ejecutar los escenarios de forma correcta con la api de automatización Cypress*:
------------------
  1. Tener funcionando Ghost en su versión 3.42.5 de forma local, asegurandose que el puerto de salida es http://localhost:2368/
  2. Clonar este repositorio
  3. Por medio de un editor de texto se debe configurar las credenciales para correr las pruebas exitosamente.
  4. El archivo de configuración de credenciales se encuentra en : "cypress/fixtures/login_credentials.json", por favor poner los datos del correo y password utilizados en la cofiguración de su ambiente local para Ghost 3.42.5.
  5. Ejecutar por medio de consola el siguiente comando: cypress run --headless --spec "cypress/integration/ghost-34/*".
  6. La herramienta cypress se ejecutará en modo Headless y podra visualizar los videos de cada una de las pruebas y las imágenes de los pasos en cada uno de los escenarios.
  7. Para visualizar el reporte en video puede hacerlo desde la ruta: "cypress/videos/ghost-34*" en cada carpeta se encuentra las funcionalidades y en cada funcionalidad puede visualizar los 4 escenarios propuestos.
  8. Para visualizar las imágenes puede hacerlo desde la ruta: "cypress/screenshots/ghost-34/*" en cada carpeta se encuentra las funcionalidades y en cada funcionalidad puede visualizar los 4 escenarios propuestos con sus respectivos pasos cada uno.
# Instrucciones para ejecutar los escenarios de Ghost 3.3.0 en Kraken
*A continuación se describe una serie de pasos necesarios para ejecutar los escenarios de forma correcta con la api de automatización Kraken*:
------------------
  1. Tener funcionando Ghost en su versión 3.3.0 de forma local, asegurandose que el puerto de salida es http://localhost:2368/
  2. Tener configurado Kraken en la maquina en la que se vaya a ejecutar la carpeta con las pruebas.
  3. Para cada una de las pruebas detalladas en los .feature, se debe tener las credenciales de acceso como administrador Ghost.
  4. Ejecutar por medio de consola el siguiente comando: bundle exec kraken-mobile setup.
  5. Ejecutar por medio de consola el siguiente comando: bundle exec kraken-mobile run.
  6. La herramienta Kraken se ejecutará y podra visualizar los snapshots de cada una de las pruebas.
  7. Para visualizar el reporte en html puede hacerlo desde la ruta: "reports/*" en cada carpeta se encuentra las funcionalidades y en cada funcionalidad puede visualizar los 4 escenarios propuestos.
## Pruebas de VRT -> Ressembler (5 escenarios)
Se diseño un script que permite tomar de una carpeta los screenshots para compararlo con una imagen de versión superior.

Su uso es a partir de una imagen en version 3.3.0 se guarda con before-GH# donde el numero corresponde al momento tomado. También se guarda el de version resciente es decir Ghost v 3.42 con el siguiente formato after-GH#

Instalar dependecias con npm install y ejecutar con 
*node ghost-test.js*

Se genera un reporte en consola y una imagen por cada escenario mostrando las diferencias entre cada version con el nombre compare-GH#

NOTA: el script solamente funciona si existe el mismo numero de escenarios version anterior y version nueva.

## Pruebas de VRT -> ResembleJS (5 escenarios)
*A continuación se describe una serie de pasos necesarios para ejecutar las pruebas de regresión visual para los 5 escenarios con la herramienta resembleJS*:
------------------
  1. Previamente haber realizado los pasos para generación de imágenes tanto la versión Ghost 3.3.0 y Ghost 3.42.5; tal cual como se indica en los items anteriores.
  2. Debe ubicarse en el proyecto y abrir una terminal y dar el comando cd ../resembleJS
  3. Instalar dependencias con npm install, ya que se encuentra configurado el package-lock.json
  4. Ejecutar el comando node features/*, para que se ejecuten todos los scripts y generen automaticamente los reportes con los resultados de las pruebas de regresión en cada uno de los escenarios planteados.
  5. Puede observar cada reporte en detalle en la ruta resembleJS/results/admin-page o resembleJS/results/admin-usuario, cada uno de estos directorios contiene las imagenes de comparación y su respectivo reporte en HTML.
# Registro de incidencias de acuerdo al resultado de las pruebas de regresion visual
*Se encuentran reportadas las incidencias en formato issues del repositorio*
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
### Para este set de pruebas realizar la ejecucion de las pruebas (tag -> update -> delete -> agregar tag interno)
* *Primer escenario (Agregar un tag)*
   ------------------
    1. Iniciar sesión con administrador
    2. Buscar y realizar clic sobre nav-bar Tags
    3. Buscar boton 'Nuevo tag' y hacer clic sobre el
    4. LLenar campos de configuración nuevo tag
    5. Salvar el nuevo tag
    6. Volver a pagina de lista de tags y buscar el nuevo tag
* *Segundo escenario (Eliminar un tag)*
  ------------------
    1. Iniciar sesión con administrador
    2. Buscar y realizar clic sobre nav-bar Tags
    3. Buscar el tag y clic sobre este
    4. Buscar el botón en formulario "Eliminar Tag"
    5. Buscar ventana modal y realizar clic en el botón de confirmar
    6. Assert no exista el tag en la lista de tags
* *Tercer escenario (Actualizar un tag)*
  ------------------
    1. Iniciar sesión con administrador
    2. Buscar y realizar clic sobre nav-bar Tags
    3. Buscar el tag en la lista de tags y clic sobre este
    4. modificar los campos del formulario
    5. Buscar el botón de 'Salvar' y hacer clic sobre este
    6. Volver a la lista de tags y buscar el tag actualizado.
* *Cuarto Escenario (Agregar un tag interno)*
  ------------------
    1. Iniciar sesión con administrador
    2. Buscar y realizar clic sobre nav-bar Tags
    3. Buscar boton 'Nuevo tag' y hacer clic sobre el
    4. LLenar campos de configuración nuevo tag
    5. Salvar el nuevo tag
    6. Volver a pagina de lista de tags Buscar botón 'Internal tags' y clic sobre este
    7.  Buscar el nuevo tag en la lista de tags internos
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
 * *Cuarto escenario (Cambiar contraseña de usuario)*
    1. Realizar el login como administrador
    2. En la dashboard seleccionar la pestaña "Staff e ingresar al usuario Ghost"
    3. Buscar los campos de contraseña anterior y nueva contraseña. Luego llenar estos campos con Miso2021!!
    4. Buscar el botón de guardar cambios de contraseña y realizar clic
    5. buscar alert que con mensaje de cambio exitoso de contraseña de lo contrario falla la prueba.
## Configuraciones Generales
* *Primer escenario (Modificar privacidad del sitio)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "General"
  3. Dar clic sobre el boton "Make this site private"
  4. Dar clic sobre el boton "Save settings"

* *Segundo escenario (Modificar metadata de ajustes)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "General"
  3. Dar clic sobre el boton "Expand" de la seccion Meta data
  4. Ingresar nuevo valor
  5. Dar clic sobre el boton "Save settings"

* *Tercer escenario (Modificar lenguaje de publicaciones)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "General"
  3. Dar clic sobre el boton "Expand" de la seccion Publication Language
  4. Ingresar nuevo valor
  5. Dar clic sobre el boton "Save settings"

* *Cuarto escenario (Modificar redes sociales)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "General"
  3. Dar clic sobre el boton "Expand" de la seccion Social accounts
  4. Ingresar nuevo valor
  5. Dar clic sobre el boton "Save settings"

# Instrucciones para ejecutar los escenarios de Ghost 3.42.5 en Kraken con Faker (Estrategía escenario aleatorio)
*A continuación se describe una serie de pasos necesarios para ejecutar los escenarios de forma correcta con la api de automatización Kraken con Faker:
------------------
  1. Tener funcionando Ghost en su versión 3.42.5 de forma local, asegurandose que el puerto de salida es http://localhost:2368/
  2. Tener configurado Kraken en la maquina en la que se vaya a ejecutar la carpeta con las pruebas.
  3. Tener ChomeDriver con la version del navegador que se este usando.
  4. Para cada una de las pruebas detalladas en los .feature, se debe tener las credenciales de acceso como administrador Ghost.
  5. Los datos usados en las pruebas son : ma.zapataf@uniandes.edu.co como usuario admin y misomazf88 como contraseña.
  6. Ejecutar por medio de consola el siguiente comando: bundle exec kraken-mobile setup y seleccionar 3 dispostivos web.
  7. Ejecutar por medio de consola el siguiente comando: bundle exec kraken-mobile run.
  8. La herramienta Kraken se ejecutará y podra visualizar los snapshots de cada una de las pruebas.
  9. Para visualizar el reporte en html puede hacerlo desde la ruta: "reports/*" en cada carpeta se encuentra cada uno de los 20 escenarios propuestos, para cada escenario se        cuenta con 3 datos aleatorios ingresados a los campos usando faker.

# Funcionalidades bajo prueba en GHOST 3.42.5 con data aleatoria usando Faker en Kraken (Estrategía escenario aleatorio)
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
## Administración Staff
* *Primer escenario (Cambiar slug de usuario ghost)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff"
  3. Navegar al usuario ghost-user
  4. Ingresar dato aleatorio en campo Slug
  5. Guardar cambios.
* *Segundo escenario (Cambiar Website de usuario miguel)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff"
  3. Navegar al usuario miguel
  4. Ingresar dato aleatorio en campo Website
  5. Guardar cambios.
* *Tercer escenario (Cambiar ubicacion de usuario miguel)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff"
  3. Navegar al usuario miguel
  4. Ingresar dato aleatorio en campo Location
  5. Guardar cambios.
* *Cuarto escenario (Cambiar perfil de facebook de usuario miguel)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff"
  3. Navegar al usuario miguel
  4. Ingresar dato aleatorio en campo Facebook Profile
  5. Guardar cambios.
* *Quinto escenario (Cambiar perfil de twitter de usuario miguel)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff"
  3. Navegar al usuario miguel
  4. Ingresar dato aleatorio en campo Twitter Profile
  5. Guardar cambios.
* *Sexto escenario (Cambiar Bio de usuario miguel)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Staff"
  3. Navegar al usuario miguel
  4. Ingresar dato aleatorio en campo Bio
  5. Guardar cambios.
## Configuración General
* *Primer escenario (Cambiar titulo)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "General"
  3. Navegar al campo Title & description
  4. Ingresar dato aleatorio en campo Title & description
  5. Guardar cambios.
* *Segundo escenario (Cambiar lenguaje publicacion)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "General"
  3. Navegar al campo Publication Language
  4. Ingresar dato aleatorio en campo Publication Language
  5. Guardar cambios.
## Administración Pages
* *Primer escenario (Crear pagina)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Seleccionar New page
  4. Ingresar dato aleatorio en campo Page Title
  5. Ingresar dato aleatorio en Descripcion
  6. Dar click en link Publish
  7. Dar click en boton Publish
  8. Guardar cambios.
* *Segundo escenario (Editar excerpt de pagina)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Seleccionar New page
  4. Ingresar dato aleatorio en campo Page Title
  5. Ingresar dato aleatorio en Descripcion
  6. Dar click en link Publish
  7. Dar click en boton Publish
  8. Guardar cambios
  9. Dar click en boton Post settings
  10. Ingresar dato aleatorio en Excerpt
  11. Cerrar ventana de Post settings
  12. Guardar cambios
* *Tercer escenario (Editar canonical url de metadata de pagina)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Seleccionar New page
  4. Ingresar dato aleatorio en campo Page Title
  5. Ingresar dato aleatorio en Descripcion
  6. Dar click en link Publish
  7. Dar click en boton Publish
  8. Guardar cambios
  9. Dar click en boton Post settings
  10. Dar click en nav Meta data
  11. Ingresar dato aleatorio en Canonical URL
  12. Cerrar ventana de Post settings
  13. Guardar cambios
* *Cuarto escenario (Editar metadata description de metadata de pagina)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Seleccionar New page
  4. Ingresar dato aleatorio en campo Page Title
  5. Ingresar dato aleatorio en Descripcion
  6. Dar click en link Publish
  7. Dar click en boton Publish
  8. Guardar cambios
  9. Dar click en boton Post settings
  10. Dar click en nav Meta data
  11. Ingresar dato aleatorio en Meta description
  12. Cerrar ventana de Post settings
  13. Guardar cambios
* *Quinto escenario (Editar metadata title de metadata de pagina)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Seleccionar New page
  4. Ingresar dato aleatorio en campo Page Title
  5. Ingresar dato aleatorio en Descripcion
  6. Dar click en link Publish
  7. Dar click en boton Publish
  8. Guardar cambios
  9. Dar click en boton Post settings
  10. Dar click en nav Meta data
  11. Ingresar dato aleatorio en Meta title
  12. Cerrar ventana de Post settings
  13. Guardar cambios
* *Sexto escenario (Editar url de pagina)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Pages"
  3. Seleccionar New page
  4. Ingresar dato aleatorio en campo Page Title
  5. Ingresar dato aleatorio en Descripcion
  6. Dar click en link Publish
  7. Dar click en boton Publish
  8. Guardar cambios
  9. Dar click en boton Post settings
  10. Ingresar dato aleatorio en Page URL
  11. Cerrar ventana de Post settings
  12. Guardar cambios
## Administración Tags
* *Primer escenario (Crear tag)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Tags"
  3. Seleccionar New tag
  4. Ingresar dato aleatorio en campo Name
  5. Ingresar dato aleatorio en campo Slug
  6. Ingresar dato aleatorio en campo Description
  7. Dar click en boton Save
* *Segundo escenario (Editar descripcion de tag)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Tags"
  3. Seleccionar New tag
  4. Ingresar dato aleatorio en campo Name
  5. Ingresar dato aleatorio en campo Slug
  6. Ingresar dato aleatorio en campo Description
  7. Dar click en boton Save
  8. Guardar cambios
  9. Ingresar dato aleatorio en campo Description
  10. Dar click en boton Save
* *Tercer escenario (Editar name de tag)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Tags"
  3. Seleccionar New tag
  4. Ingresar dato aleatorio en campo Name
  5. Ingresar dato aleatorio en campo Slug
  6. Ingresar dato aleatorio en campo Description
  7. Dar click en boton Save
  8. Guardar cambios
  9. Ingresar dato aleatorio en campo Name
  10. Dar click en boton Save
* *Cuarto escenario (Editar slug de tag)*
  ------------------
  1. Realizar el login como administrador
  2. En la dashboard seleccionar la pestaña "Tags"
  3. Seleccionar New tag
  4. Ingresar dato aleatorio en campo Name
  5. Ingresar dato aleatorio en campo Slug
  6. Ingresar dato aleatorio en campo Description
  7. Dar click en boton Save
  8. Guardar cambios
  9. Ingresar dato aleatorio en campo Slug
  10. Dar click en boton Save
