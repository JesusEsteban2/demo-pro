# Vite

## Creación de proyecto

npm create vite@latest

npm instal (cargar los modules necesarios)

crear readme.md
crear .editorconfig
iniciar git git init
hacer Initial commit

## Comandos de transpilación

-npm run dev
-npm run build
-npm run preview (Tiene que estar creada la distribución)

## CSS

Los archivos CSS no tiene scope. Diferente a astro.

Es recomendable crear un solo Css.

en cada archivo se pude importar css. En el build se unirán todos en un archivo.

import './component.css' dentro de un archivo component.ts aplicará a todo el documento, utilizar anidamiento como si tuviéramos un solo css (no tiene scope)

## Eslint (Dos versiones Mac y Windows)

Gestor de versiones de node.

## instalar vitest

sudo npm install -D vitest

## Separador --

En node, el separador -- indica que el parámetro (a continuación van para el elemento ejecutado y no para node)

ejem

jesusesteban@MBP-de-Jesus demo-pro % npm run lint -v  
10.9.0

jesusesteban@MBP-de-Jesus demo-pro % npm -v  
10.9.0

jesusesteban@MBP-de-Jesus demo-pro % npm run lint -- -v

> vite-project@0.0.0 lint
> eslint -v
> v9.18.0

## NVM (Dos versiones Mac y Windows)

Gestor de versiones de node. Descargar e instalar en el equipo.
