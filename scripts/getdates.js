// (Inside scripts/getdates.js)
document.addEventListener('DOMContentLoaded', function() {

    // For the copyright year
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // For the last modified date
    const lastModifiedDate = document.lastModified;
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        // You can add a prefix like "Last Modified: " if you want, or just the date.
        // The request said "You do not need to alter the document.lastModified native format."
        // So, directly outputting it is fine.
        lastModifiedParagraph.textContent = "Last Modified: " + lastModifiedDate;
    }

});