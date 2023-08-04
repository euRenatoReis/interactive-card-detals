
const entradas = document.querySelectorAll('.entrada');
const btConfirme = document.querySelector('.botao-confirmar');
const aviso = document.querySelectorAll('.aviso');
const telaComplete = document.querySelector('.complete-state-start');


btConfirme.addEventListener('click', () => {

  entradas.forEach((entrada, index) => {


    aviso[index].innerHTML = '';

    if (entrada.value === '') {

      aviso[index].innerHTML = `Can't Be Blank`;
      entrada.classList.add('negative');
      entrada.classList.remove('correct');

    } else {

      entrada.classList.remove('negative');
      entrada.classList.add('correct');

      if (entrada === entradas[0]) {

        if (!isNaN(entrada.value)) {

          aviso[index].innerHTML = `wrong format, letters only`;
          entrada.classList.add('negative');
          entrada.classList.remove('correct');


        } else {

          entrada.classList.remove('negative');
          entrada.classList.add('correct');


        }

      } else {

        if (isNaN(entrada.value)) {
          aviso[index].innerHTML = `wrong format, numbers only`;
          entrada.classList.add('negative');
          entrada.classList.remove('correct');


        } else {

          entrada.classList.remove('negative');
          entrada.classList.add('correct');

        }

      }

    }

  });

  const mapeados = entradas.map((entrada) => {

    return entrada.classList.contains('correct');
  })

  console.log(mapeados)

  if (mapeados.length === 5) {

    telaComplete.classList.add('open');
    document.querySelector('.div-formulario').remove();

    console.log('entrou no teste')
  }


});



