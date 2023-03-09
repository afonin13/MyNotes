let notesEl = document.querySelector('.notes');
let addBtn = document.querySelector('.note__add');

function createNote(title, text) {
  let noteEl = document.createElement('div');
  noteEl.classList.add('note');
  noteEl.innerHTML = `
    <div class="wrapper__note">
      <p id="note__title">${title}</p>
      <textarea id="note__title-input" class="hidden">${title}</textarea>
      <div>
        <button class="note__edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="note__delete"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
    <p id="note__text">${text}</p>
    <textarea id="note__textarea" class="hidden">${text}</textarea>
  `

  let editBtn = noteEl.querySelector('.note__edit');
  let deleteBtn = noteEl.querySelector('.note__delete');
  let titleEl = noteEl.querySelector('#note__title');
  let textEl = noteEl.querySelector('#note__text');
  let titleInputEl = noteEl.querySelector('#note__title-input');
  let textInputEl = noteEl.querySelector('#note__textarea');

  editBtn.addEventListener('click', (e) => {
    titleEl.classList.toggle('hidden');
    textEl.classList.toggle('hidden');

    titleInputEl.classList.toggle('hidden');
    textInputEl.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', (e) => {
    noteEl.remove();
  });

  titleInputEl.addEventListener('input', (e) => {
    titleEl.innerText = e.target.value;
  });

  textInputEl.addEventListener('input', (e) => {
    textEl.innerText = e.target.value;
  });

  return noteEl;
}

addBtn.addEventListener('click', (e) => {
  let el = createNote("Заголовок", "Ваш текст");
  notesEl.append(el);
});
