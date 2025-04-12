document.addEventListener("DOMContentLoaded", () => {
    const waistFilters = document.querySelectorAll('input[name="waist"]')
    const lengthFilters = document.querySelectorAll('input[name="length"]')

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
})

function filterItems() {
    const selectedWaists = Array.from(document.querySelectorAll('input[name="waist"]:checked')).map(cb => cb.value);
    const selectedLengths = Array.from(document.querySelectorAll('input[name="length"]:checked')).map(cb => cb.value);
  
    const items = document.querySelectorAll('.shop-item');
    items.forEach(item => {
        const sizeText = item.textContent.match(/Size:\s*(\d+)x(\d+)/);
        if (!sizeText) return;
    
        const waist = sizeText[1];
        const length = sizeText[2];
    
        const waistMatch = selectedWaists.length === 0 || selectedWaists.includes(waist);
        const lengthMatch = selectedLengths.length === 0 || selectedLengths.includes(length);
    
        if (waistMatch && lengthMatch) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    // Attach change listeners
    document.querySelectorAll('input[name="waist"], input[name="length"]').forEach(checkbox => {
      checkbox.addEventListener('change', filterItems);
    });