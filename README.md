1. Espero aber encontrado todas als trampas !:)
2. El proceso de autenticacion no es exactamente como esta escrito es el 'ReadMe', tenia q usar o json.server o algo mas real, eligi Firebase. Espero q no os moleste.
3. La animacion en navbar - seccion 2 no es ideal. Yo usaria click en ves de hover, pq la primera ves cuando expandes, el data aun no esta cargada y react intenta cerrar lo mientras esta tratando con axios y rendering. Y cada ves despues de pulsar 'less' se hace pequeno => el cursor ya no hace hover => se cierra. No es un simple dropdown con contenido fijo y creo que click encajaria mejor.
4.  Como las imagenes tienen la mimsa URL, el API no los refresca y he anadido el campo 'name' por encima de 'title' asi e ve quq se actualisa o no cuando 'navegas' en la lista de los platos.
5. Puedern ver el DB completo aqui https://testproj-10e4a.firebaseio.com/doubleyou.json