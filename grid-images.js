export async function getJeans() {
    try {
      const response = await fetch('https://tdu-backend.vercel.app/jeans/all-jeans');
      const jeans = await response.json();
      return jeans
    } catch (error) {
      console.error('❌ Failed to fetch jeans:', error);
      return [];
    }
  } /*this whole function is 'fetching' the data & everything */


// Call this after the DOM has loaded
export async function loadGridImages() {
    const jeans = await getJeans();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    if (!id || !jeans.length) return;
  
    const item = jeans.find(j => j.id == id); // use loose comparison for flexibility
    if (!item || !item.grid_images) return;
  
    const imageUrls = item.grid_images.split(',');
  
    imageUrls.forEach((url, index) => {
      const gridDiv = document.querySelector(`.grid-image-${index + 1}`);
      if (gridDiv) {
        gridDiv.style.backgroundImage = `url(${url.trim()})`;
        gridDiv.style.backgroundSize = 'cover';
        gridDiv.style.backgroundPosition = 'center';
      }
    });
  }

  // jeans.slice(i, i + 3).forEach(item => {
  //   const div = document.createElement('div');
  //   const imagePath = item.image_link
  //   div.className = 'shop-item';
  //   div.innerHTML = `
  //       <a href="itempage.html?id=${item.id}">
  //         <img class="shop-image" src="${imagePath}" alt="${item.color}-jeans">
  //         <p class="shop-item-title">${item.title}</p>
  //         <p class="shop-item-size">Size: ${item.waist}x${item.length}</p>
  //         <p class="shop-item-price">$${item.price}</p>
  //       <a>
  //     `;
  //   row.appendChild(div);
  // });