// ---- Content: edit this array to change cards on the Home page ----
const cards = [
  { id: 'gordon', title: 'Gordon Avenue Market', desc: 'Gordon Dining & Event Center \n770 W. Dayton St.', href: "gordons.html", img: "gordonss.jpg" },
  { id: 'fourlakes', title: 'Four Lakes Market', desc: 'Dejope Residence Hall \n640 Elm Drive', href: 'fourLakes.html', img: "flakes.jpg" },
  { id: 'rhetas', title: 'Rheta\'s Market', desc: 'Chadbourne Residence Hall \n420 N. Park Street', href: 'rhetas.html', img: "rhetass.jpg" },
  { id: 'carsons', title: 'Carson\'s Market', desc: 'Carson Gulley Center \n1515 Tripp Circle', href: 'carsons.html', img: "carsonss.jpg" },
  { id: 'lizs', title: 'Liz\'s Market', desc: 'Waters Residence Hall \n1200 Observatory Drive', href: 'lizs.html', img: "lizss.jpg" },
  { id: 'lowells', title: 'Lowell Market', desc: 'Lowell Center \n610 Langdon Street', href: 'lowell.html', img: "lowellss.jpg" },
];

function renderCards(data) {
    const container = document.getElementById('cards');
    if (!container) return;

    container.innerHTML = '';

    for (const c of data) {

        // WRAP THE WHOLE CARD AS A LINK
        const link = document.createElement('a');
        link.href = c.href;
        link.className = 'card-link';

        const article = document.createElement('article');
        article.className = 'card';

        // IMAGE
        const img = document.createElement('img');
        img.src = c.img;
        img.alt = c.title;
        img.className = "card__img";

        // TITLE
        const h3 = document.createElement('h3');
        h3.className = 'card__title';
        h3.textContent = c.title;

        // DESCRIPTION
        const p = document.createElement('p');
        p.className = 'card__text';
        p.textContent = c.desc;

        // Append content
        article.append(img, h3, p);
        link.appendChild(article);
        container.appendChild(link);
    }
}



function setYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
}


// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    setYear();
    renderCards(cards);
});
