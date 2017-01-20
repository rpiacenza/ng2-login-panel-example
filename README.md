#Ejemplo de PANEL/LOGIN en ANGULAR 2
*(by RMP)*

##Para Edu!

la url de la api `http://api.panel.org/authenticate` debería devolver un json similar a ...

    `{"profile": {"name": "Rodrigo Piacenza", "email": "rpiacenza@w3sys.com.ar"}, "token": "654321598"}`

![imagen](ng2-login-panel-example/anim.gif)

Observaciones :
- El archivo `app-routing.module.ts` contiene las entradas del router tanto del login como del panel
- Verás que todos los accesos (excepto el login) sólo se aceptarán si el *AuthGuard* lo autoriza.
- Podrás ver la lógica del guard en `guards/auth.guard.ts`. Verás que sólo se autoriza el acceso si existe la entrada *currentUser* en localStorage. En caso contrario redirige al login.
- El componente login lo entrarás en `panel/login/login.component`. Es un formulario sencillo que realiza el login consumiendo el servicio *authenticationService*
- En `services/authentication.service.ts` encontrarás la magia ! Se consulta a la api y almacena el profile y token en a entrada *currentUser* del localStorage!!
- Fijate que en el servicio *authenticationService* ya contiene el token y como es injectable, podrás recuperarlo en cualquier momento para hacer http requests via JWT!

Espero que te sirva !!
Cualquier duda a tu disposición !
