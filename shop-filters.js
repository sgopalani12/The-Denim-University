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