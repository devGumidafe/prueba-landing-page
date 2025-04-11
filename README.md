# Prueba Landing

## Descripción del Proyecto

Se trata de maquetar una landing diseñada en Figma usando la librería de Bootstrap 5. Esta landing tiene que estar integrada en un proyecto de Vue que, a su vez, tiene que estar en un repo de Github. Tendrá que ser responsive y adaptarse a cualquier tamaño de pantalla.

## Desarrollo de la Solución

En este proyecto se ha implementado:

- Uso de Bootstrap 5 para la estructura y componentes
- Integración completa con Vue 3
- Diseño totalmente responsive que se adapta a dispositivos móviles, tabletas y ordenadores
- Versionado en GitHub

Se ha creado un componente para cada sección de la landing, importado en el componente principal app.vue.

- Header: Componente que contiene el logo y el menú de navegación que se adapta al tamaño de la pantalla, mostrando el menú en un hamburguesa en dispositivos móviles.

- VideoSection: Componente que contiene la seccion "¿Qué es?" con una simulacion de un video y un botón para solicitar formación.

- LearnSection: Componente que contiene la seccion "¿Qué vas a aprender?" con el componente LearnCard.vue que se recorre con un v-for para mostrar los cards con el contenido de la seccion.

- FormSection: Componente que contiene la seccion "Solicita formación gratuita" con un formulario donde almacena un los registros en una variable ref, el cual se ha implementado validaciones y creado un composable para gestionar el estado del formulario.

- TableRegisters: Componente que contiene una tabla de registros que muestra los registros almacenados en el formulario de la seccion "Solicita formación gratuita", el cual se implementado un scroll horizontal para que se pueda ver el contenido de la tabla en cualquier dispositivo.

- Footer: Componente que contiene el footer de la landing.
