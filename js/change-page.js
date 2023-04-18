export function changePages() {
  const { pathname } = window.location;
  const { body } = document;
  const pages = document.querySelectorAll('.page')

  function pageHomeSelected() {
    body.className = 'home';
    pages[0].classList.add('selected');
    pages[1].classList.remove('selected');
    pages[2].classList.remove('selected');
  };

  function pageUniverseSelected(){
    body.className = 'universe';
    pages[0].classList.remove('selected');
    pages[1].classList.add('selected');
    pages[2].classList.remove('selected');
  }

  function pageExplorationSelected() {
    body.className = 'exploration';
    pages[0].classList.remove('selected');
    pages[1].classList.remove('selected');
    pages[2].classList.add('selected');
  }

  switch(pathname) {
    case '/':
      pageHomeSelected();
      break;

    case '/universe':
      pageUniverseSelected();
      break;

    case '/exploration':
      pageExplorationSelected();
      break;

      default:
        body.className = 'error';
        break
  }
};