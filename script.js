const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});

const botaoCompra = document.getElementById("botaoCompra");

botaoCompra.addEventListener("click", (event) => {
  const href = botaoCompra.getAttribute("href");

  if (href === "https://pay.kiwify.com.br/9eVHyJD") {
    event.preventDefault();
    alert("Adicione seu link de checkout no arquivo index.html antes de publicar o site.");
  }
});
