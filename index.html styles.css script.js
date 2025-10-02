<!--
Proyecto: Investigación sobre Recursividad — HTML interactivo listo para GitHub
Contenido: index.html + assets/styles.css + assets/script.js + README + LICENSE + .gitignore
Este documento es el archivo raíz (index.html) con la investigación integrada.
-->

<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Recursividad — Investigación</title>
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <header class="page-header">
    <div class="container">
      <h1>Recursividad en Ciencias de la Computación</h1>
      <p class="lead">Investigación breve con definiciones, características, complejidad, ejemplos y demos interactivos.</p>
      <nav class="nav">
        <a href="#introduccion">Introducción</a>
        <a href="#definicion">Definición</a>
        <a href="#procedimientos">Procedimientos y Aplicaciones</a>
        <a href="#caracteristicas">Características</a>
        <a href="#complejidad">Complejidad</a>
        <a href="#algoritmos">Algoritmos</a>
        <a href="#conclusion">Conclusión</a>
        <a href="#referencias">Referencias</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section id="introduccion" class="card">
      <h2>Portada / Introducción</h2>
      <p>La recursividad es una técnica fundamental en programación donde una función se define en términos de sí misma. En esta investigación breve examinamos su definición formal, procedimientos recursivos y aplicaciones, características, y la complejidad computacional que surge en algoritmos recursivos. Presentamos ejemplos clásicos: <em>factorial</em>, <em>Fibonacci</em>, <em>Torres de Hanoi</em> y <em>fractales</em>, con demos interactivos para comprender mejor el comportamiento recursivo.</p>
    </section>

    <section id="definicion" class="card">
      <h2>Definición de recursividad</h2>
      <p>En ciencias de la computación, <strong>recursividad</strong> es un método para resolver un problema donde la solución depende de soluciones para instancias más pequeñas del mismo problema. Una función recursiva incluye al menos:</p>
      <ul>
        <li>Un <strong>caso base</strong> (condición de parada).</li>
        <li>Una o más llamadas recursivas que avancen hacia el caso base.</li>
      </ul>
      <p>Ejemplo matemático: <code>n! = n * (n-1)!</code> con caso base <code>0! = 1</code>.</p>
    </section>

    <section id="procedimientos" class="card">
      <h2>Procedimientos recursivos y sus aplicaciones</h2>
      <p>Los procedimientos recursivos son útiles para problemas que presentan <em>auto-similitud</em> o que se pueden descomponer en subproblemas iguales: búsqueda en árboles, recorridos (DFS), algoritmos divide-and-conquer (merge sort, quicksort), generación de fractales, resolución de puzzles (Torres de Hanoi), y algoritmos en teoría de grafos.</p>
      <p>Aplicaciones típicas:</p>
      <ol>
        <li>Procesamiento de estructuras recursivas: árboles, listas enlazadas, expresiones matemáticas.</li>
        <li>Algoritmos de ordenamiento y búsqueda (divide-and-conquer).</li>
        <li>Modelado y generación de fractales.</li>
        <li>Problemas combinatorios y de backtracking (n‑reinas, Sudoku).</li>
      </ol>
    </section>

    <section id="caracteristicas" class="card">
      <h2>Características de la recursividad</h2>
      <ul>
        <li><strong>Autorreferencia:</strong> la función se invoca a sí misma.</li>
        <li><strong>Casos base:</strong> aseguran terminación.</li>
        <li><strong>Pila de llamadas:</strong> cada llamada crea un marco en la pila (stack) con sus variables locales.</li>
        <li><strong>Puede ser menos eficiente:</strong> debido al overhead de llamadas y duplicación de trabajo (salvo optimizaciones como memoización o tail-call optimization).</li>
        <li><strong>Expresiva:</strong> modela naturalmente problemas auto-similares.</li>
      </ul>
    </section>

    <section id="complejidad" class="card">
      <h2>Complejidad computacional en algoritmos recursivos</h2>
      <p>La complejidad de tiempo de un algoritmo recursivo suele expresarse como una <em>recurrencia</em> <code>T(n)</code>. Una herramienta común para resolver ciertas recurrencias es el <em>Master Theorem</em>, que aplica a relaciones de la forma <code>T(n)=aT(n/b)+f(n)</code>.</p>
      <p>Ejemplos rápidos:</p>
      <ul>
        <li><strong>Factorial (recursivo):</strong> T(n)=T(n-1)+O(1) → O(n).</li>
        <li><strong>Fibonacci (recursivo naïve):</strong> T(n)=T(n-1)+T(n-2)+O(1) → O(φ^n) (exponencial).</li>
        <li><strong>Torres de Hanoi:</strong> T(n)=2T(n-1)+1 → T(n)=O(2^n).</li>
        <li><strong>Divide and conquer (ej. merge sort):</strong> T(n)=2T(n/2)+O(n) → O(n log n) (Master Theorem).</li>
      </ul>
      <p>Para análisis formal y técnicas de resolución de recurrencias, ver material académico en la sección de referencias.</p>
    </section>

    <section id="algoritmos" class="card">
      <h2>Ejemplos visuales y demos interactivos</h2>
      <p>En esta sección encontrarás demos interactivos. Usa los controles para probar entradas pequeñas y observar la recursión.</p>

      <article class="demo" id="demo-factorial">
        <h3>Factorial (recursivo)</h3>
        <p>Definición: <code>fact(n) = n * fact(n-1)</code>, caso base <code>fact(0)=1</code>.</p>
        <div class="demo-row">
          <input id="fact-n" type="number" min="0" value="5"> 
          <button id="run-fact">Calcular</button>
        </div>
        <pre id="fact-output" class="output"></pre>
        <div class="small">Visualización de la pila de llamadas:</div>
        <pre id="fact-stack" class="output small"></pre>
      </article>

      <article class="demo" id="demo-fib">
        <h3>Fibonacci</h3>
        <p>Comparación entre la versión recursiva naïve y la versión con memoización (dinámica).</p>
        <div class="demo-row">
          <input id="fib-n" type="number" min="0" value="10"> 
          <button id="run-fib">Ejecutar</button>
        </div>
        <div class="output small" id="fib-output"></div>
      </article>

      <article class="demo" id="demo-hanoi">
        <h3>Torres de Hanoi</h3>
        <p>Animación paso a paso de la solución recursiva (n ≤ 6 recomendado).</p>
        <div class="demo-row">
          <input id="hanoi-n" type="number" min="1" max="8" value="3"> 
          <button id="run-hanoi">Resolver</button>
          <button id="play-hanoi">Auto-play</button>
        </div>
        <div id="hanoi-board" class="hanoi-board"></div>
        <pre id="hanoi-steps" class="output small"></pre>
      </article>

      <article class="demo" id="demo-fractal">
        <h3>Fractales — Triángulo de Sierpinski</h3>
        <p>Dibuja el triángulo de Sierpinski con control de profundidad.</p>
        <div class="demo-row">
          <input id="s-depth" type="range" min="0" max="7" value="4">
          <span id="s-depth-label">4</span>
          <button id="draw-sierp">Dibujar</button>
        </div>
        <canvas id="sierp-canvas" width="600" height="520" aria-label="Sierpinski"></canvas>
      </article>

    </section>

    <section id="conclusion" class="card">
      <h2>Conclusión</h2>
      <p>La recursividad es una herramienta esencial en ciencias de la computación para expresar soluciones elegantes a problemas auto‑similares. Si bien puede presentar sobrecosto en tiempo y memoria (por ejemplo en implementaciones recursivas naïve), técnicas como memoización, programación dinámica y optimizaciones del compilador permiten aprovechar sus ventajas manteniendo eficiencia. Comprender recursividad facilita diseñar algoritmos divide-and-conquer, recorrer estructuras de datos recursivas y generar modelos fractales.</p>
    </section>

    <section id="referencias" class="card">
      <h2>Referencias (IEEE)</h2>
      <ol>
        <li>[1] "Recursion (computer science)", Wikipedia, 2025. [En línea].</li>
        <li>[2] J. H. Regehr et al., "Solving recurrences" — Stanford CS161 lecture notes, 2016. [En línea].</li>
        <li>[3] "Introduction to Recursion" — GeeksforGeeks. [En línea].</li>
        <li>[4] J. Shams, "Recursion With Sierpinski's Triangle", Medium, 2019. [En línea].</li>
        <li>[5] "Tower of Hanoi", Wikipedia, 2025. [En línea].</li>
        <li>[6] The Recursive Book of Recursion, No Starch Press (introducción didáctica). [En línea/papel].</li>
      </ol>

      <h3>Fuentes consultadas (formato libre)</h3>
      <ul>
        <li>"Recursion (computer science)" — Wikipedia. URL: https://en.wikipedia.org/wiki/Recursion_(computer_science)</li>
        <li>Stanford CS161 — Lecture notes: "Solving recurrences" (PDF).</li>
        <li>GeeksforGeeks — "Introduction to Recursion".</li>
        <li>GeeksforGeeks — "Tower of Hanoi".</li>
        <li>Runestone / Beltoforion / GitHub examples sobre Sierpinski triangle.</li>
        <li>The Recursive Book of Recursion — No Starch.</li>
      </ul>
    </section>

  </main>

  <footer class="page-footer">
    <div class="container"> 
      <small>Proyecto preparado para subir a GitHub — modifícalo libremente.</small>
    </div>
  </footer>

  <script src="assets/script.js"></script>
</body>
</html>
