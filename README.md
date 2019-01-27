1. El proceso de autenticacion no es exactamente segun los requisitos, tenia q usar o json.server o algo mas real, eligi Firebase. Espero q no os moleste.

2. Puedern ver el DB completo aqui https://testproj-10e4a.firebaseio.com/doubleyou.json


<b>Prueba técnica Frontend Senior</b>
        
<p>El objetivo es crear un menú de navegación y un sistema de login ( <code>capturas/01.jpg</code> ).</p>
<p>El site tiene 4 secciones, pero el cliente quiere que una de ellas tenga mayor visibilidad. Por eso, se ha separado del resto por el módulo de login. De todos modos, es una sección como las demás.</p>
<p>El sistema de login es, a su vez, un sistema de alta. Cuando se detecta que el e-mail introducido no existe en el sistema, el servidor devuelve un código 101 y la URL de la acción de alta. La página tiene que volver a solicitar los datos y enviarlos a la URL recibida ( <code>capturas/02.jpg</code> ). Si el alta ha sido correcta, el servidor devuelve un <code>status = OK</code> y se muestra un mensaje de bienvenida al usuario ( <code>capturas/03.jpg</code> ).</p>
<p>Si se quiere añadir algún tipo de validación previa al envío y cómo mostrar los posibles errores queda a elección del programador.</p>
<p>Para simular la llamada a servidor existen dos archivos .txt con la información en formato JSON, ambos en la carpeta <code>server/</code> :</p>
<ul>
<li><code>login.txt</code> : Simula la respuesta de servidor para un usuario no dado de alta.</li>
<li><code>join.txt</code> : Simula la respuesta de servidor para un alta correcta.</li>
</ul>
<p>El menú de navegación tiene el siguiente comportamiento:</p>
<ul>
<li>Al hacer mouseover sobre él, cambia el texto y despliega una selección de contenidos ( <code>capturas/04.jpg</code> ).</li>
<li>Al final de la lista, aparece un enlace <strong>more</strong>. Al pulsar en él, se hace una llamada a servidor para obtener los contenidos completos. Esta lista de contenidos reemplaza a la anterior y el enlace <strong>more</strong> pasa a decir <strong>less</strong> ( <code>capturas/05.jpg</code> ).</li>
<li>Al pulsar en el enlace <strong>less</strong>, se vuelve a mostrar la lista de contenidos seleccionados. El enlace vuelve a decir <strong>more</strong> ( <code>capturas/04.jpg</code> ).</li>
<li>Al pulsar sobre cualquiera de los enlaces de la lista, se tiene que recuperar su URL y emplearla para acceder al contenido, que se devuelve en notación JSON ( <code>capturas/06.jpg</code> ). </li>
</ul>
<p>Para simular la respuesta de servidor a las distintas peticiones, existe (de nuevo, en la carpeta <code>server/</code>) un fichero <code>dishes.txt</code> que devuelve el listado de contenidos completo y una serie de ficheros que corresponden a las URLs de los contenidos.</p>

