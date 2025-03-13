const toggleButtonVisibility = () => {
  const handleScroll = () => {
    const button = document.querySelector("#btnUp");
    if (button) {
      button.classList.toggle("hidden", window.scrollY <= 768);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Revisar el estado inicial por si el botón ya existe
};

// Iniciar la función
toggleButtonVisibility();

openSidenav = () => {
  const open = document.getElementById("sidenav");

  open.classList.remove("-left-80");
  open.classList.add("left-0");
};

closeSidenav = () => {
  const open = document.getElementById("sidenav");

  open.classList.remove("left-0");
  open.classList.add("-left-80");
};

showDonate = () => {
  const donateBtn = document.querySelector("#donateCard");

  donateBtn.classList.remove("right-[-450px]");
  donateBtn.classList.add("right-0");
};

hideDonate = () => {
  const donateBtn = document.querySelector("#donateCard");

  donateBtn.classList.add("right-[-450px]");
  donateBtn.classList.remove("right-0");
};

const formatNumber = (num) => new Intl.NumberFormat("en-US").format(num);

const animateCounter = (element, start, end, duration) => {
  return new Promise((resolve) => {
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const value = Math.floor(progress * (end - start) + start);

      element.textContent = formatNumber(value);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        resolve(); // Finaliza la animación
      }
    };

    requestAnimationFrame(updateCounter);
  });
};

(async () => {
  const counterElement = document.getElementById("contador");
  await animateCounter(counterElement, 0, 24_407, 2000); // Desde 0 hasta 25,000 en 2s
})();

getDocumentTransparencia = async (doc) => {
  if (doc) {
    const showCaseFrame = document.getElementById("showCaseFrame");
    showCaseFrame.src = doc;
  }
};

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

        <p class="mb-4">
          Desde el primer contacto, trabajamos de la mano con
          especialistas para diseñar un plan de atención integral con
          objetivos claros, que pueden incluir:
        </p>

        <ul class="mb-4 list-disc pl-5">
          <li>Prevención de secuelas funcionales y estéticas.</li>
          <li>Manejo del dolor.</li>
          <li>Apoyo psicológico para la persona y su familia.</li>
          <li>Rehabilitación física y recuperación de la movilidad.</li>
          <li>Prevención y tratamiento de trastornos psicomotores.</li>
          <li>Reintegración social, escolar y laboral.</li>
          <li>Un enfoque integral para una recuperación completa</li>
        </ul>

        <p class="mb-4">
          Para alcanzar estos objetivos, ponemos a disposición de cada
          paciente diversas herramientas y terapias:
        </p>

        <ul class="mb-4 list-disc pl-5">
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
  },
  {
    title: "Prevención",
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
      

      `,
  },
  {
    title: "Apoyo a comunidades vulnerables",
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
    `,
  },
  {
    title: "Capacitación médica",
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
