


function createHomepage() {
    // Get the content div from the main HTML
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';
  
    // Create a div for the homepage content
    const homepageDiv = document.createElement('div');
    homepageDiv.id = 'homepage';
  
    // Create and append the tagline
    const tagline = document.createElement('p');
    tagline.id = 'tagline';
    tagline.textContent = 'A contemporary restaurant with a mind to source local, seasonal ingredients, to create food inspired from around the world. Terry, Paul, and Brandon are travelers and foodies. We love rich intense flavors, fresh products, and spice, yet... we understand that we live in Red Deer and people here also enjoy comfort food.';
    
    homepageDiv.appendChild(tagline);
  
    // Append the homepageDiv to the content div
    contentDiv.appendChild(homepageDiv);
  }
  
  export default createHomepage;
  