const transportData = [
  {
    localOrigin: "Porto Alegre - RS",
    localDestiny: "São Paulo - SP",
    transportWeight: "Tonelada(s)",
    transportWeightValue: 4,
    distance: "KM",
    distanceValue: 1253,
    time: "16h14min",
    tonPrice: 192,
    price: 10500,
    map: "./assets/florianopolis-to-belo-horizonte-map.svg",
  },
  {
    localOrigin: "Belo Horizonte - MG",
    localDestiny: "Florianopólis - SC",
    transportWeight: "Tonelada(s)",
    transportWeightValue: 3,
    distance: "KM",
    distanceValue: 984,
    time: "12h30min",
    tonPrice: 120,
    price: 5200,
    map: "./assets/florianopolis-to-belo-horizonte-map.svg",
  },
];

function formatToBRL(value) {
  // Ensure the value is a number and fix to 2 decimal places
  let number = parseFloat(value).toFixed(2);

  // Replace dot with comma for decimal separator and add thousand separator
  return number
    .replace(".", ",") // First replace the decimal point with a comma
    .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Add thousand separators
}

const containerCardPrice = document.querySelector("#container-card-price");
const containerCardMap = document.querySelector("#container-card-map");

const loadingElement = `<div class="animation-card-stats flex flex-col rounded-xl border border-WHITE border-opacity-5 md:max-w-[488px] w-full h-[256px] hover:border-opacity-10 transition-all hover:scale-105 overflow-hidden">
    <div class="p-6 flex-1">
      <div class="flex items-center gap-2">
        <img src="./assets/logomark.svg" alt="" />
        <p class="font-HEAD text-body18 text-WHITE font-thin">Precificação feita por Inteligência Artificial</p>
      </div>
      <div class="h-full grid place-content-center">
        <span class="loader"></span>
      </div>
    </div>
  </div>`;

const loadingElementMap = `
<div
            class="animation-card-stats-inverse overflow-hidden flex flex-col md:flex-row items-stretch max-w-[696px] rounded-lg border border-WHITE border-opacity-5 bg-opacity-5 w-full md:h-[256px] hover:border-opacity-10 transition-all hover:scale-105"
          >
            <div
              class="pointer-events-none w-full h-[256px] grid place-content-center"
            >
              <span class="loader"></span>
            </div>
          </div>`;

let currentIndex = 0;

// Function to update the card content with actual data
function updateCardContent() {
  const activeTransport = transportData[currentIndex];

  const elementPriceStats = `
    <div class="animation-card-stats flex flex-col rounded-xl border border-WHITE border-opacity-5 w-full md:h-[256px] hover:border-opacity-10 transition-all hover:scale-105 overflow-hidden"> 
      <div class="p-6 flex-1">
        <div class="flex items-center gap-2">
          <img src="./assets/logomark.svg" alt="" />
          <p class="font-HEAD text-body18 text-WHITE font-thin">
            Precificação feita por Inteligência Artificial
          </p>
        </div>
        <div class="mt-6 flex items-center justify-between gap-4">
          <div id="local-origin" class="flex flex-col gap-1">
            <span class="font-BODY text-WHITE text-opacity-45 text-body14 font-light">Ponto de origem</span>
            <p class="font-BODY text-WHITE text-body14 font-light">${activeTransport.localOrigin}</p>
          </div>
          <div id="local-destiny" class="flex flex-col gap-1">
            <span class="font-BODY text-WHITE text-opacity-45 text-body14 font-light">Ponto de destino</span>
            <p class="font-BODY text-WHITE text-body14 font-light">${activeTransport.localDestiny}</p>
          </div>
          <div id="transport-weight" class="flex flex-col gap-1">
            <span class="font-BODY text-WHITE text-opacity-45 text-body14 font-light">Peso (t)</span>
            <p class="font-BODY text-WHITE text-body14 font-light">${activeTransport.transportWeightValue} Toneladas</p>
          </div>
        </div>
      </div>
      <div class="p-6 md:px-6 flex-1 bg-WHITE bg-opacity-5 flex items-center w-full">
        <div class="flex items-center justify-between gap-4 w-full">
          <div id="local-distance" class="flex flex-col gap-1">
            <span class="font-BODY text-WHITE text-opacity-45 text-body14 font-light">Distância (Km)</span>
            <p class="font-BODY text-WHITE text-body14 font-light">${activeTransport.distanceValue}Km</p>
          </div>
          <div class="flex flex-col gap-1">
            <span id="transport-time" class="font-BODY text-WHITE text-opacity-45 text-body14 font-light">Tempo estimado</span>
            <p class="font-BODY text-WHITE text-body14 font-light">${activeTransport.time}</p>
          </div>
          <div id="ton-value" class="flex flex-col gap-1">
            <span class="font-BODY text-WHITE text-opacity-45 text-body14 font-light">Valor (P/t)</span>
            <p class="font-BODY text-WHITE text-body14 font-light">
              R$ ${activeTransport.tonPrice} 
              <span class="text-sm12 text-WHITE text-opacity-45">/tonelada</span>
            </p>
          </div>
        </div>
      </div>
    </div>`;

  const elementMap = `<div class="animation-card-stats-inverse overflow-hidden flex flex-col md:flex-row items-stretch max-w-[696px] rounded-lg border border-WHITE border-opacity-5 bg-opacity-5 w-full md:h-[256px] hover:border-opacity-10 transition-all hover:scale-105"
        >
          <div class="bg-WHITE bg-opacity-5 w-full h-[256px]">
            <div class="pointer-events-none w-full relative h-[256px]">
              <img
                src="./assets/florianopolis-to-belo-horizonte-map.svg"
                alt=""
              />
              <div
                class="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-[#111111] to-[#11111100]"
              >
                <div>
                  <span
                    class="font-BODY text-WHITE text-sm12 font-normal uppercase"
                    >Valor (R$)</span
                  >
                  <div id="transport-price" class="flex items-center gap-3">
                    <span class="font-BODY text-head32 text-WHITE font-medium"
                      >R$</span
                    >
                    <p class="font-BODY text-head32 text-WHITE font-light">
                      ${formatToBRL(activeTransport.price)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-6 h-[256px]">
            <div class="flex flex-col w-full relative overflow-hidden">
              <div>
                <p class="font-BODY text-WHITE font-light text-body18">
                  Predição dos próximos 90 dias
                </p>
                <span
                  class="font-BODY text-WHITE text-opacity-45 font-light text-body14"
                  >Baseada em dados reais</span
                >
              </div>
              <div>
                <img src="./assets/chart-tendencia.svg" alt="" srcset="" />
              </div>
              <div
                class="flex items-center gap-4 absolute w-full bg-WHITE bg-opacity-5 bottom-4 md:bottom-0 backdrop-blur-sm rounded-[4px] overflow-hidden"
              >
                <div
                  class="h-[64px] w-[64px] bg-BLUE_PRIMARY grid place-content-center shrink-0"
                >
                  <iconify-icon
                    class="text-head24 text-WHITE"
                    icon="solar:chat-round-money-linear"
                  ></iconify-icon>
                </div>
                <div>
                  <p class="font-BODY text-WHITE text-body14 font-normal">
                    Tendência de <b>aumento</b>
                  </p>
                  <span
                    class="font-BODY text-WHITE text-opacity-45 text-sm12 font-light"
                    >Previsão aumento nos próximos 7 dias</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>`;

  containerCardPrice.innerHTML = elementPriceStats;
  containerCardMap.innerHTML = elementMap;

  // Move to the next transport data, loop back if at the end
  currentIndex = (currentIndex + 1) % transportData.length;
}

// Function to start with the loading element, then load actual content
function startLoadingAndSwitch() {
  // Show loading element
  containerCardPrice.innerHTML = loadingElement;
  containerCardMap.innerHTML = loadingElementMap;

  // After a delay (e.g., 3 seconds), replace the loading element with actual content
  setTimeout(() => {
    updateCardContent();
    // Optionally, you can start a recurring interval to automatically update the content
    setInterval(updateCardContent, 8000); // Update every 8 seconds
  }, 1000); // 3 seconds delay
}

document.addEventListener("DOMContentLoaded", function () {
  startLoadingAndSwitch(); // Initial loading
});
