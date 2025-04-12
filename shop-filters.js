document.addEventListener("DOMContentLoaded", () => {
    const waistFilters = document.querySelectorAll('input[name="waist"]')
    const lengthFilters = document.querySelectorAll('input[name="length"]')
    const colorFilters = document.querySelectorAll('input[name="color"')

    waistFilters.forEach((input) => {
        console.log(`these are my waist values ${input.value}`)
    })

    waistFilters.forEach((input) => {
        input.addEventListener("change", (e) => {
            console.log(`user selected ${e.target.value} waist, checked ${e.target.checked}`)
        })
    })

    lengthFilters.forEach((input) => {
        console.log(`these are my length values ${input.value}`)
    })

    lengthFilters.forEach((input) => {
        input.addEventListener("change", (e) => {
            console.log(`user selected ${e.target.value} length, checked ${e.target.checked}`)
        })
    })

    colorFilters.forEach((input) => {
        console.log(`these are my color values ${input.value}`)
    })

    colorFilters.forEach((input) => {
        input.addEventListener("change", (e) => {
            console.log(`user selected ${e.target.value} color, checked ${e.target.checked}`)
        })
    })
})

function filterItems() {
    // Get selected waist values
    const selectedWaists = Array.from(document.querySelectorAll('input[name="waist"]:checked')).map(cb => cb.value);
    
    // Get selected length values
    const selectedLengths = Array.from(document.querySelectorAll('input[name="length"]:checked')).map(cb => cb.value);
    
    // Get selected color values
    const selectedColor = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value.toLowerCase());
  
    const items = document.querySelectorAll('.shop-item');
  
    items.forEach(item => {
      // Extract waist and length
      const sizeMatch = item.textContent.match(/Size:\s*(\d+)x(\d+)/);
      if (!sizeMatch) return;
      const waist = sizeMatch[1];
      const length = sizeMatch[2];
  
      // Extract color
      const colorMatch = item.textContent.match(/Color:\s*(\w+)/i);
      const color = colorMatch ? colorMatch[1].toLowerCase() : null;
  
      // Match logic
      const waistMatch = selectedWaists.length === 0 || selectedWaists.includes(waist);
      const lengthMatch = selectedLengths.length === 0 || selectedLengths.includes(length);
      const colorMatchCheck = selectedColor.length === 0 || (color && selectedColor.includes(color));
  
      if (waistMatch && lengthMatch && colorMatchCheck) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Add change listeners for all filters (waist, length, color)
  document.querySelectorAll('input[name="waist"], input[name="length"], input[name="color"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterItems);
  });
  