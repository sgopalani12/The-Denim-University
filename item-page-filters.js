document.addEventListener("DOMContentLoaded", () => {
    const waistFilters = document.querySelectorAll('label [name="waist"]');
    const lengthFilters = document.querySelectorAll('label [name="length"]');
    const colorFilters = document.querySelectorAll('label [name="color"]');

    // Log all filters on page load
    [...waistFilters, ...lengthFilters, ...colorFilters].forEach((input) => {
        console.log(`Filter available: ${input.name} - ${input.value}`);
    });
});

const checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener('change', function () {
    if (this.checked) {
        console.log("Checkbox is checked..");
    } else {
        console.log("Checkbox is not checked..");
    }
});