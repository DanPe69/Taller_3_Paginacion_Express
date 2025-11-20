# Taller 3 – API con Paginación (Express + MySQL)

Este proyecto crea una API en Node.js con paginación de resultados, usando Express y MySQL.

## Tecnologías utilizadas

Node.js

Express

MySQL

mysql2/promise

## Contenido del proyecto

index.js — API REST con paginación.

school.sql — Base de datos y tabla student.

## Cómo ejecutar el proyecto

Instala dependencias:

npm install


Importa school.sql en MySQL:

CREATE DATABASE school;
USE school;
... (tabla student)


Corre el servidor:

node index.js

## Endpoint de paginación
GET /students

Parámetros:

Parámetro	Descripción	Default
page	Número de página	1
pageSize	Registros por página	5

Ejemplo:

GET http://localhost:3000/students?page=2&pageSize=5

## Respuesta:
{
  current_page: 2,
  page_size: 5,
  total_records: 12,
  total_pages: 3,
  data: [...]
}
