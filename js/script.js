// ========================================
// AGENTCRAFT COLLECTIBLES STORE - SCRIPT
// ========================================

// ===== ESPERAR A QUE EL DOM ESTÉ CARGADO =====
document.addEventListener('DOMContentLoaded', function () {

    // ===== HAMBURGER MENU TOGGLE =====
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function toggleMenu() {
        if (hamburgerBtn) hamburgerBtn.classList.toggle('active');
        if (hamburgerMenu) hamburgerMenu.classList.toggle('active');
        if (menuOverlay) menuOverlay.classList.toggle('active');
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', function () {
            if (hamburgerMenu && hamburgerMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    }

    // ===== HORIZONTAL SCROLL SUAVE PARA PRODUCTOS DESTACADOS =====
    const productsScroll = document.querySelector('.products-scroll');

    if (productsScroll) {
        // Scroll horizontal con rueda del ratón
        productsScroll.addEventListener('wheel', function (e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                productsScroll.scrollLeft += e.deltaY;
            }
        });
    }

    // ===== FILTRADO DE PRODUCTOS POR CATEGORÍA =====
    const categoryItems = document.querySelectorAll('.category-item');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (category === 'all' || cardCategory === category) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }

    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            categoryItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');
            filterProducts(selectedCategory);

            if (hamburgerMenu && hamburgerMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // ===== SMOOTH SCROLL PARA ENLACES INTERNOS =====
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===== FUNCIONALIDAD DE BÚSQUEDA =====
    const searchForms = document.querySelectorAll('.search-form');

    searchForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            const searchTerm = searchInput.value.toLowerCase().trim();

            if (searchTerm) {
                let foundProducts = 0;

                productCards.forEach(card => {
                    const productName = card.querySelector('.product-name').textContent.toLowerCase();

                    if (productName.includes(searchTerm)) {
                        card.style.display = 'flex';
                        foundProducts++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (foundProducts === 0) {
                    alert(`No se encontraron productos para "${searchTerm}"`);
                    productCards.forEach(card => {
                        card.style.display = 'flex';
                    });
                }
            }
        });
    });

    // ===== ANIMACIÓN CSS PARA FADE IN =====
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);

});

// ===== CONSOLA DE BIENVENIDA =====
console.log('%cAgentCraft Collectibles Store', 'color: #9A48D0; font-size: 24px; font-weight: bold;');
console.log('%cWebsite loaded successfully! 🎮', 'color: #BED149; font-size: 16px;');
