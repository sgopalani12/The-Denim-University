document.addEventListener("DOMContentLoaded", () => {
    const waistFilters = document.querySelectorAll('input[name="waist"]');
    const lengthFilters = document.querySelectorAll('input[name="length"]');
    const colorFilters = document.querySelectorAll('input[name="color"]');
  
    // Log all filters on page load
    [...waistFilters, ...lengthFilters, ...colorFilters].forEach((input) => {
      console.log(`Filter available: ${input.name} - ${input.value}`);
    });
  
    // Trigger filter on change
    document.querySelectorAll('input[name="waist"], input[name="length"], input[name="color"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        console.log('Filter triggered');
        filterItems();
      });
    });
  
    function getSelectedValues(name) {
      return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(
        input => input.value.toLowerCase()
      );
    }
  
    function filterItems() {
      const selectedWaists = getSelectedValues("waist");
      const selectedLengths = getSelectedValues("length");
      const selectedColors = getSelectedValues("color");
  
      const items = document.querySelectorAll('.shop-item');
  
      items.forEach(item => {
        const sizeText = item.querySelector(".shop-item-size").textContent; // e.g., "Size: 36x32"
        const titleText = item.querySelector(".shop-item-title").textContent.toLowerCase(); // e.g., "Men's Navy Blue Denim"
  
        const sizeMatch = sizeText.match(/(\d+)x(\d+)/);
        if (!sizeMatch) return;
  
        const waist = sizeMatch[1];
        const length = sizeMatch[2];
  
        const waistMatch = selectedWaists.length === 0 || selectedWaists.includes(waist);
        const lengthMatch = selectedLengths.length === 0 || selectedLengths.includes(length);
  
        const colorMatch = selectedColors.length === 0 || selectedColors.some(color => titleText.includes(color));
  
        item.style.display = (waistMatch && lengthMatch && colorMatch) ? 'block' : 'none';
      });
    }
  });
  