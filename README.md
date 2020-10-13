# **Random Recipes Online**

## [ENG]

I made this project as a way to practice Javascript and APIs.

## General Idea

---

I wanted to make a functional site from scratch and I tought this would be fun and semi-useful.

## How it works

---

When you first enter the page, a random recipe will load. After that, you can choose either from the categories provided (Vegetarian, Beef, Chicken, Seafood or Dessert) or type and select an ingredient.

> For the moment is recommended to type a few letters and select from the list. As misstypes will shield an error.

The new recipe will be randomly selected from the public API: [TheMealDB](http://themealdb.com/api.php).

## Troubles along the way

---

**Problem:** Given the way the API is formatted; I couldn't simply get a meal based on the category selected and display it.

**What I did:** Get all the recipes in the choosen category and use a randomizer to select one. Then using the name obtain all the ingredients, instructions and images needed.

---

**Problem:** Create a list with all the ingredients and measures needed.

**What I did:** I had to look the entire object, choose the correct keys, verify that they weren't empty and finally push all into a single list.

---

## [ESP]

Realicé este proyecto para practicar mis conocimientos de Javascript y APIs.

## Idea principal

---

Mi objetivo era crear un sitio funcional desde cero y este concepto me pareció divertido y con cierta utilidad.

## Cómo funciona

---

Una receta al azar aparecerá apenas cargue la página. Luego, puede elegir su receta ya sea usando una de las categorias provistas (Vegetariana, Carne, Pollo, Frutos del mar o Postres) o escribir y seleccionar el ingrediente deseado.

> De momento se recomienda escribir un par de letras y seleccionar su ingrediente de la lista. Errores ortográficos llevan a error.

Una nueva receta será elegida al azar de la API pública: [TheMealDB](http://themealdb.com/api.php).

## Problemas que surgieron

---

**Problema:** Dado el formato de la API; no era posible simplemente conseguir el plato de la categoría seleccionada y mostrarlo.

**Qué hice:** Tomé todas las recetas de la categoría y seleccioné una con el uso de un randomizador. Luego, obtuve el resto de la información usando el nombre.

---

**Problema:** Crear una lista con todos los ingredientes y cantidades.

**Qué hice:** Revisé el objecto completo, seleccioné las keys correctas y verifiqué que no estuviesen vacías. Finalmente inserté todo en una única lista.