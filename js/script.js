// ========================================
// AGENTCRAFT COLLECTIBLES STORE - SCRIPT
// ========================================

(function() {
    'use strict';

    // ===== DOM ELEMENTS =====
    const elements = {
        hamburgerBtn: document.getElementById('hamburgerBtn'),
        hamburgerMenu: document.getElementById('hamburgerMenu'),
        menuOverlay: document.getElementById('menuOverlay'),
        closeMenuBtn: document.getElementById('closeMenuBtn'),
        productsScroll: document.querySelector('.products-scroll'),
        categoryItems: document.querySelectorAll('.category-item'),
        productCards: document.querySelectorAll('.product-card'),
        smoothScrollLinks: document.querySelectorAll('a[href^="#"]'),
        searchForms: document.querySelectorAll('.search-form, .search-form-mobile')
    };

    // ===== HAMBURGER MENU =====
    const MenuHandler = {
        toggle() {
            const { hamburgerBtn, hamburgerMenu, menuOverlay } = elements;
            hamburgerBtn?.classList.toggle('active');
            hamburgerMenu?.classList.toggle('active');
            menuOverlay?.classList.toggle('active');
        },

        close() {
            if (elements.hamburgerMenu?.classList.contains('active')) {
                this.toggle();
            }
        },

        init() {
            const { hamburgerBtn, closeMenuBtn, menuOverlay } = elements;
            
            hamburgerBtn?.addEventListener('click', () => this.toggle());
            closeMenuBtn?.addEventListener('click', () => this.close());
            menuOverlay?.addEventListener('click', () => this.close());
        }
    };

    // ===== PRODUCTS SCROLL =====
    const ProductsScrollHandler = {
        init() {
            const { productsScroll } = elements;
            
            if (productsScroll) {
                productsScroll.addEventListener('wheel', (e) => {
                    if (e.deltaY !== 0) {
                        e.preventDefault();
                        productsScroll.scrollLeft += e.deltaY;
                    }
                });
            }
        }
    };

    // ===== CATEGORY FILTER =====
    const CategoryFilterHandler = {
        filterProducts(category) {
            elements.productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const shouldShow = category === 'all' || cardCategory === category;
                
                card.style.display = shouldShow ? 'flex' : 'none';
                if (shouldShow) {
                    card.style.animation = 'fadeIn 0.5s ease';
                }
            });
        },

        init() {
            elements.categoryItems.forEach(item => {
                item.addEventListener('click', function() {
                    // Update active state
                    elements.categoryItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');

                    // Filter products
                    const selectedCategory = this.getAttribute('data-category');
                    CategoryFilterHandler.filterProducts(selectedCategory);

                    // Close mobile menu
                    MenuHandler.close();
                });
            });
        }
    };

    // ===== SMOOTH SCROLL =====
    const SmoothScrollHandler = {
        init() {
            elements.smoothScrollLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');

                    if (href !== '#') {
                        e.preventDefault();
                        const targetId = href.substring(1);
                        const targetElement = document.getElementById(targetId);

                        targetElement?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    };

    // ===== SEARCH =====
    const SearchHandler = {
        showProducts() {
            elements.productCards.forEach(card => {
                card.style.display = 'flex';
            });
        },

        search(searchTerm) {
            let foundProducts = 0;

            elements.productCards.forEach(card => {
                const productName = card.querySelector('.product-name')?.textContent.toLowerCase();
                
                if (productName?.includes(searchTerm)) {
                    card.style.display = 'flex';
                    foundProducts++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (foundProducts === 0) {
                alert(`No se encontraron productos para "${searchTerm}"`);
                this.showProducts();
            }

            MenuHandler.close();
        },

        init() {
            elements.searchForms.forEach(form => {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const searchInput = form.querySelector('input[type="search"]');
                    const searchTerm = searchInput?.value.toLowerCase().trim();

                    if (searchTerm) {
                        this.search(searchTerm);
                    }
                });
            });
        }
    };

    // ===== INITIALIZATION =====
    function init() {
        MenuHandler.init();
        ProductsScrollHandler.init();
        CategoryFilterHandler.init();
        SmoothScrollHandler.init();
        SearchHandler.init();

        // Console welcome message
        console.log('%cAgentCraft Collectibles Store', 'color: #9A48D0; font-size: 24px; font-weight: bold;');
        console.log('%cWebsite loaded successfully! 🎮', 'color: #BED149; font-size: 16px;');
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
