export default function Header({title, subtitle}) {
    const header = document.createElement('header');
    header.classList = 'header'
    header.innerHTML = `
        <h1 class='header-title'>${title}</h1>
        <h2 class ='header-subtitle'>${subtitle}</h2>
    `
    return header;
}