<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install o npm install
```
3. Tener Nest CLI instalado
```
npmm i -g @nestjs/cli
```
4.Clonar el archivo 
```.env.template``` y renombrarlo a ```.env```

5. Cambiar alas variables de entorno

6. Levantar la base de datos 
```
docker-compose up -d
```

7. Ejecutar la aplicación 
```yarn start:dev```

## Stack Usado
* Prostgres
* TypeORM
* Docker
* NodeJS
* Nest
* Tableplus