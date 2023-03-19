const infoSection = document.querySelectorAll('.info');

// 1

/* Wähle die `header` aus, die der Überschrift `h1` am nächsten steht. Gib der `header` einen festen Rahmen von 5px. ![alt text](images/header.png "Header") */

const addTitle = () => {
  const heading = document.querySelector('.heading');
  heading.closest('header').style.border = '5px solid grey';
};

addTitle();

// 2
/* Wenn der Abschnitt `.info` ein Element mit der Klasse `.info-package` enthält, wähle alle `.package-title` Elemente aus und gib dem jeweils vorhergehenden Geschwisterelement einen Rahmen. */


const addInfoBorder = () => {

  infoSection.forEach((section) => {
    const packageTitle = section.querySelectorAll('.package-title');
    packageTitle.forEach((title) => {
      title.previousElementSibling.style.border = '2px solid #072F5F';
    });
  });
};

addInfoBorder();

// 3

/* Prüfe für jedes Info-Label, ob es mit dem Selektor `.mild` übereinstimmt. Wenn ja, erhält das Label einen `yellow` solid Rahmen. Wenn das Label auf den Selektor `.intense` zutrifft, erhält es einen `orange` solid Rahmen. Stimmt die Klasse mit keiner der beiden Klassen überein, erhält die Beschriftung einen roten, durchgehenden Rahmen. */

const addLabelBorder = () => {
  const border = '3px solid';

  infoSection.forEach((section) => {
    const mild = section.querySelector('.mild');
    mild.style.borderBottom = `${border} yellow`;

    const intense = section.querySelector('.intense');
    intense.style.borderBottom = `${border} orange`;

    const extreme = section.querySelector('.extreme');
    extreme.style.borderBottom = `${border} red`;
  });
};

addLabelBorder();

// 4

/* Füge eine Kopie aller untergeordneten Elemente von `.nav-list` zur `.site-map` der Fußzeile hinzu. Hinweis: Die `.nav-list` sollte ihre Kinder behalten. */

const appendNavChildrenToFooter = () => {
  const navList = document.querySelector('.nav-list');
  const siteMap = document.querySelector('.site-map');
  const navChildren = Array.from(navList.children);

  navChildren.forEach((child) => {
    siteMap.appendChild(child.cloneNode(true));
  });
};
appendNavChildrenToFooter();
