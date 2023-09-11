export default function Card({ image:{uri, image_description}, title, description }) {
    const card = document.createElement('div');
    card.classList = 'card';    
    card.innerHTML = `
    <img src='${uri}' alt='${image_description}'></img>
    <h3 class = 'Title-box'>${title}</h3>
    <h3 class = 'Subtitle-box'>${description}</h3>
    <button class = 'button-card'>Iniciar Curso</button>
    `;
    return card;

  }
  