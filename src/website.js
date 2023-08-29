import createHomepage from "./home";
import createMenu from "./menu";
import { createContact } from "./contact";



function createHeader() {
    // Create header element
    const header = document.createElement('header');

    
    // Create and append h1 to the header
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Delicious Eats!';
    header.appendChild(h1);
    
    // Append the header to the body
    document.body.prepend(header);
  }

  
function createTabs() {
    // Create nav element
    const nav = document.createElement('nav');

    
    // Create individual tabs
    const tabs = ['Home', 'Menu', 'Contact'];
    
    tabs.forEach(tab => {
      const a = document.createElement('a');
      a.textContent = tab;
      a.href = '#';
      a.id = `${tab.toLowerCase()}-tab`;
          
      nav.appendChild(a);

      if (tab === 'Menu') {

        a.addEventListener('click', createMenu);
      }

      if (tab === 'Home') {
        a.addEventListener('click', createHomepage);
      }

      if (tab === 'Contact') {
        a.addEventListener('click', createContact);
      }


    });
    
    // Append the nav after the header
    document.body.insertBefore(nav, document.getElementById('content'));
  }




function initPage () {
createHeader();
createTabs();
createHomepage();
}



export default initPage;

