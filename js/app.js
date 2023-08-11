const tbody = document.querySelector('tbody');
const form = document.querySelector('form');
const cardsContainer = document.querySelector('.cards-shows');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campos = [
        document.querySelector('#artista'),
        document.querySelector('#dataShow'),
        document.querySelector('#cidade'),
        document.querySelector('#localShow'),
        document.querySelector('#mediaIngresso'),
        document.querySelector('#banner')
    ];

    const tr = document.createElement('tr');
    const cardData = []; // Array para armazenar os dados deste card

    campos.forEach((campo) => {
        const td = document.createElement('td');

        if (campo.type === 'file') {
            const file = campo.files[0];
    
            if (file) {
                const src = URL.createObjectURL(file);
                td.innerHTML = `<img src="${src}" width="200">`;
                cardData.push(src);
            }
        } else {
            td.textContent = campo.value;
            cardData.push(campo.value);
        }

        tr.appendChild(td);
    })

    tbody.appendChild(tr);
    form.reset();

    cardsContainer.innerHTML +=`
        <div class="col-md-3 my-3">
            <div class="card">
                <img src="${cardData[5]}" class="card-img-top" alt="Show" height="200">
                <div class="card-body">
                    <h2 class="card-title display-6">${cardData[0]}</h2>
                    <p class="card-text lead">Data: ${cardData[1]}</p>                    
                    <a href="#" class="btn btn-danger">Comprar Ingresso</a>
                </div>
            </div>
        </div>
    `;

    // Limpar os dados deste card após inserir na página
    cardData.splice(0);
});