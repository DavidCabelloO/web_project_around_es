# Proyecto de sprint 8: Alrededor de los EE.UU., parte 3 — Clases de TypeScript y refactorización POO

**Continúa utilizando el mismo repositorio de GitHub** `web_project_around`

Tu código en el proyecto "**Alrededor de los EE.UU.**" sigue creciendo y este es el momento perfecto para organizar las cosas adecuadamente y dar un paso al siguiente nivel.

El proyecto de este sprint se centrará en la refactorización. Utilizarás lo que has aprendido sobre la Programación Orientada a Objetos (POO) y la integración de TypeScript para reescribir y tipar porciones particulares del código, haciéndolo más seguro y predecible.

Toda la funcionalidad visual ya está lista, así que empecemos a refactorizar el código con una arquitectura sólida.

## Configuración de TypeScript y estructura de archivos

Antes de empezar a escribir clases, necesitas reestructurar tu proyecto y preparar el entorno para una migración gradual:

1. Reestructura tus carpetas: Crea una carpeta `public` y mueve ahí tu archivo `index.html` y todas las carpetas con los archivos CSS, imágenes y fuentes. También crea una carpeta `src` (para tu código fuente) y mueve ahí los scripts JS existentes `index.js` y `validate.js`. Puedes mantener la extensión `.js` por ahora como punto de partida.
2. Inicializa TypeScript en tu proyecto creando el archivo `tsconfig.json` con los ajustes de configuración. En particular, asegúrate de añadir las configuraciones `"rootDir": "./src"` y `"outDir": "./public"`, para que TypeScript tome el código fuente de la carpeta `src` y lo compile en la carpeta `public`. Para mayor flexibilidad, puedes añadir `"allowJs": true`. Esto permitirá que el compilador procese tus archivos `.js` actuales junto con los nuevos archivos `.ts` sin romper el funcionamiento del proyecto. De esta forma, podrás ir renombrando tus archivos a `.ts` y refactorizándolos gradualmente.
3. Asegúrate de que todas las rutas a los archivos estén configuradas correctamente después de la reestructuración de las carpetas: el archivo `index.html` (que ahora está dentro de la carpeta `public`) debe estar vinculado al archivo `index.js`, el cual se crea dentro de esta misma carpeta después de compilar el código mediante el comando `tsc`.

💡

**Un apunte sobre el flujo de trabajo**

Tienes dos opciones para abordar el proyecto. Puedes ir integrando tus nuevas clases en tu archivo `index.js` antiguo paso a paso (limpiando las funciones viejas a medida que avanzas) para asegurarte de que el proyecto siga funcionando sin errores en cada etapa. Si eliges este camino, solo tendrás que convertir este archivo a TypeScript al final, cuando todo ya esté funcionando perfectamente. O, si lo prefieres, puedes crear todas las clases primero y luego refactorizar todo tu archivo principal a `index.ts` de una sola vez. ¡La decisión es tuya!

## Creación de la clase **`FormValidator`**

Hasta ahora, la lógica de validación se encontraba en funciones globales dentro del archivo `validate.js` y las clases CSS estaban codificadas de forma rígida (hardcoded) directamente en el código. Siguiendo los principios de la POO, las clases deben ser universales y reutilizables. Por lo tanto, ahora tu objetivo es encapsular esa funcionalidad en la nueva clase `FormValidator` y pasarle las clases CSS a través de un objeto de configuración.

### **Objeto de configuración**

Crea y exporta el objeto de configuración `defaultFormConfig` en un archivo separado (por ejemplo, `utils/constants.ts`), donde guardarás las constantes principales de tu proyecto. Este objeto contendrá los selectores y las clases del formulario, y debe incluir propiedades para:

- El selector de los campos de entrada (inputs).
- El selector del botón de envío (submit).
- La clase CSS que desactiva el botón.
- La clase CSS que añade el estilo de error al input.
- La clase CSS que hace visible el mensaje de error de texto.

### **Clase `FormValidator`**

Crea la clase `FormValidator` en su propio archivo con el mismo nombre. Esta clase establece la configuración para validar los campos del formulario. Utiliza TypeScript para asegurar que los elementos del DOM se manejan correctamente:

- Tu constructor tiene dos parámetros. El primer parámetro es un objeto de configuración, y el segundo toma un elemento del formulario (`HTMLFormElement`) a validar.
- Tiene métodos privados para procesar el formulario, que incluyen: comprobar la validez del campo, cambiar el estado del botón Submit y agregar todos los controladores necesarios. Añade los tipos correspondientes a los eventos (por ejemplo, `Event` o `InputEvent`).
- Tiene un método público `enableValidation()`, que activa la validación del formulario.
- Tiene un método público `resetValidation()`, que limpia los errores visuales de los inputs y actualiza el estado del botón de envío. Utilizarás este método para reiniciar el estado del formulario cada vez que el usuario abra un modal.

## Creación de las clases `Card` y `Section`

Ahora vamos a refactorizar la forma en que se crean y se muestran las tarjetas en la pantalla. Crearemos dos clases que trabajarán juntas: `Card` (para construir la tarjeta individual) y `Section` (para renderizar la lista completa).

### **Clase `Card`**

Crea la clase `Card` en su propio archivo con el mismo nombre. Esta clase produce una tarjeta con texto y un enlace a la imagen:

- Toma los datos de la tarjeta (define una interfaz para estos datos) y un selector de elemento de plantilla como parámetros en el constructor.
- Añade un tercer parámetro al constructor: la función `handleCardClick()`. Cuando el usuario haga clic en la tarjeta, esta función abrirá el popup con una imagen (acoplamiento débil).
- Dispone de métodos privados tipados para trabajar con el marcado y añadir detectores de eventos.
- Tiene un método público que devuelve un elemento card (`HTMLElement`) completamente funcional.

### Clase `Section`

Crea la clase `Section` en su propio archivo con el mismo nombre para presentar una lista de elementos en una página de acuerdo con los siguientes requisitos:

- Contiene un objeto con dos propiedades (`items` y `renderer`) como el primer parámetro del constructor. La propiedad `items` funciona como un array de datos (define su tipo correctamente, por ejemplo, `any[]` o usando genéricos), que debes añadir a una página. La propiedad `renderer` es la función responsable de crear y renderizar los datos.
- El segundo parámetro debe ser un selector de clase CSS donde vas a agregar los elementos.
- Almacena un método público que renderiza todos los elementos en la página. La función `renderer()` renderizará cada elemento.
- Almacena un método público llamado `addItem()` que toma un elemento del DOM (`HTMLElement`) y lo agrega al contenedor.

La clase `Section` no tiene marcado. Recibe el marcado a través de la función de callback y lo inserta en el contenedor.

## Creación de las clases `Popup`, `PopupWithImage` y `PopupWithForm`

Crea la jerarquía de clases para las ventanas modales aplicando herencia (cada clase debe estar en su propio archivo con el mismo nombre):

### **Clase `Popup`**

- El constructor tiene un solo parámetro, que es el selector del popup.
- Almacena los métodos públicos `open()` y `close()`, que abrirán y cerrarán el popup.
- Almacena un método privado llamado `handleEscClose()`, que almacena la lógica para cerrar el popup al pulsar la tecla Esc (tipa el evento como `KeyboardEvent`).
- Almacena un método público llamado `setEventListeners()`, que agrega un detector de eventos de click al icono para cerrar el popup y al área sombreada.

### **Clase `PopupWithImage`**

- Crea `PopupWithImage` como una clase hija de `Popup`.
- Sobrescribe el método padre `open()`. En este método, debes añadir una imagen al popup y el correspondiente atributo `src` junto con una leyenda.

### **Clase `PopupWithForm`**

- Crea `PopupWithForm` como una clase hija de `Popup`.
- Lleva un callback del envío del formulario al constructor (crea un tipo para esta función), así como el selector popup.
- Almacena un método privado llamado `getInputValues()`, que recopila datos de todos los campos de entrada y devuelve un objeto tipado.
- Sobrescribe el método `setEventListeners()` para agregar al formulario un controlador de eventos `submit` (`SubmitEvent`).
- Sobrescribe el método padre `close()` para reiniciar el formulario una vez se cierre el popup.

## Creación de la clase `UserInfo`

La clase `UserInfo` (ubicada en su propio archivo con el mismo nombre) es responsable de presentar información sobre el usuario:

- Lleva al constructor un objeto con los selectores de dos elementos (nombre del usuario y trabajo).
- Almacena un método público llamado `getUserInfo()`, que devuelve un objeto tipado con información sobre el usuario.
- Almacena un método público llamado setUserInfo(), que toma los nuevos datos del usuario y los agrega en la página.

## Requisitos del código

- Añade a tu proyecto las clases `FormValidator`, `Card`, `Section`, `Popup`, `PopupWithImage`, `PopupWithForm` y `UserInfo`. Cada clase debe realizar una tarea específica (encapsulamiento).
- Todas las clases deben almacenarse en archivos `.ts` separados. Asegúrate de tener los siguientes scripts: `FormValidator.ts`, `Card.ts`, `Section.ts`, `Popup.ts`, `PopupWithForm.ts`, `PopupWithImage.ts` y `UserInfo.ts`.
- Las clases deben ser exportadas desde sus archivos correspondientes, y luego tendrás que importarlas e implementarlas dentro de `index.ts`.
- El archivo `index.ts` debe contener solamente el código para crear instancias de clases y agregar detectores de eventos específicos.
- Actualiza el archivo `README.md` de tu proyecto. Asegúrate de incluir el nombre del proyecto, una breve descripción de su funcionalidad y las tecnologías o técnicas que has utilizado (como HTML, CSS, POO y TypeScript).
