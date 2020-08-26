const calcular = document.querySelector("[rrtt]");

calcular.addEventListener("click", (event) => {
  event.preventDefault();
  const content = document.querySelector("#content");
  const idade = document.querySelector("#age").innerText;
  content.innerHTML += `<div class="testes">${idade}</div>`;
});
