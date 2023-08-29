


function createMenu() {
    // Get the content div from the main HTML
    const contentDiv = document.getElementById('content');
  
    // Clear previous content
    contentDiv.innerHTML = '';
  
    // Create a div for the menu content
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';
  
    // Create and append the menu title
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Menu';
    menuDiv.appendChild(menuTitle);
  
    // Sample menu items
    const menuItems = [
      { name: 'Spaghetti Carbonara', price: '$12', description: 'Classic Roman pasta dish with eggs, cheese, and pancetta.' },
      { name: 'Chicken Parmesan', price: '$14', description: 'Breaded chicken cutlets with marinara sauce and melted Parmesan.' },
      { name: 'Veggie Burger', price: '$10', description: 'Plant-based burger served with lettuce, tomato, and vegan mayo.' },
      { name: 'Steak & Fries', price: '$22', description: 'Grilled steak served with a side of crispy fries.' }
    ];
  
    // Create and append menu items
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
  
      const name = document.createElement('h3');
      name.textContent = item.name;
      menuItem.appendChild(name);
  
      const price = document.createElement('span');
      price.textContent = item.price;
      menuItem.appendChild(price);
  
      const description = document.createElement('p');
      description.textContent = item.description;
      menuItem.appendChild(description);
  
      menuDiv.appendChild(menuItem);
    });
  
    // Append the menuDiv to the content div
    contentDiv.appendChild(menuDiv);
  }
  
  export default createMenu;
  