document.addEventListener('DOMContentLoaded', () => {
    const temples = [
      {
        templeName: "Anchorage Alaska",
        location: "Anchorage, Alaska, United States",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl: "images/alaska-temple.webp"
      },
      {
        templeName: "Austin Texas",
        location: "Austin, Texas, United States",
        dedicated: "9999, January, 1",
        area: 30000,
        imageUrl: "images/austin-temple.webp"
      },
      {
        templeName: "Cody Wyoming",
        location: "Cody, Wyoming, United States",
        dedicated: "9999, January, 1",
        area: 9900,
        imageUrl: "images/cody-wyoming.webp"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Meridian Idaho",
        location: "Meridian, Idaho, United States",
        dedicated: "2017, November, 19",
        area: 67696,
        imageUrl: "images/meridian-temple.webp"
      },
      {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, United States",
        dedicated: "1927, October, 23",
        area: 113916,
        imageUrl: "images/mesa-temple.webp"
      },
      {
        templeName: "Montpelier Idaho",
        location: "Montpelier, Idaho, United States",
        dedicated: "9999, January, 1",
        area: 27000,
        imageUrl: "images/montpelier-idaho.webp"
      },
      {
        templeName: "Hamilton New Zealand",
        location: "Hamilton, New Zealand",
        dedicated: "1958, April, 20",
        area: 45000,
        imageUrl: "images/nz-temple.webp"
      },
      {
        templeName: "Oquirrh Mountain Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "2009, August, 21",
        area: 60000,
        imageUrl: "images/oquirrh-temple.webp"
      },
      {
        templeName: "Seoul Korea",
        location: "Seoul, South Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        imageUrl: "images/seoul-korea.webp"
      },
      {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "images/provo-temple.webp"
      },
      {
        templeName: "Laie Hawaii",
        location: "Laie, Oahu, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 47224,
        imageUrl: "images/laie-temple.webp"
      },
      {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "images/logan-temple.webp"
      }
    ];

    const templeGridContainer = document.getElementById('temple-grid-container');
    const pageTitleElement = document.getElementById('page-title');

    function createTempleCard(temple) {
        const card = document.createElement('figure');
        
        const name = document.createElement('h3');
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement('p');
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement('p');
        let dedicationText = temple.dedicated;
        if (new Date(temple.dedicated).getFullYear() === 9999) {
            dedicationText = "Announced";
        }
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${dedicationText}`;
        card.appendChild(dedicated);

        const area = document.createElement('p');
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;
        card.appendChild(area);

        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = 'lazy';
        card.appendChild(image);

        return card;
    }

    function displayTemples(filteredTemples, title) {
        templeGridContainer.innerHTML = '';
        pageTitleElement.textContent = title;
        filteredTemples.forEach(temple => {
            const card = createTempleCard(temple);
            templeGridContainer.appendChild(card);
        });
    }

    document.getElementById('nav-home').addEventListener('click', (e) => {
        e.preventDefault();
        displayTemples(temples, "Home");
    });

    document.getElementById('nav-old').addEventListener('click', (e) => {
        e.preventDefault();
        const oldTemples = temples.filter(temple => {
            const year = new Date(temple.dedicated).getFullYear();
            return year < 1900 && year !== 9999;
        });
        displayTemples(oldTemples, "Old Temples (Dedicated before 1900)");
    });

    document.getElementById('nav-new').addEventListener('click', (e) => {
        e.preventDefault();
        const newTemples = temples.filter(temple => {
            const year = new Date(temple.dedicated).getFullYear();
            return year > 2000 && year !== 9999;
        });
        displayTemples(newTemples, "New Temples (Dedicated after 2000)");
    });

    document.getElementById('nav-large').addEventListener('click', (e) => {
        e.preventDefault();
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples, "Large Temples (Over 90,000 sq ft)");
    });

    document.getElementById('nav-small').addEventListener('click', (e) => {
        e.preventDefault();
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples, "Small Temples (Under 10,000 sq ft)");
    });

    const menuButton = document.getElementById('menu-button');
    const navMenu = document.querySelector('header nav ul');

    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        if (navMenu.classList.contains('open')) {
            menuButton.textContent = '✖';
        } else {
            menuButton.textContent = '☰';
        }
    });

    displayTemples(temples, "Home");
});