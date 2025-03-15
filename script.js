document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('[data-collapse-toggle="navbar-solid-bg"]');
  const menu = document.getElementById("navbar-solid-bg");

  button.addEventListener("click", function () {
      // Alternar a visibilidade do menu
      menu.classList.toggle("hidden");

      // Atualizar o atributo aria-expanded
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);
  });

  // Fechar o menu quando clicar fora dele
  document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !button.contains(event.target)) {
          menu.classList.add("hidden");
          button.setAttribute("aria-expanded", "false");
      }
  });
});