# Proyecto ChileAutos P2

Para el siguiente proyecto hemos utilizado los siguientes lenguajes:
* Java Script
* Css
* HTML
* SQL
* Python ( Django - Framework )

<br>
<hr>
<br>

# Descripción de Proyecto 

<br>
<hr>
<br>

## Descarga de proyecto:
Desde consola o terminal, ejecutar el comando git:
####  Consola
```git
git clone https://github.com/DaggerKnife/DesarrolloP2.git
```
<br>
<hr>
<br>

## Creación de Base De Datos

Para realizar la instanciación de la base de datos, debemos abrir nuestro gestor de base de datos en este caso MySql, identificarnos con nuestras credenciales y crear la base de datos con el Código:

#### MySQL
```mysql
create database p2django;
```
#### Imagen de Referencia:
<img src='Read_img/Data.JPG'>

<br>
<hr>
<br>

## Migración de Base De Datos:
Para realizar la migracion de la base de datos, con el modelo asociado al proyecto, debemos abrir la carpeta de nuestro proyecto en Visual Studio.

#### Imagen de Referencia:
<img src='Read_img/Folder.JPG'>
<br>
<br>
<hr>

### Apertura de consola: En la barra de menus, acceder a opcion Terminal y selecionar New Terminal
<hr>

#### Imagen de Referencia:
<img src='Read_img/Terminal.JPG'>
<br>
<br>
<hr>

### Instacion de librerias y paquetes para el correcto funcionamiento:
<hr>
Dentro de la ventana de terminal debemos realizar la instalacion de los siguientes paquetes/librerias:
<br><br>

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

### Inicio de Migración
<hr>
Dentro del terminal deberemos ingresar a la carpeta p2Django con el comando:

```batch
cd p2Django
```
#### Imagen de Referencia:
<img src='Read_img/Cd.JPG'>
<br>
<br>Ya posicionados en la carpeta del proyecto debemos realizar la migracion del modelo a la base de datos, para esto inicializaremos el proceso con los siguientes comandos:<br>

```python
python manage.py makemigrations
```

#### Imagen de Referencia:
<img src='Read_img/Migrations.JPG'>
<br>

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

```SQL
insert into perfil_genero (detalle) values ('Femenino');
insert into perfil_genero (detalle) values ('Masculino');
insert into perfil_genero (detalle) values ('Indefinido');
insert into perfil_genero (detalle) values ('Prefiero no decirlo');
```
#### Imagen de Referencia:
<img src='Read_img/Insert.JPG'>
<br>

