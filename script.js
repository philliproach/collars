        // Color selection for products
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', function() {
                // Find all siblings and remove selected class
                const siblings = this.parentElement.querySelectorAll('.color-option');
                siblings.forEach(sib => sib.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Get color name
                const colorName = this.getAttribute('data-color');
                const productCard = this.closest('.product-card');
                const productTitle = productCard.querySelector('.product-title').textContent;
                
                // Show confirmation
                alert(`Selected ${colorName} for ${productTitle}`);
            });
        });
        
        // Quick view functionality
        document.querySelectorAll('.quick-view').forEach(button => {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productId = productCard.getAttribute('data-product-id');
                const productTitle = productCard.querySelector('.product-title').textContent;
                const productDescription = productCard.querySelector('.product-description').textContent;
                const productPrice = productCard.querySelector('.product-price').textContent;
                
                // Populate modal
                document.getElementById('modalTitle').textContent = productTitle;
                
                // Create content for modal
                const selectedColor = productCard.querySelector('.color-option.selected').getAttribute('data-color');
                const content = `
                    <p>${productDescription}</p>
                    <p><strong>Price:</strong> ${productPrice}</p>
                    <p><strong>Selected Color:</strong> ${selectedColor}</p>
                    <hr style="margin: 20px 0;">
                    <div style="margin-top: 20px;">
                        <p><strong>Sizing Information:</strong></p>
                        <ul style="margin-left: 20px;">
                            <li>Measure around your pet's neck where the collar sits</li>
                            <li>Add 2 inches for comfort</li>
                            <li>All collars have 5 adjustment holes</li>
                        </ul>
                    </div>
                    <button class="btn" style="margin-top: 20px; width: 100%; background-color: var(--primary-color); color: white;">Add to Cart</button>
                `;
                
                document.getElementById('modalContent').innerHTML = content;
                
                // Show modal
                document.getElementById('productModal').style.display = 'flex';
            });
        });
        
        // Close modal
        document.querySelector('.close-modal').addEventListener('click', function() {
            document.getElementById('productModal').style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('productModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Contact form functionality
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
                this.reset();
            } else {
                alert('Please fill all required fields.');
            }
        });
        
        // Image navigation (simulated)
        document.querySelectorAll('.prev-image, .next-image').forEach(button => {
            button.addEventListener('click', function() {
                const direction = this.classList.contains('prev-image') ? 'previous' : 'next';
                alert(`Showing ${direction} image (feature in development)`);
            });
        });
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Dark mode toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.textContent = '☀️';
            } else {
                themeIcon.textContent = '🌙';
            }
        });
        
        // Show elements as they scroll into view (simple animation)
        const animateOnScroll = () => {
            const cards = document.querySelectorAll('.product-card, .about-content, .contact-form');
            
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardTop < windowHeight - 100) {
                    card.style.opacity = '1';
                }
            });
        };
        
        // Set initial opacity
        document.querySelectorAll('.product-card, .about-content, .contact-form').forEach(element => {
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.5s ease-in-out';
        });
        
        // Run on scroll
        window.addEventListener('scroll', animateOnScroll);
        
        // Run once on load
        window.addEventListener('load', animateOnScroll);
