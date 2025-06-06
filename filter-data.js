export async function getColors() {
    try {
      const response = await fetch('https://tdu-backend.vercel.app/jeans/all-jeans');
      const jeans = await response.json();
  
      const getColors = [
        ...new Set(
          jeans
            .filter(item => item.color) // remove undefined/null
            .map(item => item.color.trim())
        ),
      ];
  
      return getColors;
    } catch (error) {
      console.error('❌ Failed to fetch colors:', error);
      return [];
    }
  }
  
  export function populateColorDropdown(colors) {
    const colorMenu = document.querySelectorAll('.dropdown-menu')[0];
    if (!colorMenu) return;
  
    colorMenu.innerHTML = ''; // Clear existing items
  
    colors.forEach(color => {
      const li = document.createElement('li');
      li.innerHTML = `
        <label>
          <input type="checkbox" name="color" value="${color.toLowerCase()}"> ${color}
        </label>
      `;
      colorMenu.appendChild(li);
    });
  }