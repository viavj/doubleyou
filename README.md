1. El proceso de autenticacion no es exactamente segun los requisitos, tenia q usar o json.server o algo mas real, eligi Firebase. Espero q no os moleste.

2. Puedern ver el DB completo aqui https://testproj-10e4a.firebaseio.com/doubleyou.json


<b>Prueba técnica Frontend Senior</b>


El objetivo es crear un menú de navegación y un sistema de login ( capturas/01.jpg ).

El site tiene 4 secciones, pero el cliente quiere que una de ellas tenga mayor visibilidad. Por eso, se ha separado del resto por el módulo de login. De todos modos, es una sección como las demás.

El sistema de login es, a su vez, un sistema de alta. Cuando se detecta que el e-mail introducido no existe en el sistema, el servidor devuelve un código 101 y la URL de la acción de alta. La página tiene que volver a solicitar los datos y enviarlos a la URL recibida ( capturas/02.jpg ). Si el alta ha sido correcta, el servidor devuelve un status = OK y se muestra un mensaje de bienvenida al usuario ( capturas/03.jpg ).

Si se quiere añadir algún tipo de validación previa al envío y cómo mostrar los posibles errores queda a elección del programador.

Para simular la llamada a servidor existen dos archivos .txt con la información en formato JSON, ambos en la carpeta server/ :

login.txt : Simula la respuesta de servidor para un usuario no dado de alta.
join.txt : Simula la respuesta de servidor para un alta correcta.
El menú de navegación tiene el siguiente comportamiento:

Al hacer mouseover sobre él, cambia el texto y despliega una selección de contenidos ( capturas/04.jpg ).
Al final de la lista, aparece un enlace more. Al pulsar en él, se hace una llamada a servidor para obtener los contenidos completos. Esta lista de contenidos reemplaza a la anterior y el enlace more pasa a decir less ( capturas/05.jpg ).
Al pulsar en el enlace less, se vuelve a mostrar la lista de contenidos seleccionados. El enlace vuelve a decir more ( capturas/04.jpg ).
Al pulsar sobre cualquiera de los enlaces de la lista, se tiene que recuperar su URL y emplearla para acceder al contenido, que se devuelve en notación JSON ( capturas/06.jpg ).
Para simular la respuesta de servidor a las distintas peticiones, existe (de nuevo, en la carpeta server/) un fichero dishes.txt que devuelve el listado de contenidos completo y una serie de ficheros que corresponden a las URLs de los contenidos.
