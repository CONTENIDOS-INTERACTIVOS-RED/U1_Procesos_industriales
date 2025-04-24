<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos básicos y clasificación de los procesos industriales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p(data-aos="fade-down") La palabra proceso proviene del latín #[i processus], que significa avance o desarrollo hacia un objetivo. En el contexto industrial, los procesos representan la serie de operaciones organizadas y planificadas para transformar materias primas en productos terminados con valor agregado.
    .row.justify-content-center.mb-5           
      .col-lg-4
        .bg-color-4.p-3.h-100.brounded.j1
          p(data-aos="fade-down").mb-0 Procesos industriales se refiere al conjunto de métodos, técnicas y estrategias, utilizados en la manufactura y producción a gran escala, optimizando recursos, reduciendo costos y garantizando calidad. Esta disciplina ha evolucionado desde la Revolución Industrial hasta la era digital, integrando tecnologías como la automatización, la inteligencia artificial y el análisis de datos, para la mejora continua.    
      .col-lg-4.my-4.my-lg-0
        figure
          img.img-a.img-t(src='@/assets/curso/temas/8.png', alt='', data-aos="zoom-in")          
      .col-lg-4
        .bg-color-3.p-3.pb-0.h-100.brounded.j1
          p(data-aos="fade-down") Los fundamentos provienen del latín #[i fundamentum], que hace referencia a la base o estructura sobre la cual se construye algo sólido. En este caso, los fundamentos de los procesos industriales representan los principios esenciales que todo ingeniero industrial debe comprender para diseñar, gestionar y mejorar los sistemas productivos, en diferentes industrias. 
          .row.justify-content-end.align-items-end           
            .col-auto
              figure
                img.img-a.img-t(src='@/assets/curso/temas/9.svg', alt='', data-aos="zoom-in") 

    h3(data-aos="fade-down") ¿Por qué es relevante para un ingeniero industrial?
    p(data-aos="fade-down") El dominio de los procesos industriales, es esencial en la formación de un ingeniero industrial, dado que le permite:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/10.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="16%" y="10%" numero="+")
                  h5 1. Optimizar la producción 
                  p.mb-0 Mediante la identificación de cuellos de botella y la mejora en la eficiencia operativa.   

                .bg-color-white.box-shadow.p-3(x="40%" y="98%" numero="+")
                  h5 2. Reducir costos y tiempos de producción.  
                  p.mb-0 Maximizando la rentabilidad empresarial.  

                .bg-color-white.box-shadow.p-3(x="64%" y="10%" numero="+")
                  h5 3. Implementar tecnologías emergentes.  
                  p.mb-0 Como la automatización, la robótica y el análisis de datos, para la toma de decisiones estratégicas.  

                .bg-color-white.box-shadow.p-3(x="88.8%" y="98%" numero="+")
                  h5 4. Asegurar la calidad del producto y la satisfacción del cliente final. 
                  p.mb-0 Mediante el control de estándares de producción. 

    .bg-full-width-2.bg-fondo-2.py-4
      .px-4.px-md-5
        h3(data-aos="fade-down") Cómo aplicarlo en la práctica
        p(data-aos="fade-down") Para motivar al estudiante en esta disciplina, es clave que identifique su impacto directo, en la industria:  
        .row.justify-content-center.align-items-stretch.text-center.mb-4
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center En una empresa manufacturera
                p.mb-0 Podrá diseñar procesos eficientes para la producción en línea de ensamblaje, optimizando tiempos y reduciendo desperdicios.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center En la industria de alimentos
                p.mb-0 Podrá garantizar la estandarización y calidad en la elaboración de productos de consumo masivo.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/13.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center En el sector logístico
                p.mb-0 Podrá mejorar la gestión de la cadena de suministro, reduciendo costos de transporte y almacenamiento.    

          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/14.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center En una empresa tecnológica
                p.mb-0 Podrá participar en la integración de #[i software] de control de producción, para la toma de decisiones en tiempo real.

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/15.svg")
          .col-lg
            p.mb-0.text-white La Ingeniería Industrial, es una carrera con un alto impacto en la transformación digital de las industrias, y comprender los fundamentos de los procesos industriales, es el primer paso para innovar y liderar el cambio en un mundo globalizado.  

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Principales conceptos de los procesos industriales
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-down") Conozcamos los principales conceptos de los procesos industriales.
        h3(data-aos="fade-left") Sistema de producción
        .bg-color-6.p-4(data-aos="fade-left")
          p.mb-0 Un sistema de producción es el conjunto de procesos, recursos y actividades interconectadas que permiten la transformación de insumos en productos o servicios con valor agregado. Es un enfoque estructurado que busca maximizar la eficiencia y optimizar la gestión de recursos en la industria. Estos sistemas combinan maquinaria, mano de obra, materiales, información y tecnología, para asegurar que los productos cumplan con los estándares de calidad, tiempo y costos definidos.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/16.png", data-aos="zoom-in")   

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/17.png", alt="")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="¿Para qué se utiliza un sistema de producción?")
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Garantiza que la fabricación o prestación de servicios, se realice de manera eficiente, controlada y repetitiva.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Minimiza desperdicios y maximiza la calidad y productividad.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Coordina los recursos estratégicamente, para obtener productos terminados de manera rentable y sostenible.      

          .div(titulo="Aplicaciones")
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Planificación y optimización de la producción.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Reducción de costos operativos.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Mejora en la calidad del producto.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Adaptación a la demanda del mercado.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Implementación de tecnologías como la automatización y la inteligencia artificial. 

          .div(titulo="¿Quiénes utilizan los sistemas de producción?")
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Industria automotriz.] Fabricación de vehículos mediante líneas de ensamblaje automatizadas.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Industria alimentaria.] Procesamiento y empaquetado de alimentos con estándares sanitarios.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Industria farmacéutica.] Producción de medicamentos y vacunas, con procesos de alta precisión.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Industria textil.] Manufactura de prendas en grandes volúmenes, con optimización de recursos.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Industria tecnológica.] Ensamblaje de dispositivos electrónicos con técnicas avanzadas de automatización.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Sector energético.] Producción y distribución de energía, eléctrica mediante procesos continuos.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Industria aeroespacial.] Fabricación de aeronaves con estrictos controles de calidad. de procesos, recursos y actividades interconectadas que permiten transformar insumos en productos o servicios.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Ejemplo.] Planta de ensamblaje de automóviles.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Importancia.] Permite diseñar y mejorar sistemas productivos eficientes y sostenibles. 

    .bg-full-width-3.bg-fondo-1.py-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-8
            h3(data-aos="fade-left") Productividad
            .bg-color-8.p-4(data-aos="fade-left")
              p.mb-0 La productividad es un concepto clave en la ingeniería industrial, puesto que mide la eficiencia con la que una empresa transforma insumos en productos o servicios. Se define como la relación entre la cantidad de bienes o servicios producidos y los recursos utilizados en su fabricación. Su medición es fundamental para identificar áreas de mejora, optimizar el uso de recursos y aumentar la rentabilidad del negocio.
            .bg-color-7.p-0(data-aos="fade-left")
              .row
                .col-auto
                  figure
                    img.img-a.img-t(src="@/assets/curso/temas/18.svg", data-aos="zoom-in")              
                .col.col-lg-8.mb-3.mb-lg-0.j1.p-3
                  p.mb-0 #[b Ejemplo.] Si una empresa produce 1,000 unidades en 500 horas, su productividad es de 2 unidades por hora.

          .col-lg-4.mb-3.mb-lg-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/19.png", data-aos="zoom-in")

        .row.justify-content-center.align-items-stretch.text-center.mb-4
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/20.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Importancia en la industria
                p.mb-0 La productividad determina la capacidad de una organización para competir en el mercado global. Una mayor productividad significa menores costos operativos, mejor utilización de los recursos y mayor capacidad de respuesta ante la demanda del mercado.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/21.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Relación con la ingeniería industrial
                p.mb-0 La ingeniería industrial se centra en mejorar la productividad mediante la optimización de procesos, la reducción de desperdicios y la implementación de tecnologías avanzadas como la automatización y la inteligencia artificial.

    p(data-aos="fade-down") Ahora, estudiemos otros conceptos importantes:

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/22.png")                     
            .col-lg-7
              h5 ¿Cómo se mide la productividad? 
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b Productividad laboral.] Se mide en función del rendimiento de los trabajadores en relación con la producción.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b Productividad del capital.] Evalúa la eficiencia del uso de maquinaria y equipos.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b Productividad total de los factores (PTF).] Considera todos los insumos utilizados en el proceso de producción. 

          .row.align-items-center.p-4.p-md-5 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/23.png")                     
            .col-lg-7
              h5 ¿Para qué se mide la productividad? 
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Para identificar cuellos de botella en la producción.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Para mejorar la planificación y asignación de recursos.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Para optimizar costos y aumentar la rentabilidad.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Para establecer estándares de desempeño y control de calidad.

          .row.align-items-center.p-4.p-md-5 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/24.png")                     
            .col-lg-7
              h5 Beneficios de medir la productividad en la industria 
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Aumento de la eficiencia operativa.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Reducción de desperdicios y costos.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Mejora en la competitividad y sostenibilidad del negocio.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Capacidad de tomar decisiones estratégicas basadas en datos. 

    .row.mb-5
      .col-lg-9
        p(data-aos="fade-left") La medición de la productividad es esencial para cualquier empresa que busque mantenerse competitiva en un entorno globalizado.     
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/25.svg")
            .col-lg
              p.mb-0 Con el uso de herramientas como el análisis de datos, la automatización y la inteligencia artificial, la ingeniería industrial ha revolucionado la manera en que se gestionan los procesos productivos, permitiendo a las empresas alcanzar niveles óptimos de eficiencia y calidad. entre la cantidad de bienes o servicios producidos y los recursos utilizados en su fabricación.    
      .col-lg-3.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/26.png", data-aos="zoom-in")    

    .bg-full-width.bg-color-9.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/27.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Eficiencia y eficacia
            p.mb-4(data-aos="fade-right") La comprensión de los conceptos de eficiencia y eficacia, es esencial para el análisis y la mejora de los procesos industriales, dado que permite evaluar el uso adecuado de los recursos y el cumplimiento de los objetivos productivos. En el PDF #[b Eficiencia y eficacia], se presentan las diferencias claves entre estos dos términos, su aplicación individual y conjunta en distintos sectores industriales, y las herramientas más utilizadas para su medición. Asimismo, se analizan casos reales y el impacto de tecnologías como la inteligencia artificial en la optimización de procesos, brindando al lector una visión práctica y estratégica, para su implementación en entornos productivos reales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Eficiencia y eficacia


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Clasificación de los procesos industriales

    p(data-aos="fade-down").mb-5 La clasificación de los procesos industriales en manufactura discreta, manufactura continua y procesos por lotes, se fundamenta en la teoría de la ingeniería de producción y manufactura, la cual se basa en la variabilidad del producto, la continuidad del flujo de producción y la metodología utilizada para transformar la materia prima en bienes terminados. Skinner (1969), propuso que las estrategias de manufactura deben alinearse con la naturaleza del proceso para maximizar su eficiencia. Posteriormente, Groover (2010), y Stevenson (2017), validaron esta clasificación, identificando que estos tres tipos de procesos abarcan la mayoría de las operaciones industriales.
    h3(data-aos="fade-left") Procesos de manufactura discreta

    .row.mb-5
      .col-lg-8
        .bg-color-6.p-4.h-100.j1(data-aos="fade-left")
          p.mb-0 La manufactura discreta es un proceso de producción en el cual los bienes son fabricados como unidades individuales o ensamblados a partir de componentes diferenciados. En este tipo de manufactura, los productos pueden desmontarse en sus partes originales, lo que permite una mayor flexibilidad y personalización en la fabricación. Estos procesos se caracterizan por la producción de bienes individuales y diferenciados que pueden modificarse a lo largo de la cadena de producción, facilitando la adaptación a las necesidades del mercado. Son ampliamente utilizados en industrias donde la variedad de productos es alta y la producción en serie no es una opción viable debido a la demanda de productos personalizados o de alto valor agregado.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/28.png", data-aos="zoom-in") 

    TabsC(data-aos="fade-right").color-secundario.mb-5
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Características" :icon="require('@/assets/curso/temas/icon.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/29.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Características 
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Producción de bienes tangibles diferenciados y ensamblables.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Cada producto tiene una identidad única en la línea de producción.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Permite mayor flexibilidad en la personalización de productos.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Generalmente requiere operaciones manuales y automatizadas.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Se utiliza en industrias con alta variabilidad en productos.      
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Clasificación" :icon="require('@/assets/curso/temas/icon.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/30.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Clasificación 
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Producción en línea.] Ensamblaje en cadena con pasos secuenciales (fabricación de automóviles).
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Producción bajo pedido.] Personalización de productos según los requerimientos del cliente (fabricación de maquinaria especializada).   
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Ejemplos de aplicación" :icon="require('@/assets/curso/temas/icon.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/31.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Ejemplos de aplicación 
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Ensamblaje de automóviles (Toyota, Ford).
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Fabricación de electrodomésticos (Whirlpool, LG).
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Producción de dispositivos electrónicos (Apple, Samsung).

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-0
        .row.align-items-center
          .col-lg
            .py-4
              h5.text-white Contribución de la IA. 
              p.mb-0.text-white La inteligencia artificial permite la automatización del ensamblaje, el control de calidad mediante visión artificial y la optimización de la logística mediante algoritmos de predicción de demanda.          
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/32.svg")

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/33.png", data-aos="zoom-in")    
      .col-lg-8
        h3(data-aos="fade-down") Procesos de manufactura continua
        p(data-aos="fade-left") Los procesos de manufactura continua se caracterizan por la producción ininterrumpida de materiales en grandes volúmenes, sin interrupciones significativas en la línea de manufactura. Este tipo de proceso es altamente eficiente y está diseñado para industrias que requieren un flujo constante de producción, con pocas variaciones en el producto final.      
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/34.svg")
            .col-lg
              p.mb-0 La automatización es un componente clave, porque permite reducir costos operativos, mejorar la eficiencia energética y garantizar una producción estable. Debido a su naturaleza, los procesos continuos requieren inversiones significativas en infraestructura y sistemas de control avanzados, para asegurar la estabilidad y la calidad del producto.

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5 
            .col-lg-7
              h5 Características 
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Flujo de producción constante y sin interrupciones.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Alta eficiencia y reducción de costos por economías de escala.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Requiere infraestructura avanzada para garantizar un funcionamiento continuo.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Producción homogénea con pocas variaciones en el producto final.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Operaciones altamente automatizadas.                         
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/35.png") 

          .row.align-items-center.p-4.p-md-5 
            .col-lg-7
              h5 Clasificación 
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Producción de fluidos. Incluye procesos como refinación de petróleo y tratamiento de aguas.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Producción de materiales sólidos a gran escala. Como la fabricación de acero y cemento.                         
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/36.png")

          .row.align-items-center.p-4.p-md-5 
            .col-lg-7
              h5 Ejemplos de aplicación 
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Refinamiento de petróleo (Ecopetrol, Shell).
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Producción de acero (Acerías Paz del Río, ArcelorMittal).
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Generación de energía eléctrica (Celsia, ISA).                         
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/37.png")

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-0
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/38.svg")          
          .col-lg
            .py-4
              h5.text-white Contribución de la IA. 
              p.mb-0.text-white Implementación de sensores IoT para el monitoreo en tiempo real, mantenimiento predictivo y optimización del consumo energético, mediante #[i Machine Learning.] 

    .row.mb-5
      .col-lg-8
        h3(data-aos="fade-left") Procesos por lotes
        p(data-aos="fade-down") Los procesos por lotes permiten la producción de bienes en cantidades específicas, combinando características de la manufactura discreta y continua dentro de un mismo sistema productivo. 
        .bg-color-10.p-0(data-aos="fade-left")
          .row
            .col-auto
              figure
                img.img-a.img-t(src="@/assets/curso/temas/39.svg", data-aos="zoom-in")              
            .col.col-lg-8.mb-3.mb-lg-0.j1.p-3
              p.mb-0 Este enfoque es especialmente útil cuando la demanda del mercado es variable y la producción debe ajustarse a diferentes volúmenes, según las necesidades del cliente.
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 A diferencia de la manufactura continua, estos procesos pueden pausarse entre lotes, lo que brinda mayor flexibilidad en la programación y optimización de recursos. Su aplicación es común en industrias donde la calidad y la precisión son esenciales, como la farmacéutica, la química y la alimentaria.

      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/40.png", data-aos="zoom-in")

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/41.png", alt="")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Características")
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Permite fabricar diferentes productos, en la misma instalación.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Alta flexibilidad para adaptarse a cambios en la demanda.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Optimización de recursos al reducir desperdicios y tiempos de espera.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Mayor control de calidad en cada lote producido.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Utilización eficiente de maquinaria y mano de obra.  

          .div(titulo="Clasificación")
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Producción de lotes pequeños.] Para productos personalizados con alta calidad.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Producción de lotes grandes.] Para mercados con mayor demanda y eficiencia operativa. 

          .div(titulo="Ejemplos de aplicación")
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Producción farmacéutica (Bayer, Genfar).
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Industria química (BASF, Dow Chemicals).
              li.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Fabricación de alimentos procesados (Nestlé, Alpina).

    .row.mb-5
      .col-lg-9
        .bg-color-7.p-0(data-aos="fade-left")
          .row
            .col-auto
              figure
                img.img-a.img-t(src="@/assets/curso/temas/42.svg", data-aos="zoom-in")              
            .col.col-lg-8.mb-3.mb-lg-0.j1.p-3
              p.mb-0 #[b Contribución de la IA.] Optimización de recetas y formulaciones, control de calidad en línea, mediante sensores avanzados y reducción de desperdicios mediante algoritmos de predicción de defectos.
        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 La clasificación de los procesos industriales, es fundamental para determinar la estrategia de producción más eficiente. Con la evolución de la inteligencia artificial, cada uno de estos procesos ha sido optimizado para mejorar la calidad, reducir costos y maximizar la eficiencia operativa, adaptándose a las necesidades de la industria en la era digital.

      .col-lg-3.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/43.png", data-aos="zoom-in")

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106566" target="_blank" rel="noopener noreferrer") Recasens Baxarias, F. (2018). Procesos de separación de biotecnología industrial. Universitat Politècnica de Catalunya.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.edsrobotics.com/blog/proceso-industrial-que-es/" target="_blank" rel="noopener noreferrer") RDS – ROBOTICS. (2020). ¿Qué es un proceso industrial? RDS – ROBOTICS. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/MF2Aa6RPNV4?si=-XAaRepAbdcM1xcr" target="_blank" rel="noopener noreferrer") Universidad Continental. (2022). Sistemas de producción.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
