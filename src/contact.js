
function createContact() {
  // Get the content div from the main HTML
  const contentDiv = document.getElementById('content');

  // Clear previous content
  contentDiv.innerHTML = '';

  // Create a div for the contact content
  const contactDiv = document.createElement('div');
  contactDiv.id = 'contact';

  // Create and append the contact title
  const contactTitle = document.createElement('h2');
  contactTitle.textContent = 'Contact Us';
  contactDiv.appendChild(contactTitle);

  // Contact information
  const address = document.createElement('p');
  address.textContent = '123 Delicious St, Food City, FC 12345';
  contactDiv.appendChild(address);

  const phone = document.createElement('p');
  phone.textContent = 'Phone: (123) 456-7890';
  contactDiv.appendChild(phone);

  const email = document.createElement('p');
  email.textContent = 'Email: info@deliciouseats.com';
  contactDiv.appendChild(email);

  // Social media links
  const socialMedia = document.createElement('div');

 const fb = document.createElement('a');
 fb.href = '#';
 fb.innerHTML = '<i class="fab fa-facebook-square"></i>';
 socialMedia.appendChild(fb);

 const ig = document.createElement('a');
 ig.href = '#';
 ig.innerHTML = '<i class="fab fa-instagram"></i>';
 socialMedia.appendChild(ig);

  contactDiv.appendChild(socialMedia);

  // Append the contactDiv to the content div
  contentDiv.appendChild(contactDiv);
}

export { createContact };
