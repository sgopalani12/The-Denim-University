  export async function getJeans() {
    try {
        const response = await fetch('https://tdu-backend.vercel.app/jeans/all-jeans');
        const jeans = await response.json();
        return jeans
    } catch(error) {
        console.error('❌ Failed to fetch jeans:', error);
      return [];
    }
  } /*this whole function is 'fetching' the data & everything from line 12 -> will take data and put it in the correct classes, start with hardcode, then you create the backend, then fetch from backend*/
  
  export function renderShopItems(jeans) {
    const container = document.querySelector('.shop-item-container');
    const noResults = document.getElementById('no-results');
    const existingRows = container.querySelectorAll('.shop-item-row');
    existingRows.forEach(row => row.remove()); // Clear previous items
  
    if (jeans.length === 0) {
      noResults.style.display = 'block';
      return;
    }
  
    noResults.style.display = 'none';
  
    // Chunk jeans into rows of 3
    for (let i = 0; i < jeans.length; i += 3) {
      const row = document.createElement('div');
      row.className = 'shop-item-row';
  
      jeans.slice(i, i + 3).forEach(item => {
        const div = document.createElement('div');
        const imagePath = item.image_link
        div.className = 'shop-item';
        div.innerHTML = `
          <a href="itempage.html?id=${item.id}">
            <img class="shop-image" src="${imagePath}" alt="${item.color}-jeans">
            <p class="shop-item-title">${item.title}</p>
            <p class="shop-item-size">Size: ${item.waist}x${item.length}</p>
            <p class="shop-item-price">$${item.price}</p>
          <a>
        `;
        row.appendChild(div);
      });
  
      container.appendChild(row);
    }
  }
