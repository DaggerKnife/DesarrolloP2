<hr>

# Proyecto ChileAutos P2
Para el siguiente proyecto hemos utilizado los siguientes lenguajes:
* Java Script
* Css
* HTML
* SQL
* Python ( Django - Framework )

<br>
<hr>


# Descripción de Proyecto 
El proyecto tiene como finalidad poder lograr realizar el registro y autenticación de usuarios y que este pueda realizar la insercion de productos/Vehiculos, edicion y eliminacion de estos mismos; asi tambien se ncesita que estos posean su imagen respectiva con la informacion detallada.

<br> 

### APRENDIZAJES ESPERADOS

 -	Crear aplicaciones por el lado del servidor para cumplir con las necesidades del negocio.
-	Usar herramientas de desarrollo colaborativo para el desarrollo de aplicaciones en equipos de trabajo.
-	Usar herramientas de bases de datos para almacenar y recuperar información de su aplicación web móvil.
-	Generar mecanismos de seguridad para proteger los datos privados que los clientes provean a la aplicación.
-	 Unir el front-end con el back-end 
<br><br>
<hr>

# Descarga de proyecto
Desde consola o terminal, ejecutar el comando git:


####  Consola:
```git
git clone https://github.com/DaggerKnife/DesarrolloP2.git
```
<br>
<hr>


## Creación de Base De Datos

<hr>
Para realizar la instanciación de la base de datos, debemos abrir nuestro gestor de base de datos en este caso MySql, identificarnos con nuestras credenciales y crear la base de datos con el Código:

#### MySQL:
```mysql
create database p2django;
```
#### Imagen de Referencia:
<img src='Read_img/Data.JPG'>

<br><br>
<hr>



## Modificacion setting del proyecto
<hr>
<br>
Debemos cambiar los datos, con los cuales el proyecto accedera a la base de datos, para esto debemos realizar los cambios de los parametros que se muestran a continuacion:
#### Imagen de Referencia:
<img src='Read_img/setting.JPG'>

<br><br>

<hr>

## Migración de Base De Datos:
Para realizar la migracion de la base de datos, con el modelo asociado al proyecto, debemos abrir la carpeta de nuestro proyecto en Visual Studio.
<hr>
<br>

#### Imagen de Referencia:
<img src='Read_img/Folder.JPG'>
<br>
<br>


 Apertura de consola: En la barra de menus, acceder a opcion Terminal y selecionar New Terminal


#### Imagen de Referencia:
<img src='Read_img/Terminal.JPG'>
<br>
<br>
<hr>

# Instacion de librerias y paquetes para el correcto funcionamiento:

<br>
Dentro de la ventana de terminal debemos realizar la instalacion de los siguientes paquetes/librerias:
<br>


####  Terminal

```python
pip install mysqlclient
```
```python
pip install  django-materializecss-form
```
```python
pip install pillow
```

#### Imagen de Referencia:
<img src='Read_img/Instalaciones.JPG'>
<br>


<hr>

# Inicio de Migración

Dentro del terminal deberemos ingresar a la carpeta p2Django con el comando:
<br><br>

```batch
cd p2Django
```
#### Imagen de Referencia:
<img src='Read_img/Cd.JPG'>
<br>
<br>Ya posicionados en la carpeta del proyecto debemos realizar la migracion del modelo a la base de datos, para esto inicializaremos el proceso con los siguientes comandos:<br><br>

```python
python manage.py makemigrations
```

#### Imagen de Referencia:
<img src='Read_img/Migrations.JPG'>
<br><br>

```python
python manage.py migrate
```

#### Imagen de Referencia:
<img src='Read_img/Migrate.JPG'>
<br>
<br>
<hr>

## Iniciacion del Proyecto:
<hr>
Para realizar el arranque del proyecto debemos desde el terminal iniciar el servidor:

```python
python manage.py runserver
```
#### Imagen de Referencia:
<img src='Read_img/Runserver.JPG'>
<br>
<br>
<br>

<hr>

## Poblado Base de datos:
<hr>
Existen tablas dentro de la base de datos que posee informacion predeterminada, las cuales seran selecionadas por el ususario al momento de realizar un ingreso o registro, para ello desde la consola de mySQL, deberemos poblar con las siguientes Querys:
<br><br>

```SQL
insert into perfil_genero (detalle) values ('Femenino');
insert into perfil_genero (detalle) values ('Masculino');
insert into perfil_genero (detalle) values ('Indefinido');
insert into perfil_genero (detalle) values ('Prefiero no decirlo');
```
#### Imagen de Referencia:
<img src='Read_img/Insert.JPG'>
<br>

