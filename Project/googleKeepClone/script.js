const addButton = document.querySelector('#add');

const addNewNote = (text = '') =>{

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
        <div className="operation">
            <button className="edit"><i className="fas fa-edit"></i></button>
            <button className="delete"><i className="fas fa-trash-alt"></i></button>
        </div>
        <div className="main"></div>
        <textarea className=""></textarea>
    `;
    note.insertAdjacentHTML('afterbegin',htmlData);

    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    delButton.addEventListener('click', ()=>{
        note.remove();
    })

    document.body.appendChild(note);
}

addButton.addEventListener('click', () => addNewNote())