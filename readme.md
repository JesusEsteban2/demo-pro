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

npm run lint -v  
10.9.0
npm -v  
10.9.0

npm run lint -- -v

> vite-project@0.0.0 lint
> eslint -v
> v9.18.0

## NVM (Dos versiones Mac y Windows)

Gestor de versiones de node. Descargar e instalar en el equipo.

## Despliegue

Primero probar en local tanto dev como preview.

Se despliega la carpeta dis, aunque lo normal es que se utilice un despliegue/integración automatizado (continuo) a partir del repositorio de desarrollo.
CI/CD - Integración continua y despliegue continuo.

Sitios gratis para despliegue continuo:

-   Vercel(https://vercel.com/)
-   Netlify (https://www.netlify.com/)
-   AWS (https://aws.amazon.com/es/?nc2=h_lg)
