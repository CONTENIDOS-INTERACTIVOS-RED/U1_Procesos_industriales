export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de los procesos industriales ',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Conceptos básicos y clasificación de los procesos industriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principales conceptos de los procesos industriales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de los procesos industriales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Importancia de los procesos industriales en la cadena de valor',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Reducción de costos mediante automatización y digitalización',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Mejora en la calidad y personalización de productos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Adaptabilidad a la demanda del mercado y optimización del tiempo de producción',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Integración de la inteligencia artificial y el IoT, para la toma de decisiones basada en datos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Factores que afectan la eficiencia y productividad de los procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tecnología y automatización',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Gestión de recursos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Condiciones ambientales y regulatorias',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Calidad y control de procesos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Uso de la Inteligencia Artificial y el análisis de datos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'García Moreno, E. (2020). <i>Automatización de procesos industriales: robótica y automática</i>. Editorial de la Universidad Politécnica de Valencia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/129686',
    },
    {
      referencia:
        'Medina, J. L. (2015). <i>La automatización en la industria química</i>. Universitat Politècnica de Catalunya. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61458 ',
    },
    {
      referencia:
        'Pérez García, F. (Dir.), Benages Candau, E. & Pla-Barber, J. (2020). <i>La competitividad española en las cadenas de valor globales</i>. Fundación BBVA. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/171353 ',
    },
    {
      referencia:
        'Joanidis, C. (2020). <i>Mejorar para ganar: la transformación basada en procesos paso a paso</i>. Pluma Digital Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/131582 ',
    },
  ],
  glosario: [
    {
      termino: 'Automatización',
      significado:
        'Uso de tecnología para realizar tareas sin intervención humana, mejorando eficiencia y reduciendo los costos.',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'Conjunto de actividades que una empresa realiza para generar valor y obtener ventaja competitiva.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Capacidad de lograr objetivos con el menor uso posible de recursos.',
    },
    {
      termino: 'Eficacia',
      significado:
        'Grado en que se alcanzan los objetivos planteados, sin considerar los recursos utilizados.',
    },
    {
      termino: 'Industria 4.0',
      significado:
        'Integración de tecnologías digitales en la industria, para mejorar la producción y la eficiencia.',
    },
    {
      termino: 'Ingeniería industrial',
      significado:
        'Disciplina que optimiza procesos productivos para mejorar la eficiencia y la calidad en la industria.',
    },
    {
      termino: 'Inteligencia Artificial',
      significado:
        'Uso de algoritmos y modelos computacionales, para mejorar la toma de decisiones y procesos industriales.',
    },
    {
      termino: 'Manufactura discreta',
      significado:
        'Producción de bienes como unidades individuales o ensamblaje de componentes diferenciados.',
    },
    {
      termino: 'Manufactura continua',
      significado:
        'Producción ininterrumpida de bienes homogéneos con alto nivel de automatización.',
    },
    {
      termino: 'Matriz de impacto',
      significado:
        'Herramienta de análisis para evaluar el impacto social, ambiental y económico, de proyectos empresariales.',
    },
    {
      termino: 'Optimización de recursos',
      significado:
        'Gestión eficiente de materiales, tiempo y capital humano, para maximizar productividad.',
    },
    {
      termino: 'Productividad',
      significado:
        'Relación entre bienes o servicios producidos y recursos utilizados en su fabricación.',
    },
    {
      termino: 'Procesos industriales',
      significado:
        'Conjunto de técnicas y métodos para transformar materias primas, en productos terminados.',
    },
    {
      termino: 'Sistemas de producción',
      significado:
        'Estructura que permite la conversión de insumos en bienes o servicios, de manera eficiente.',
    },
    {
      termino: 'Sostenibilidad empresarial',
      significado:
        'Integración de prácticas económicas, ambientales y sociales, para garantizar el desarrollo sostenible.',
    },
  ],
}
