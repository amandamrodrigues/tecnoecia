
  var header = document.querySelector('header');
  header.addEventListener('click', handleClick);
  

  //feedback
const stars = document.querySelectorAll('.star');
const ratingContainer = document.querySelector('.feedback');

ratingContainer.addEventListener('click', (event) => {
  const clickedStar = event.target;
  const rating = clickedStar.previousElementSibling.value;
  console.log(`Avaliação selecionada: ${rating} estrelas`);
  // Faça algo com a avaliação, como enviar para o servidor
});


const signupForm = document.getElementById('signup-form');
const users = []; // Lista para armazenar os usuários cadastrados

signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const email = emailInput.value;
  const password = passwordInput.value;

  // Cria um objeto com o email e senha e adiciona na lista de usuários
  const user = { email, password };
  users.push(user);

  // Limpa os campos do formulário
  emailInput.value = '';
  passwordInput.value = '';

  alert('Cadastro realizado com sucesso!'); // Mensagem de cadastro bem-sucedido
  // Redireciona para a tela de login
  window.location.href = 'login.html';
});
