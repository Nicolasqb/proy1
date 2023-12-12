import React from 'react';

const Section = () => {
  const sectionStyle = {
    marginTop: '200px', // Ajusta el valor según tus necesidades
  };

  const sectionBlockStyle = {
    marginBottom: '20px', // Espacio entre bloques de sección
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={sectionStyle}>
      <div className="row">
        {/* Bloque 1 */}
        <div className="col-md-6" style={sectionBlockStyle}>
          {/* Sección 1 */}
          <div className="text-center">
            <h2>Ada Lovelace</h2>
            <p>Augusta Ada King, condesa de Lovelace (Londres, 10 de diciembre de 1815-íd., 27 de noviembre de 1852), registrada al nacer como Augusta Ada Byron y conocida habitualmente como Ada Lovelace, fue una matemática y escritora británica, célebre sobre todo por su trabajo acerca de la computadora mecánica de uso general de Charles Babbage, la denominada máquina analítica. Fue la primera en reconocer que la máquina tenía aplicaciones más allá del cálculo puro y en haber publicado lo que se reconoce hoy como el primer algoritmo destinado a ser procesado por una máquina, por lo que se le considera como la primera programadora de ordenadores</p>
          </div>

          {/* Sección 2 */}
          <div className="text-center">
            <h2>Grace Hopper</h2>
            <p>Grace Murray Hopper (Nueva York, 9 de diciembre de 1906-Condado de Arlington, 1 de enero de 1992) fue una científica de la computación y militar estadounidense con grado de contraalmirante. Fue pionera en el mundo de las ciencias de la computación y la primera programadora que utilizó el Mark I. Entre las décadas de los 50 y 60 desarrolló el primer compilador para un lenguaje de programación así como también propició métodos de validación.1​2​3​4​5​6​

Popularizó la idea de los lenguajes de programación independientes de la máquina, lo que derivó en el desarrollo de COBOL, un lenguaje de alto nivel de programación que aún se utiliza. Era conocida por sus amistades como Amazing Grace</p>
          </div>
          <div className="text-center">
            <h2>Tim Berners-Lee</h2>
            <p>Timothy "Tim" John Berners-Lee (Londres, Inglaterra; 8 de junio de 1955) es un científico de la computación británico, conocido por ser el padre de la World Wide Web. Estableció la primera comunicación entre un cliente y un servidor usando el protocolo HTTP en diciembre de 1990. En octubre de 1994 fundó el Consorcio de la World Wide Web (W3C) con sede en el MIT, para supervisar y estandarizar el desarrollo de las tecnologías sobre las que se fundamenta la Web y que permiten el funcionamiento de Internet</p>
          </div>
          <div className="text-center">
            <h2>Linus Torvaldsr</h2>
            <p>Linus Benedict Torvalds (Helsinki, Finlandia, 28 de diciembre de 19691​) es un ingeniero de software finlandés-estadounidense,2​ conocido por iniciar y mantener el desarrollo del kernel (en español, núcleo) Linux, basándose en el sistema operativo libre Minix creado por Andrew S. Tanenbaum y en algunas herramientas, varias utilidades y los compiladores desarrollados por el proyecto GNU. Actualmente es responsable de la coordinación del proyecto. También ha desarrollado el software de control de versiones Git.</p>
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="col-md-6" style={sectionBlockStyle}>
          {/* Sección 3 */}
          <div className="text-center">
            <h2>Dennis Ritchie</h2>
            <p>Dennis MacAlistair Ritchie (9 de septiembre de 1941 - 12 de octubre de 2011), Graduado de Física y Matemáticas aplicadas de Harvard, fue un científico de la computación estadounidense.1​

Colaboró en el diseño y desarrollo de los sistemas operativos Multics y Unix, así como el desarrollo de varios lenguajes de programación como el C, tema sobre el cual escribió un célebre clásico de las ciencias de la computación junto a Brian Wilson Kernighan: El lenguaje de programación C..</p>
          </div>

          {/* Sección 4 */}
          <div className="text-center">
            <h2>Bill Gates</h2>
            <p>William Henry Gates III (Seattle, Washington; 28 de octubre de 1955), conocido como Bill Gates, es un magnate empresarial, desarrollador de software, inversor, autor y filántropo estadounidense. Es cofundador de Microsoft, junto con su difunto amigo de la infancia Paul Allen. Durante su carrera en Microsoft, Gates ocupó los cargos de presidente, director ejecutivo (CEO), presidente y arquitecto jefe de software, además de ser el mayor accionista individual hasta mayo de 2014. Fue uno de los principales empresarios de la revolución de las microcomputadoras de las décadas de 1970 y 1980.</p>
          </div>
          <div className="text-center">
            <h2>Guido Van Rossum</h2>
            <p>Guido van Rossum (Haarlem, Países Bajos, 31 de enero de 1956) es un informático,1​ conocido por ser el autor del lenguaje de programación Python. Nació y creció en los Países Bajos.

Es la primera persona en obtener el título BDFL (Benevolent Dictator for Life), cuyo título es otorgado a personajes importantes en el mundo del código abierto, teniendo asignada la tarea de fijar las directrices sobre la evolución de Python, así como la de tomar decisiones finales sobre el lenguaje que todos los desarrolladores acatan. Van Rossum tiene fama de ser bastante conservador, realizando pocos cambios al lenguaje entre versiones sucesivas, intentando mantener siempre la compatibilidad con versiones anteriores. El 12 de julio de 2018, con un mensaje enviado a la lista de python-committers, anunció su retiro de los procesos de decisión</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
