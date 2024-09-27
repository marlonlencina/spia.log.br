const cards = document.querySelector(".cards");
const btnCards = document.querySelectorAll(".button-card");
const buttonCardFretes = document.querySelector(".button-card-fretes");
const buttonButtonCardVeiculos = document.querySelector(
  ".button-card-veiculos"
);
const cardFretes = document.querySelector(".card-fretes");
const cardVeiculos = document.querySelector(".card-veiculos");

buttonCardFretes.classList.add("card-active");
cardVeiculos.classList.add("card-inactive");

btnCards.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const query = e.target.dataset.query;
    if (query == "veiculos") {
      cardVeiculos.classList.remove("card-inactive");
      cardFretes.classList.add("card-inactive");
      buttonCardFretes.classList.remove("card-active");
      buttonButtonCardVeiculos.classList.add("card-active");
    } else {
      cardVeiculos.classList.add("card-inactive");
      cardFretes.classList.remove("card-inactive");
      buttonCardFretes.classList.add("card-active");
      buttonButtonCardVeiculos.classList.remove("card-active");
    }
  });
});

const data = [
  {
    module: "Setup",
    business: "<s>R$ 5.000,00</s><br /><b>Grátis</b>",
    premium: "R$ 6.500,00",
    enterprise: "Apartir de R$ 25.000,00",
  },
  {
    module: "Mensalidade",
    business: "R$ 2.000,00",
    premium: "R$ 5.000,00",
    enterprise: "Apartir de R$ 15.000,00",
  },
  {
    module: "Consultas",
    business: "Até 500",
    premium: "Até 1000",
    enterprise: "Acima de 1000",
  },
  {
    module: "Usuários",
    business: "2",
    premium: "5",
    enterprise: "15",
  },
  {
    module: "Agressores",
    business: "Padrão",
    premium: "Personalizado",
    enterprise: "Personalizado",
  },
  {
    module: "Fretes executados",
    business:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
    premium:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
    enterprise:
      '<div class="flex items-center gap-3 text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
  },
  {
    module: "Fretes não executados",
    business: "NÃO",
    premium: "NÃO",
    enterprise:
      '<div class=" text-WHITE flex items-center gap-3"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
  },
  {
    module: "Horizonte de predição",
    business: "30 Dias",
    premium: "60 Dias",
    enterprise: "90 Dias",
  },
  {
    module: "Tabela ANTT",
    business:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
    premium:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
    enterprise:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
  },
  {
    module: "Auditoria",
    business: "NÃO",
    premium: "NÃO",
    enterprise: "NÃO",
  },
  {
    module: "Cotação de multirotas",
    business: "NÃO",
    premium:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
    enterprise:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
  },
  {
    module: "Analytics",
    business: "NÃO",
    premium:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
    enterprise: "Personalizada",
  },
  {
    module: "API",
    business: "NÃO",
    premium:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
    enterprise:
      '<div class="flex items-center gap-3  text-WHITE"><iconify-icon class="text-body18 text-[#06A888]" icon="solar:verified-check-bold"></iconify-icon>SIM</div>',
  },
  {
    module: "Exportação de dados",
    business: "Excel",
    premium: "Excel",
    enterprise: "Personalizada",
  },
];

const container = document.querySelector(".container-table");
const insertTableRow = (
  moduleName,
  businessContent,
  premiumContent,
  enterpriseContent
) => {
  const elementRow = `
  <div class="container-table-row">
                <div class="px-4 h-[72px] flex items-center gap-4 ">
                  <span
                    class="font-BODY text-WHITE text-opacity-45 font-light text-body16"
                    >Módulo</span
                  >
                  <p class="font-BODY text-WHITE font-normal text-body16">
                    ${moduleName}
                  </p>
                </div>
                <div class="flex">
                  <div
                    class="w-full bg-BLUE_OPACITY_TABLE bg-opacity-10 grid place-content-center h-[72px] hover:bg-opacity-10 transition-all"
                  >
                    <p
                      class="font-BODY text-WHITE text-body14 font-light h-full text-center"
                    >
                     ${businessContent}
                    </p>
                  </div>
                  <div
                    class="w-full bg-GREEN_OPACITY_TABLE bg-opacity-10 grid place-content-center h-[72px] hover:bg-opacity-10 transition-all"
                  >
                    <p
                      class="font-BODY text-WHITE text-body14 font-light h-full text-center"
                    >
                      ${premiumContent}
                    </p>
                  </div>
                  <div
                    class="w-full bg-GRAY_OPACITY_TABLE bg-opacity-10 grid place-content-center h-[72px] hover:bg-opacity-10 transition-all"
                  >
                    <p
                      class="font-BODY text-WHITE text-body14 font-light h-full text-center"
                    >
                      ${enterpriseContent}
                    </p>
                  </div>
                </div>
              </div>
  `;

  container.insertAdjacentHTML("beforeBegin", elementRow);
};

data.forEach((row) => {
  insertTableRow(row.module, row.business, row.premium, row.enterprise);
});
//insertTableRow('Setup', 'R$ 6.500,00', 'R$ 6.500,00', 'Apartir de <br />R$ 25.000,00')

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuToggleIcon = document.getElementById("menu-toggle-icon");
  const sidebar = document.getElementById("sidebar");
  const linksSidebar = document.querySelectorAll(".link-sidebar");

  let isOpened = false;

  menuToggle.addEventListener("click", function (e) {
    if (isOpened) {
      isOpened = false;
      menuToggleIcon.icon = "mdi:menu";
      sidebar.classList.remove("open");
    } else {
      isOpened = true;
      menuToggleIcon.icon = "mdi:close";
      sidebar.classList.add("open");
    }
  });

  linksSidebar.forEach((link) => {
    link.addEventListener("click", function () {
      if (isOpened) {
        isOpened = false;
        menuToggleIcon.setAttribute("icon", "mdi:menu");
        sidebar.classList.remove("open");
      }
    });
  });

  // Optional: close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
      if (isOpened) {
        isOpened = false;
        menuToggleIcon.setAttribute("icon", "mdi:menu");
        sidebar.classList.remove("open");
      }
    }
  });
});

const returntotopbtn = document.querySelector("#return-to-top-btn");

returntotopbtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const thermometer = document.querySelector("#price-thermometer");
  const stats = document.querySelector("#stats");

  const heroCalls = [
    {
      dataMark: "#data-mark-1",
      title: "Preços de frete <b>voláteis?</b>",
      desc: "Agora você pode ter previsões certeiras para planejar suas operações sem sustos.",
      card: "price-stats",
    },
    {
      dataMark: "#data-mark-2",
      title:
        "Preocupado com os <b>custos logísticos</b> impactando seu negócio?",
      desc: "Garanta previsões precisas de frete para os próximos 90 dias e tome decisões informadas com confiança.",
      card: "price-thermometer",
    },
    {
      dataMark: "#data-mark-3",
      title:
        "Quer <b>reduzir riscos</b> e <b>maximizar lucros</b> na sua operação?",
      desc: "Antecipe os preços do frete com alta precisão e ajuste suas estratégias com dados confiáveis.",
      card: "price-stats",
    },
  ];
  const containerHeroContent = document.querySelector(
    "#container-hero-content"
  );
  const markers = document.querySelectorAll(".marker");

  let currentIndex = 0;
  let slideInterval;

  function updateSlide() {
    const activeCall = heroCalls[currentIndex];

    if (activeCall.card == "price-stats") {
      stats.classList.remove("hidden");
      thermometer.classList.add("hidden");
    } else {
      stats.classList.add("hidden");
      thermometer.classList.remove("hidden");
    }

    // Update title and description
    const element = `      <div class="animation-hero-entering max-w-[712px] mx-auto w-full flex flex-col items-center">
    
    <h1
      id="hero-title"
      class="text-center font-HEAD text-head32 md:text-head48 text-WHITE leading-tight font-light"
    >
      ${activeCall.title}
    </h1>
    <p
      id="hero-desc"
      class="text-center font-BODY font-normal text-body18 md:text-head24 text-WHITE mt-4 max-w-[584px]"
    >
    ${activeCall.desc}
    </p>
    <div class="flex justify-center w-full mt-12">
      <a 
        href='#fale-com-a-gente'
        class="grid place-content-center w-full md:w-auto px-8 h-[64px] bg-BLUE_PRIMARY text-WHITE font-BODY font-semibold text-body16 rounded-[4px] hover:bg-BLUE_HOVER transition-all"
      >
        Falar com especialista
      </a>
    </div>
  </div>`;

    containerHeroContent.innerHTML = element; // Update marker classes
    markers.forEach((mark) => mark.classList.remove("data-mark-active"));
    document
      .querySelector(activeCall.dataMark)
      .classList.add("data-mark-active");

    // Move to the next slide, loop back if at the end
    currentIndex = (currentIndex + 1) % heroCalls.length;
  }

  // Function to reset the slide interval
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(updateSlide, 8000);
  }

  // Add click event listeners to each marker
  markers.forEach((marker, index) => {
    marker.addEventListener("click", function () {
      currentIndex = index;
      updateSlide(); // Update slide based on the clicked marker
      resetInterval(); // Reset the interval timer
    });
  });

  // Initial update and start the interval
  updateSlide();
  slideInterval = setInterval(updateSlide, 12000);
});

function fadeOutScreen() {
  const screen = document.getElementById("entering-screen");

  setTimeout(() => {
    screen.classList.add("disable-entering");
  }, 250);
}

fadeOutScreen();

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Intersection Observer callback
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "nrotas-container") {
        const rotas = document.getElementById("nrotas");
        animateValue(rotas, 0, 31, 5000); // Trigger animation for #nrotas-container
      }
      if (entry.target.id === "nprecisao-container") {
        const precisao = document.getElementById("nprecisao");
        animateValue(precisao, 0, 91, 5000); // Trigger animation for #nprecisao-container
      }
      if (entry.target.id === "nhoras-container") {
        const horas = document.getElementById("nhoras");
        animateValue(horas, 0, 24, 5000); // Trigger animation for #nprecisao-container
      }
      observer.unobserve(entry.target); // Stop observing after animation is triggered
    }
  });
};

// Set up Intersection Observer
const observerOptions = {
  root: null, // relative to the viewport
  threshold: 0.1, // Trigger when at least 10% of the element is visible
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
const rotascontainer = document.getElementById("nrotas-container");
const precisaoContainer = document.getElementById("nprecisao-container");
const nhorascontainer = document.getElementById("nhoras-container");
console.log(nhorascontainer);
observer.observe(precisaoContainer);
observer.observe(nhorascontainer);
observer.observe(rotascontainer);
