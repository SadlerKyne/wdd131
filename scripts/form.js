document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            avgRating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            avgRating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            avgRating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            avgRating: 5.0
        }
    ];

    const productSelect = document.getElementById('productName');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }

    const reviewCountSpan = document.getElementById('reviewCount');
    if (reviewCountSpan) {
        let reviewsSubmitted = localStorage.getItem('reviewsSubmitted');
        if (reviewsSubmitted === null) {
            reviewsSubmitted = 0;
        }
        reviewsSubmitted = parseInt(reviewsSubmitted) + 1;
        localStorage.setItem('reviewsSubmitted', reviewsSubmitted);
        reviewCountSpan.textContent = reviewsSubmitted;
    }
});