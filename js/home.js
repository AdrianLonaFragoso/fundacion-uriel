const slides = [
  {
    title: "Atención médica especializada",
    img: "./img/atencion-medica-espcializada.png",
    content: `
  
          <p class="mb-4">
            Recuperando la autonomía y la confianza después de una quemadura
          </p>
  
          <p class="mb-4">
            En la Fundación Uriel, sabemos que una quemadura no solo deja
            marcas en la piel, sino también en la vida de quien la sufre.
            Nuestro compromiso es acompañar a cada persona en su proceso de
            recuperación, ayudándola a recuperar su autonomía y a
            reintegrarse a su entorno lo antes posible.
          </p>
  
          <p class="mb-4">
            Cada tratamiento es único y se adapta a la edad, el estado
            clínico y las necesidades específicas de cada paciente.
            Brindamos atención ambulatoria a quienes pueden recibir
            tratamiento fuera del hospital y, en casos de emergencia o
            secuelas graves, canalizamos a instancias especializadas en
            México o el extranjero.
          </p>

          <p class="text-[var(--secondary)] text-2xl cursor-pointer" onclick="bigInfo()">Ver más >></p>

          <div class="flex justify-center mt-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEUcHgZKplXNTs91xG_hNnb-mbmAlwn8vgO6PVelGuD5vkFw/viewform"
              target="_blank"
              class="btn-secondary max-w-[20rem] mx-auto mb-10"
            >
              <i class="fas fa-heart"></i> Solicitar Apoyo
            </a>
          </div>
        `,
  },
  {
    title: "Prevención de quemaduras",
    img: "./img/nino-prevencion.png",
    content: `
  <p class="mb-4">
  "El Fuego No Es Un Juego" es un programa de prevención de quemaduras de la
  Fundación Uriel, dirigido a niñas, niños, familias y comunidades. A través
  de talleres interactivos, material educativo y simulaciones, enseñamos
  cómo prevenir accidentes con fuego y líquidos calientes en el hogar y la
  escuela.
  </p>
  
  <p class="mb-4">
  Nuestro objetivo es crear una cultura de seguridad, brindando herramientas
  prácticas para reducir riesgos y actuar correctamente en caso de
  emergencia.
  </p>
  
  <p class="mb-4">
  Las personas interesadas pueden inscribirse y solicitar una plática
  completamente gratuita. Además, proporcionamos el Manual de Prevención de
  Accidentes, una guía con información clave para proteger a niñas y niños
  de situaciones de riesgo.
  </p>
  
  <p class="mb-4">
  Juntos, podemos evitar que más personas sufran las dolorosas consecuencias
  de una quemadura. ¡Prevenir es salvar vidas!
  </p>
        
   <div class="flex justify-center mt-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEUcHgZKplXNTs91xG_hNnb-mbmAlwn8vgO6PVelGuD5vkFw/viewform"
              target="_blank"
              class="btn-secondary max-w-[20rem] mx-auto mb-10"
            >
              <i class="fas fa-heart"></i> Solicitar Apoyo
            </a>
          </div>
  
        `,
  },
  {
    title: "Apoyo a Grupos Vulnerables",
    img: "./img/apoyo-comunidades.png",
    content: `
        <p class="mb-4">
  Más de 1,000 familias han recibido alimentos, ropa, juguetes y recursos
  esenciales para mejorar su calidad de vida. Inscribe a tu comunidad y
  agendamos una visita.
  </p>
  
  <p class="mb-4">
  Capacitación Médica: Más de 100 especialistas han sido formados en la
  atención integral del paciente quemado, mejorando los estándares de
  cuidado médico en el país.
  </p>

   <div class="flex justify-center mt-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEUcHgZKplXNTs91xG_hNnb-mbmAlwn8vgO6PVelGuD5vkFw/viewform"
              target="_blank"
              class="btn-secondary max-w-[20rem] mx-auto mb-10"
            >
              <i class="fas fa-heart"></i> Solicitar Apoyo
            </a>
          </div>
      `,
  },
  {
    title: "Capacitación Médica y Formación Comunitaria",
    img: "./img/capacitacion-medica.png",
    content: `
       <p class="mb-4">
  En la Fundación Uriel, creemos que la clave para brindar una atención de
  calidad a los sobrevivientes de quemaduras está en la formación continua
  de los profesionales de la salud. Por ello, ofrecemos programas de
  capacitación especializada, dirigidos a médicos, enfermeros,
  fisioterapeutas y otros profesionales del sector.
  </p>
  
  <p class="mb-4">
  Nuestra capacitación se basa en protocolos de atención avanzada para el
  manejo integral de pacientes con quemaduras, incluyendo el tratamiento de
  emergencia, control del dolor, rehabilitación física y apoyo psicológico.
  </p>
  
  <p class="mb-4">
  Trabajamos de la mano con expertos nacionales e internacionales para
  proporcionar herramientas actualizadas en la prevención, tratamiento y
  reinserción de los pacientes en su entorno.
  </p>
  
  <p class="mb-4">
  A través de talleres, seminarios y formación continua, aseguramos que los
  especialistas de la salud estén preparados para atender con calidad y
  empatía a quienes enfrentan este tipo de lesiones.
  </p>

      <div class="flex justify-center mt-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEUcHgZKplXNTs91xG_hNnb-mbmAlwn8vgO6PVelGuD5vkFw/viewform"
              target="_blank"
              class="btn-secondary max-w-[20rem] mx-auto mb-10"
            >
              <i class="fas fa-heart"></i> Solicitar Apoyo
            </a>
          </div>
      
      `,
  },
  {
    title: "⁠Alianzas Internacionales",
    img: "./img/fundacion-uriel-internacional.png",
    content: `
     
        <p class="mt-10 text-justify mb-5">
            Gracias al Estatus Consultivo ante la ONU, la Fundación Uriel
            impulsa un programa internacional que nos permite colaborar con
            organismos, hospitales y especialistas de diferentes países para
            mejorar la atención y rehabilitación de personas con quemaduras.
          </p>

          <p class="font-bold mb-5">A través de esta iniciativa:</p>

          <p class="text-justify mb-5">
            Canalizamos a pacientes con secuelas graves a centros especializados
            en México y el extranjero, asegurando acceso a tratamientos
            avanzados.
          </p>

          <p class="text-justify mb-5">
            Colaboramos con expertos internacionales para la capacitación de
            profesionales de la salud en nuevas técnicas de recuperación y
            manejo de quemaduras. Participamos en foros globales y comités
            especializados, contribuyendo con nuestra experiencia y promoviendo
            políticas públicas que fortalezcan la prevención y atención de
            quemaduras.
          </p>

          <p class="text-justify mb-5">
            Desarrollamos alianzas con organizaciones internacionales para
            ampliar el impacto de nuestros programas y garantizar una atención
            integral.
          </p>

          <p class="text-justify mb-5">
            Este programa refuerza nuestro compromiso de brindar soluciones
            innovadoras y mejorar la calidad de vida de quienes han sufrido
            quemaduras, trascendiendo fronteras con un enfoque humano y
            especializado.
          </p>
      
      `,
  },
  {
    title: "⁠Procuración de Fondos",
    img: "./img/tesoreria.png",
    content: `
     
      <p>Para financiar nuestras operaciones y seguir brindando apoyo a quienes más lo necesitan, organizamos eventos de recaudación de fondos, promovemos la venta de productos con causa y buscamos convenios de colaboracióncon otras instituciones y organizaciones.</p>
      

      <div class="flex justify-center mt-10 gap-4">
        <a
          href="https://www.paypal.com/donate?hosted_button_id=EFHsZBE47tpNRDWnzJMbRcSzPxrPGyrZIyXyZgO_uQzi9fhLumuI9h7zr0nEk1U0RqcmR8YNdwgcevsa"
          target="_blank"
          class="btn-alt max-w-[20rem] mx-auto mb-10"
        >
          <i class="fas fa-dollar-sign"></i> Donación 
        </a>

         <a
          href="https://www.paypal.com/donate?hosted_button_id=EFHsZBE47tpNRDWnzJMbRcSzPxrPGyrZIyXyZgO_uQzi9fhLumuI9h7zr0nEk1U0RqcmR8YNdwgcevsa"
          target="_blank"
          class="btn-secondary max-w-[20rem] mx-auto mb-10"
        >
          <i class="fas fa-heart"></i> Donación artículos
        </a>
      </div>
      
      `,
  },
];

let currentIndex = 0;
const serviceInfo = document.getElementById("serviceInfo");
const imgService = document.getElementById("imgService");
const bullets = document.querySelectorAll("#bullets div");

function updateSlide(index, animation) {
  serviceInfo.classList.remove(
    "animate__fadeIn",
    "animate__fadeInLeft",
    "animate__fadeInRight"
  );
  imgService.classList.remove("animate__backInDown");
  void serviceInfo.offsetWidth; // Forzar reflow para reiniciar la animación
  serviceInfo.classList.add("animate__animated", animation);
  imgService.classList.add("animate__animated", "animate__backInDown");
  serviceInfo.innerHTML = `<h2 class='mt-10 text-[var(--secondary)] mb-4 text-2xl font-bold'>${slides[index].title}</h2>
      <p class='mb-4'>${slides[index].content}</p>`;
  imgService.src = slides[index].img;
  bullets.forEach((b, i) => b.classList.toggle("activeService", i === index));
}

document.getElementById("prevSlide").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex, "animate__fadeInLeft");
});

document.getElementById("nextSlide").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex, "animate__fadeInRight");
});

updateSlide(currentIndex, "animate__fadeIn");

bigInfo = () => {
  Swal.fire({
    title: "Atención médica especializada",
    html: `
      <p class="mb-4">Recuperando la autonomía y la confianza después de una quemadura</p>
      <p class="mb-4">
        En la Fundación Uriel, sabemos que una quemadura no solo deja
        marcas en la piel, sino también en la vida de quien la sufre.
        Nuestro compromiso es acompañar a cada persona en su proceso de
        recuperación, ayudándola a recuperar su autonomía y a
        reintegrarse a su entorno lo antes posible.
      </p>
  
      <p class="mb-4">
        Cada tratamiento es único y se adapta a la edad, el estado
        clínico y las necesidades específicas de cada paciente.
        Brindamos atención ambulatoria a quienes pueden recibir
        tratamiento fuera del hospital y, en casos de emergencia o
        secuelas graves, canalizamos a instancias especializadas en
        México o el extranjero.
      </p>
  
      <p class="mb-4">
        Desde el primer contacto, trabajamos de la mano con
        especialistas para diseñar un plan de atención integral con
        objetivos claros, que pueden incluir:
      </p>
  
      <ul class="mb-4 list-disc pl-5 text-left">
        <li>Prevención de secuelas funcionales y estéticas.</li>
        <li>Manejo del dolor.</li>
        <li>Apoyo psicológico para la persona y su familia.</li>
        <li>Rehabilitación física y recuperación de la movilidad.</li>
        <li>Prevención y tratamiento de trastornos psicomotores.</li>
        <li>Reintegración social, escolar y laboral.</li>
        <li>Un enfoque integral para una recuperación completa.</li>
      </ul>
  
      <p class="mb-4">
        Para alcanzar estos objetivos, ponemos a disposición de cada
        paciente diversas herramientas y terapias:
      </p>
  
      <ul class="mb-4 list-disc pl-5 text-left">
        <li>Fisioterapia especializada.</li>
        <li>Duchas filiformes para la recuperación de la piel.</li>
        <li>Uso de prendas de compresión y aparatos ortopédicos.</li>
        <li>Terapia ocupacional para mejorar la funcionalidad.</li>
        <li>Cuidados de enfermería.</li>
        <li>Sesiones de psicomotricidad.</li>
        <li>Apoyo psicológico y acompañamiento emocional.</li>
        <li>
          Asistencia social para garantizar un regreso seguro a la vida
          cotidiana.
        </li>
        <li>
          Nuestro enfoque es más que médico: es humano. Queremos que
          cada persona que ha sufrido una quemadura encuentre en
          nosotros un espacio de apoyo, cuidado y esperanza para
          reconstruir su vida con dignidad.
        </li>
      </ul>
    `,
    showCloseButton: true,
    showConfirmButton: false,
    icon: null,
    customClass: {
      popup: "custom-swal",
    },
  });
};

openPromos = () => {
  const promoModal = document.getElementById("promoModal");
  promoModal.classList.remove("hidden");
};

closePromos = () => {
  const promoModal = document.getElementById("promoModal");
  promoModal.classList.add("hidden");
  document.getElementById("videoPlayer").pause();
};
