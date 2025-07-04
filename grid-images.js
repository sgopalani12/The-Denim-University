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