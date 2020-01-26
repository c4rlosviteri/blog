---
title: Los 4 principios de la accesibilidad web
date: '2020-01-20T10:00:00.000Z'
description: 'La accesibilidad se refiere al diseño y desarrollo de sitios web, aplicaciones o servicios que pueden ser operados por personas con discapacidades. Abordar los problemas de accesibilidad mejora la experiencia no solo para ese grupo de personas sino para todos.'
---

![accessibility](./accessibility.jpeg)

La accesibilidad se refiere al diseño y desarrollo de sitios web, aplicaciones o servicios que pueden ser operados por personas con discapacidades. Abordar los problemas de accesibilidad mejora la experiencia no solo para ese grupo de personas sino para todos.

En el contexto del desarrollo web, la W3C tiene una compilación muy interesante de mejores prácticas y guías escrita por expertos llamada [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/). WCAG se basa en cuatro principios:

> Principio 1: Discernible - La información de los componentes de la interfaz de usuario deben ser presentados a los usuarios de formas discernibles.

Los usuarios deben ser capaces de procesar la información de tu aplicación sin ninguna barrera de acceso.

Esto significa que deberías proveer alternativas para personas que tengan sentidos más debiles. Por ejemplo:

* _Subtítulos o traducciones en lenguage de señas en videos para las personas sordas_
* _Soportar lectores de pantalla para quienes tienen ceguera_
* _Incluir la capacidad de cambiar el tamaño del texto o contraste para aquellas personas que tienen problemas de visión_
* _Mostrar estados de interactividad como_ `hover` _o_ `active` _para asegurarse que las personas tienen una idea lo que esta pasando en la interfaz_

> Principio 2: Operable  - Los componetes de la interfaz de usuario y la navegación deben ser operable.

La operatividad significa que un usuario puede utilizar con éxito la interfaz con una variedad de herramientas, como un mouse, una pantalla táctil o un teclado. Para asegurarse de que funciona como se espera, se recomienda:

* _Tener tamaños de targets (botones, links) lo suficientemente grandes_
* _Coindicir el orden del focus con los componentes visibles en pantalla_

También es importante hacer aplicaciones indulgentes, en otras palabras _tu interfaz debería ofrecer opciones como instrucciones, advertencias y cancelaciones_.

> Principio 3: Entendible  -  La información y el funcionamiento de la interfaz de usuario debe ser entendible.

El _lenguage_ de la interfaz debería ser fácil de comprender. La consistencia entre todos los componentes asegura que el usuario no se llebe una sorpresa.

También es importando tener un buen manejo de errores y feedback. Las etiquetas deben ser explícitas y adecuadas para proveer servir como guía en toda la aplicación.

> Principio 4: Robusto  - El contenido debe ser lo suficientemente robusto como para que pueda ser interpretado de manera confiable por una amplia variedad de user agents, incluidas las tecnologías de asistencia.

Los usuarios eligen su propio stack de tecnologías. Tu aplicación debería ser lo suficientemente robusta para funcionar en la mayoría de navegadores y sistemas operativos con límites razonables.

Una de las mejores maneras de cumplir con el principio de robustez es seguir estándares y convenciones en el desarrollo de la aplicación en todo el equipo de desarrollo.
