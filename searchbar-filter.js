document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector('input[type="text"]');
    const shopItems = document.querySelectorAll('.shop-item');
    const noResultsMessage = document.getElementById("no-results");

    function filterItems() {
        const searchValue = searchBar.value.trim().toLowerCase();
        let visibleCount = 0;

        shopItems.forEach(item => {
            const itemText = item.querySelector('.shop-item-title').innerText.toLowerCase();
            if (searchValue === "" || itemText.includes(searchValue)) {
                item.style.display = "block";
                visibleCount++;
                console.log(`visibleCount: ${visibleCount}`)
            } else {
                item.style.display = "none";
            }
        });

        // Show or hide the message
        if (visibleCount === 0) {
            noResultsMessage.style.display = "block";
        } else {
            noResultsMessage.style.display = "none";
        }
    }

    searchBar.addEventListener("input", filterItems);
});
