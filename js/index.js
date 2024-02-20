let teams = [];

criarbtn.onclick = () => {
  
    overlay.classList.add('show');
    formcriar.classList.add('show');

}

btnClose.onclick = () => {
    overlay.classList.remove('show');
    formcriar.classList.remove('show');
}

overlay.onclick = () => {
    overlay.classList.remove('show');
    formcriar.classList.remove('show');
}

formcriar.onsubmit = () => {
    event.preventDefault();
    teams.push({
        name: nome.value,
        capacity: capacidade.value,
        members:[]
    });
    adicionarCards();
    overlay.classList.remove('show');
    formcriar.classList.remove('show');
    
}

function adicionarCards(){
    listTeams.innerHTML = '';
    for(let i = 0; i < teams.length; i++){
        listTeams.innerHTML += `
        <li>
            <h4>${teams[i].name} <box-icon name='show'></box-icon></box-icon></h4>
            <h1>0 <span>/ ${teams[i].capacity}</span></h1>
            <div class="actions">
            <button>adicionar</button>
            <button><box-icon name='trash'></box-icon></button>
            </div>
        </li>`;
    }
}

    