<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Factores que afectan la eficiencia y productividad de los procesos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden  
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-0
        .row.align-items-center
          .col-lg
            .py-4
              p.mb-0 Teniendo la claridad que la eficiencia y la productividad en los procesos industriales son elementos claves para la competitividad de una empresa. Ambos conceptos están influenciados por múltiples factores que pueden optimizarse mediante la integración de nuevas tecnologías, el análisis de datos y la aplicación de estrategias de mejora continua. En este tema, se analizarán los principales factores que impactan el desempeño de los procesos industriales y cómo pueden gestionarse para maximizar su rendimiento.         
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/55.png")      

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Tecnología y automatización

    p(data-aos="fade-down") La incorporación de tecnología y automatización en los procesos industriales ha transformado la forma en que las empresas producen bienes y servicios. Las máquinas y sistemas inteligentes permiten reducir tiempos de producción, minimizar errores y aumentar la precisión en la fabricación.

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/56.png")           
            .col-lg-7
              h5 Impacto en la eficiencia  
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Disminución del desperdicio de materiales.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Mayor consistencia y precisión en la producción.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Reducción de tiempos de ciclo en las líneas de ensamblaje.                        

          .row.align-items-center.p-4.p-md-5 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/57.png")           
            .col-lg-7
              h5 Impacto en la productividad  
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Mayor volumen de producción en menor tiempo.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Reducción de costos operativos mediante la automatización.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Eliminación de tareas repetitivas y reducción de la fatiga laboral. 

          .row.align-items-center.p-4.p-md-5 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/58.png")           
            .col-lg-7
              h5 Ejemplo en la industria  
              p La implementación de robots industriales en la manufactura automotriz ha permitido a empresas como Tesla y Toyota, mejorar su eficiencia operativa al reducir tiempos de ensamblaje y defectos en la producción. 

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Gestión de recursos

    p(data-aos="fade-down") La gestión eficiente de los recursos es un componente estratégico para garantizar la productividad, sostenibilidad y competitividad de las organizaciones en un entorno industrial dinámico.

    .bg-full-width.bg-color-9.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-8
            h2.mb-4(data-aos="flip-up")  Gestión de recursos
            p.mb-4(data-aos="fade-right") En el PDF #[b Gestión de recursos], se analizan los principales factores que intervienen en esta gestión, como la optimización de la materia prima, el uso eficiente de la energía y la sostenibilidad, así como la adecuada administración del talento humano. A través de ejemplos reales y metodologías aplicadas en distintos sectores, se evidencian las ventajas de integrar tecnologías como el Internet de las Cosas y la inteligencia artificial, para mejorar la planificación, reducir costos y aumentar el valor agregado en los procesos productivos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong>  Gestión de recursos          
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/59.png', alt='')                  
           
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Condiciones ambientales y regulatorias

    p(data-aos="fade-down") Las normativas gubernamentales y las condiciones del entorno pueden afectar la operación de los procesos industriales. Cumplir con los estándares ambientales y de seguridad es fundamental para evitar sanciones y mejorar la imagen corporativa.

    p(data-aos="fade-down") Factores a considerar: 

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/60.png", alt="")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Regulaciones ambientales y de seguridad industrial")
            p Estas regulaciones son supervisadas por instancias como la Organización Internacional de Normalización (ISO), la Agencia de Protección Ambiental (EPA) en Estados Unidos, la Organización Internacional del Trabajo (OIT) y en Colombia por el Ministerio de Ambiente y Desarrollo Sostenible y el Ministerio de Trabajo. Cumplir con estas normativas es fundamental para garantizar la seguridad de los trabajadores, reducir el impacto ambiental y mantener la competitividad de la empresa en el mercado global. Además, asegurar el cumplimiento normativo minimiza riesgos de sanciones, fortalece la reputación corporativa y permite la apertura a nuevos mercados internacionales que exigen certificaciones de calidad y sostenibilidad. 
          .div(titulo="Adaptación a estándares internacionales de calidad")
            p ISO 9001, ISO 14001, entre otro, los cuales permiten a las empresas garantizar la seguridad, sostenibilidad y eficiencia en sus procesos. Cumplir con estas normativas no solo mejora la confianza del cliente y facilita la entrada a mercados internacionales, sino que también optimiza la gestión de recursos y minimiza riesgos operativos, asegurando la competitividad en el sector industrial. 
          .div(titulo="Implementación de estrategias de producción sostenible")
            p La Responsabilidad Social Empresarial (RSE), ha evolucionado hacia un enfoque más amplio conocido como Sostenibilidad Empresarial, que integra prácticas económicas, ambientales y sociales en la gestión de los negocios. La sostenibilidad abarca la forma en que las empresas optimizan sus recursos, minimizan su impacto ambiental y garantizan el bienestar de sus colaboradores y comunidades.  

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/61.svg")
          .col-lg
            p.mb-0.text-white En el contexto industrial, la gestión de recursos y la eficiencia energética son componentes claves de la sostenibilidad, porque permiten a las empresas operar de manera más rentable y cumplir con regulaciones ambientales, lo que a su vez impacta en su competitividad. Herramientas como el análisis de ciclo de vida, la huella de carbono y el uso de energías renovables, son estrategias comunes dentro de este marco. 

    .row.mb-5
      .col-lg-8
        .bg-color-8.p-4(data-aos="fade-left")
          p.mb-0 Las empresas utilizan estas estrategias no solo para cumplir con normativas ambientales, sino también para mejorar su eficiencia operativa y reducir costos a largo plazo. Ejemplo de ello es el sector automotriz, donde compañías como Tesla han adoptado procesos de manufactura limpia para minimizar el impacto ambiental y mejorar su competitividad en mercados regulados.
        .bg-color-7.p-0(data-aos="fade-left")
          .row
            .col-auto
              figure
                img.img-a.img-t(src="@/assets/curso/temas/62.svg", data-aos="zoom-in")              
            .col.col-lg-8.mb-3.mb-lg-0.j1.p-3
              p.mb-0 Ejemplo en la industria. Empresas del sector energético, han adoptado tecnologías limpias y energías renovables para cumplir con regulaciones ambientales y reducir su impacto ecológico.

      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/63.png", data-aos="zoom-in")  


    .bg-full-width-2.bg-fondo-2.py-4
      .px-4.px-md-5
        #t_3_4.titulo-segundo(data-aos="flip-up")
          h2 #[span 3.4] Calidad y control de procesos
        p(data-aos="fade-down") El control de calidad es esencial para garantizar que los productos cumplan con los estándares esperados por los clientes y el mercado. La implementación de metodologías de mejora continua y control de procesos permite reducir defectos y mejorar la satisfacción del cliente.

        p(data-aos="fade-down") Herramientas para el control de calidad:      
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/64.svg" alt="" style="width: 90px")
              h5.text-center Six Sigma
              p.mb-0.text-center Reducción de la variabilidad y defectos en los procesos.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/65.svg" alt="" style="width: 90px")
              h5.text-center Control estadístico de procesos (SPC)
              p.mb-0.text-center Supervisión en tiempo real de 
              la producción. 

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/66.svg" alt="" style="width: 90px")
              h5.text-center Inspección automatizada
              p.mb-0.text-center Uso de visión artificial para detectar fallos en la manufactura.    

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-0
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/67.svg")          
          .col-lg
            .py-4
              h5.text-white Ejemplo en la industria. 
              p.mb-0.text-white La industria farmacéutica utiliza control estadístico de procesos para garantizar la uniformidad de los medicamentos y su cumplimiento con normativas internacionales.

    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Uso de la Inteligencia Artificial y el análisis de datos 

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-down") La integración de la Inteligencia Artificial (IA) y el análisis de datos en los procesos industriales, ha revolucionado la toma de decisiones y la optimización operativa. Las empresas pueden predecir fallas, ajustar la producción en tiempo real y mejorar la eficiencia de manera continua.

        p(data-aos="fade-down") Beneficios de la IA en la industria:      
        .bg-color-11.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Mantenimiento predictivo]/ Reducción de fallas en equipos, mediante el análisis de datos históricos.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Optimización de la producción]. Ajuste dinámico de líneas de manufactura en función de la demanda del mercado.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 #[b Reducción de desperdicios]. Algoritmos avanzados permiten mejorar el aprovechamiento de materiales.
        .bg-color-1.p-0(data-aos="fade-left")
          .row
            .col-auto
              figure
                img.img-a.img-t(src="@/assets/curso/temas/68.svg", data-aos="zoom-in")              
            .col.col-lg-8.mb-3.mb-lg-0.j1.p-3
              p.mb-0 #[b Ejemplo en la industria.] Amazon emplea IA para optimizar su cadena de suministro, predecir demanda y mejorar la distribución de inventario en sus centros logísticos.

      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/69.png", data-aos="zoom-in")

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/70.png", data-aos="zoom-in")    
      .col-lg-8  
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/71.svg")
            .col-lg
              p.mb-0 Los factores que afectan la eficiencia y la productividad de los procesos industriales, son múltiples y requieren de un enfoque integral para su correcta gestión. La combinación de tecnología, automatización, gestión de recursos, control de calidad y el uso de Inteligencia Artificial, permite a las empresas mejorar su desempeño y mantenerse competitivas en un mercado globalizado. La aplicación de estas estrategias en diferentes sectores industriales demuestra cómo la innovación y la digitalización, son claves para el crecimiento sostenible y la eficiencia operativa.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/149767" target="_blank" rel="noopener noreferrer") Cruz Maldonado, R. I. Obregón Flórez, A. E. & Puello Socarrás, G. E. (2020). Modelo de mejoramiento productivo para las Mipymes: siete claves para el desarrollo empresarial sostenible. Corporación Universitaria Minuto de Dios.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.universitatcarlemany.com/actualidad/blog/procesos-industriales/" target="_blank" rel="noopener noreferrer") Universitat Carlemany. (2023). Procesos industriales: los 4 tipos fundamentales de producción. Universitat Carlemany.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/1MfLKR-eObI?si=lpfElejP2ARvaxDe" target="_blank" rel="noopener noreferrer") Universidad Continental. (2021). Producción y productividad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
