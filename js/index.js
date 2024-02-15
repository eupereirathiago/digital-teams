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
    

    // listTeams.innerHTML = '';
    // listTeams.innerHTML = `
    // <li>
    //     <h4>${nome.value} <box-icon name='show'></box-icon></box-icon></h4>
    //     <h1>0 <span>\ ${capacidade.value}</span></h1>
    //     <div class="actions">
    //     <button>adicionar</button>
    //     <button><box-icon name='trash'></box-icon></button>
    //     </div>
    // </li>`;
}
