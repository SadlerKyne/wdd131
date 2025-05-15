
document.addEventListener('DOMContentLoaded', function() {


    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }


    const lastModifiedDate = document.lastModified;
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {

        lastModifiedParagraph.textContent = "Last Modified: " + lastModifiedDate;
    }

});