# Parcial-1-Web
Para la primera parte cree una carpeta para guardar los componentes 
Use 3 componentes principales: 
Login : En este componente se manejan las 2 vistas del login,
el cambio del renderizado se hace mediante una variable de estado que cambia su valor dependiendo si las validaciones sobre los inputs para el correo y la contraseña son correctos,
En el primer boton si se valida correctamente el correo se cambia la variable de estado y se renderiza la segunda parte del login, en el segundo boton, si se pasan las validaciones 
de la contraseña se redirige al componente de la pagina principal, en este caso el componente "Carro", lo hice utilizando "useNavigate" con las rutas que defini dentro del archivo "App.js"

En el componente de Carro hago el fetch de la info desde el repo y la renderizo en cards y en el componente Detail vuelvo a hacer un fetch y renderizo la informacion detallada del carro unicamente 
si el nombre de la parte del carro que se paso por medio del path como parametro coincide con alguna
