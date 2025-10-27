const form = document.querySelector("#formCadastro");
const listaUsuarios = document.querySelector("#listaUsuarios");

form.addEventListener("submit", function (evento) {
  evento.preventDefault(); //

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  if (nome === "" || email === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const usuarioDiv = document.createElement("div");
  usuarioDiv.classList.add("usuario-item");

  usuarioDiv.innerHTML = `
    <div>
      <strong>${nome}</strong><br>
      ${email}
    </div>
    <button class="btn-remover">Remover</button>
  `;

  const botaoRemover = usuarioDiv.querySelector(".btn-remover");
  botaoRemover.addEventListener("click", function () {
    usuarioDiv.remove();
  });

  listaUsuarios.appendChild(usuarioDiv);
  form.reset();
});
