document.addEventListener("DOMContentLoaded", () => {
    const colorFilter = document.querySelectorAll('input[name="color"]');
    const searchBar = document.querySelector('input[type="text"]');
    const shopItems = document.querySelectorAll('.shop-item');

    function filterItems() {
        const searchValue = searchBar.value.trim().toLowerCase();

        shopItems.forEach(item => {
            const itemText = item.querySelector('.shop-item-title').innerText.toLowerCase();
            if (searchValue === "" || itemText.includes(searchValue)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    searchBar.addEventListener("input", filterItems);
})