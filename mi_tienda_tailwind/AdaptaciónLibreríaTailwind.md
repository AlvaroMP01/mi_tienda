# Práctica: Adaptación de "Mi Librería" a Tailwind CSS (Mobile First)

## 1. Introducción y Objetivo
El objetivo de esta práctica es refactorizar el proyecto anterior "Mi Librería" utilizando el framework de utilidades **Tailwind CSS**. 

En esta ocasión, el desarrollo debe seguir estrictamente la metodología **Mobile First**: diseñarás primero la experiencia para dispositivos móviles y aplicarás los cambios para pantallas grandes mediante los prefijos de Tailwind (`md:`, `lg:`, etc.).

---

## 2. Requisitos Técnicos Obligatorios

### Estructura y Semántica (HTML5)
Es obligatorio el uso de etiquetas descriptivas para mejorar la accesibilidad y el SEO:
* `<header>` y `<footer>` para las secciones extremas.
* `<nav>` para los menús de navegación.
* `<main>` para envolver el contenido principal de cada página.
* `<section>` y `<article>` para organizar los bloques de contenido.
* `<aside>` para la barra lateral de categorías.

### Implementación de Estilos con Tailwind
* **Google Fonts:** Configura al menos dos familias tipográficas (ej. una para titulares y otra para el cuerpo).
* **Acabado Profesional:** Uso de utilidades para márgenes (`m-`), rellenos (`p-`), bordes, esquinas redondeadas (`rounded`), fondos y sombras (`shadow`).
* **Imágenes:** Deben ser libres de derechos, de alta calidad y con dimensiones consistentes.
* **Código Limpio:** Minimiza el uso de CSS personalizado (procura usar solo Tailwind). Comenta el HTML para delimitar las secciones principales.

---

## 3. Especificaciones de la Interfaz Común. (En desktop)
Los siguientes elementos deben ser consistentes en todas las páginas:
#### Header y Navegación en filas diferentes

### A. Cabecera (Header)
* **Contenido:** Nombre de la empresa y Logotipo.
* **Disposición:** Ambos elementos deben aparecer centrados y alineados horizontalmente. 

### B. Barra de Navegación (Nav)
* **Lado izquierdo:** Un buscador funcional (formulario con input).
* **Lado derecho:** Lista desordenada (`ul`) con: *Inicio, Tienda Online y Registro*.
* **Alineación:** Contenido centrado verticalmente. 

### C. Pie de Página (Footer)
* **Estructura:** Tres columnas de igual ancho (usando Grid o Flexbox).
* **Columna 1:** Enlaces de interés.
* **Columna 2:** Copyright del sitio.
* **Columna 3:** Iconos o enlaces a redes sociales.

---

## 4. Especificaciones de las Zonas de Contenido (En desktop)

### Página Principal (`index.html`)
Debe presentar tres secciones diferenciadas:
1.  **Zona de Presentación:** Introducción a la marca y propuesta de valor (Hero section).
2.  **Sección de Novedades:** Bloques con libros destacados o merchandising.
3.  **Buscador de Tiendas:** Sección para localizar puntos de venta físicos.

### Página de Productos (`tienda.html`)
Estructura dividida en dos grandes bloques:
* **Categorías (25% ancho):** Menú lateral con géneros literarios.
* **Rejilla de Productos (75% ancho):** Grid de tarjetas de producto.

**Diseño de Tarjetas (Cards):**
* **Superior:** Nombre del producto y etiquetas/badges (ej. "Oferta").
* **Centro:** Imagen (todas con dimensiones idénticas).
* **Inferior:** Descripción breve y precio destacado.

---

## 5. Diseño Responsivo (Mobile First)

| Elemento | Móvil (Base) | Tablet  | Desktop  |
| :--- | :--- | :--- | :--- |
| **Logotipo** | Oculto (solo texto). | Visible (logo a la izq nombre de la empresa a la decha). | Visible (centrado junto al nombre de la empresa). |
| **Menú Nav** | Hamburguesa desplegable. | Buscador bajo el menú. | Horizontal completo. |
| **Secciones** | Una debajo de otra. | Adaptación fluida. | Disposición en grid/columnas. |
| **Tarjetas** | 1 columna. | 2-3 columnas. | 4 columnas. |
| **Footer** | 1 columna (centrado). | 3 columnas horizontales. | 3 columnas amplias. |

---

## 6. Entrega
* Crear un repositorio en github y entregar un documento .txt con su enlace.