// Obtenir une référence à l'élément <body>
const body = document.body;

// Obtenir les références à l'icône de la lune (commutateur de thème) et à l'icône de menu hamburger
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');

// Fonction pour ajouter des classes liées au thème au body et à l'icône
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

// Obtenir les paramètres du thème depuis le stockage local
const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

// Appliquer les paramètres du thème stockés
addThemeClass(getBodyTheme, getBtnTheme);

// Fonction pour vérifier si le thème actuel est sombre
const isDark = () => body.classList.contains('dark');

// Fonction pour définir le thème et mettre à jour le stockage local
const setTheme = (bodyClass, btnClass) => {
  // Supprimer les classes de thème précédemment appliquées
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  // Appliquer les nouvelles classes de thème
  addThemeClass(bodyClass, btnClass);

  // Stocker les paramètres du thème dans le stockage local
  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

// Fonction pour basculer entre les thèmes sombre et clair
const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

// Ajouter un écouteur d'événements à l'icône de commutation de thème
btnTheme.addEventListener('click', toggleTheme);

// Fonction pour afficher/masquer la liste de navigation lorsque l'icône de menu hamburger est cliquée
const displayList = () => {
  const navUl = document.querySelector('.nav__list');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

// Ajouter un écouteur d'événements à l'icône de menu hamburger
btnHamburger.addEventListener('click', displayList);

// Fonction pour afficher/masquer le bouton de retour en haut de page
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

// Ajouter un écouteur d'événements de défilement pour afficher/masquer le bouton de retour en haut de page
document.addEventListener('scroll', scrollUp);

