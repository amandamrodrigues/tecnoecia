const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const email = emailInput.value;
  const password = passwordInput.value;

  // Verifica se o email e senha estão na lista de usuários cadastrados
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert('Login bem-sucedido!'); // Mensagem de login bem-sucedido
    // Redireciona para a página inicial do site
    window.location.href = 'index.html';
  } else {
    alert('Email ou senha inválidos!'); // Mensagem de erro de login
  }
});
