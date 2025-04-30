document.addEventListener("DOMContentLoaded", () => {
    const colorFilter = document.querySelectorAll('input[name="color"]');
    const searchBar = document.querySelectorAll('input[type="text"]');
    c

    [...colorFilter].forEach((input) => {
        console.log(`Searching: ${input.name} - ${input.value}`)
    })

    console.log(`SEARCHING HERE: ${searchBar.value}`)
})