        function toggleMenu() {
            document.querySelector('.nav-links').classList.toggle('active');
        }

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.08)';
            } else {
                header.style.boxShadow = 'none';
            }
        });

        // Scroll animations with Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
            observer.observe(el);
        });

        // Add animation classes to sections
        document.querySelectorAll('.service-card').forEach((card, i) => {
            card.classList.add('fade-in');
            card.style.transitionDelay = `${i * 0.1}s`;
            observer.observe(card);
        });

        document.querySelectorAll('.feature-item').forEach((item, i) => {
            item.classList.add('fade-in');
            item.style.transitionDelay = `${i * 0.1}s`;
            observer.observe(item);
        });

        document.querySelectorAll('.testimonial-card').forEach((card, i) => {
            card.classList.add('fade-in');
            card.style.transitionDelay = `${i * 0.1}s`;
            observer.observe(card);
        });

        document.querySelectorAll('.trust-item').forEach((item, i) => {
            item.classList.add('fade-in');
            item.style.transitionDelay = `${i * 0.05}s`;
            observer.observe(item);
        });
    </script>
