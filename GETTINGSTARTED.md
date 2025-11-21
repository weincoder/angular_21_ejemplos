# Getting Started
En este documento explicaremos como puedes adecuar tu ambiente local.
## Herramientas que necesitas instalar

* Construido en las versiones:
    + Node : 25.2.1
    + Angular: 21.0.0

## Guía de instalación
Esta sección describe el paso a paso para levantar el ambiente local.
### Adecuar el ambiente local
Cada carpeta es una clase del curso. Para ejecutar cada ejemplo recuerde descargar dependencias
```sh
    npm i
```
luego ejecutar

```sh
    ng s
```
### Configurar el estándar de commits

Todo desarrollo debe seguir el template de commits:

```bash
# Este es el estandar de commit recuerda descomentar las categorías en las que aplique

# feat 🆕:
# fix 🔨:
# chore 🧨:
# docs 📓:
# test 🧪:
# style 🎨:
# refactor 🏗:
# perf 🛠:
# build 🧱:
# ci ⚙️:
# revert ⚠️:
# Componentes que se afectaron:
```

Se debe documentar el comando con el que se utilizar para habilitar este template, a saber:

```bash
git config commit.template .gitmessage.conf
```

Recuerda que una vez hecho esto no debe utilizar el git commit -m sino que **unicamente copiar git commit**. De esta forma te mostrar el editor, para agregar texto debes presionar la letra “i” de insertar, debes borrar el numeral  que implique tu cambio y describirlo luego presionar escape (esc) y “:wq” para guardar los cambio o “:qa!” para descartarlos.

## Autores del Documento
 - Daniel Herrera 21/11/2025 (weincoder)