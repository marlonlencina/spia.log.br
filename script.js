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

console.log();

console.log("js loaded.");
btnCards.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const query = e.target.dataset.query;
    console.log(query);
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
                <div class="px-4 h-[72px] flex items-center gap-4">
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
                    class="w-full bg-BLUE_OPACITY_TABLE bg-opacity-5 grid place-content-center h-[72px] hover:bg-opacity-10 transition-all"
                  >
                    <p
                      class="font-BODY text-WHITE text-body14 font-light h-full text-center"
                    >
                     ${businessContent}
                    </p>
                  </div>
                  <div
                    class="w-full bg-GREEN_OPACITY_TABLE bg-opacity-5 grid place-content-center h-[72px] hover:bg-opacity-10 transition-all"
                  >
                    <p
                      class="font-BODY text-WHITE text-body14 font-light h-full text-center"
                    >
                      ${premiumContent}
                    </p>
                  </div>
                  <div
                    class="w-full bg-GRAY_OPACITY_TABLE bg-opacity-5 grid place-content-center h-[72px] hover:bg-opacity-10 transition-all"
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
