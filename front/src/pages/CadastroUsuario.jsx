import { useState } from "react";

function CadastroUsuario() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    matricula: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/usuarios/cadastro/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert("Usuário cadastrado!");
    } else {
      alert("Erro ao cadastrar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Usuário" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="matricula" placeholder="Matrícula" onChange={handleChange} />
      <input type="password" name="password" placeholder="Senha" onChange={handleChange} />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroUsuario;
