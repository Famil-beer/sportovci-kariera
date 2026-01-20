        // QUIZ DATA
        const quizQuestions = [
            {
                question: "1. Jaký typ sportu jsi dělal nejdéle?",
                options: [
                    { letter: "A", text: "Týmový (fotbal, hokej, basketbal...)", type: "A" },
                    { letter: "B", text: "Individuální (tenis, atletika, plavání...)", type: "B" },
                    { letter: "C", text: "Silový nebo estetický (gymnastika, kulturistika...)", type: "C" },
                    { letter: "D", text: "Vytrvalostní (běh, cyklistika, triatlon...)", type: "D" }
                ]
            },
            {
                question: "2. Co tě nejvíc motivovalo trénovat?",
                options: [
                    { letter: "A", text: "Soutěžení a výhra", type: "A" },
                    { letter: "B", text: "Posouvat svoje limity", type: "B" },
                    { letter: "C", text: "Předvést výkon před lidmi", type: "C" },
                    { letter: "D", text: "Udržet disciplínu a rutinu", type: "D" }
                ]
            },
            {
                question: "3. Jak reaguješ, když něco nejde podle plánu?",
                options: [
                    { letter: "A", text: "Hledám jiné řešení", type: "A" },
                    { letter: "B", text: "Potřebuju čas, abych se zklidnil", type: "B" },
                    { letter: "C", text: "Jdu dál, bez přemýšlení", type: "C" },
                    { letter: "D", text: "Zpochybňuju sebe, ale nevzdávám to", type: "D" }
                ]
            },
            {
                question: "4. Jaký vztah máš k týmu nebo okolí?",
                options: [
                    { letter: "A", text: "Jsem lídr, rád ostatní vedu", type: "A" },
                    { letter: "B", text: "Spíš se přizpůsobím", type: "B" },
                    { letter: "C", text: "Dělám si svoje, ale pomůžu, když je třeba", type: "C" },
                    { letter: "D", text: "Potřebuju jasný systém a vedení", type: "D" }
                ]
            },
            {
                question: "5. Co pro tebe znamená výkon?",
                options: [
                    { letter: "A", text: "Výsledek – číslo, skóre, výhra", type: "A" },
                    { letter: "B", text: "Růst – zlepšení oproti včera", type: "B" },
                    { letter: "C", text: "Prožitek – pocit, že dávám všechno", type: "C" },
                    { letter: "D", text: "Odpovědnost – dělat, co jsem slíbil", type: "D" }
                ]
            },
            {
                question: "6. Jak zvládáš prohry nebo zranění?",
                options: [
                    { letter: "A", text: "Rychle se otřepu", type: "A" },
                    { letter: "B", text: "Potřebuju si to zpracovat", type: "B" },
                    { letter: "C", text: "Beru to jako lekci", type: "C" },
                    { letter: "D", text: "Mám tendenci to potlačit a jít dál", type: "D" }
                ]
            },
            {
                question: "7. Kdy se cítíš 've flow'?",
                options: [
                    { letter: "A", text: "Když soutěžím", type: "A" },
                    { letter: "B", text: "Když jsem sám a soustředím se", type: "B" },
                    { letter: "C", text: "Když pomáhám druhým", type: "C" },
                    { letter: "D", text: "Když mám jasný plán a strukturu", type: "D" }
                ]
            },
            {
                question: "8. Jak se rozhoduješ mimo sport?",
                options: [
                    { letter: "A", text: "Instinktivně, rychle", type: "A" },
                    { letter: "B", text: "Po delším přemýšlení", type: "B" },
                    { letter: "C", text: "Podle pocitu správnosti", type: "C" },
                    { letter: "D", text: "Logicky, krok po kroku", type: "D" }
                ]
            },
            {
                question: "9. Jaké situace ti mimo sport nejvíc chybí?",
                options: [
                    { letter: "A", text: "Adrenalin zápasu", type: "A" },
                    { letter: "B", text: "Jasný cíl a plán", type: "B" },
                    { letter: "C", text: "Spoluhráči a týmová energie", type: "C" },
                    { letter: "D", text: "Ten pocit, že dělám pokrok", type: "D" }
                ]
            },
            {
                question: "10. Co bys teď nejvíc chtěl rozvíjet mimo sport?",
                options: [
                    { letter: "A", text: "Sebevědomí a schopnost se prosadit", type: "A" },
                    { letter: "B", text: "Směr a cíl do života", type: "B" },
                    { letter: "C", text: "Spolupráci a komunikaci", type: "C" },
                    { letter: "D", text: "Klid a rovnováhu", type: "D" }
                ]
            }
        ];

        let currentQuestion = 0;
        let answers = { A: 0, B: 0, C: 0, D: 0 };

        // QUIZ FUNCTIONS
        function openQuiz() {
            document.getElementById('quizModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeQuiz() {
            document.getElementById('quizModal').classList.remove('active');
            document.body.style.overflow = 'auto';
            resetQuiz();
        }

        function resetQuiz() {
            currentQuestion = 0;
            answers = { A: 0, B: 0, C: 0, D: 0 };
            document.getElementById('quizIntro').classList.add('active');
            document.getElementById('quizQuestions').classList.remove('active');
            document.getElementById('quizResults').classList.remove('active');
        }

        function startQuiz() {
            document.getElementById('quizIntro').classList.remove('active');
            document.getElementById('quizQuestions').classList.add('active');
            showQuestion();
        }

        function showQuestion() {
            const question = quizQuestions[currentQuestion];
            const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
            
            document.getElementById('progressFill').style.width = progress + '%';
            document.getElementById('currentQ').textContent = currentQuestion + 1;
            
            const questionHTML = `
                <div class="quiz-question">
                    <h3>${question.question}</h3>
                    <div class="quiz-options">
                        ${question.options.map(option => `
                            <div class="quiz-option" data-answer-type="${option.type}">
                                <div class="quiz-option-letter">${option.letter}</div>
                                <span>${option.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            document.getElementById('questionContainer').innerHTML = questionHTML;

            // Add click listeners to quiz options
            document.querySelectorAll('.quiz-option').forEach(option => {
                option.addEventListener('click', function() {
                    selectAnswer(this.getAttribute('data-answer-type'));
                }, { passive: true });
            });
        }

        function selectAnswer(type) {
            answers[type]++;
            currentQuestion++;
            
            if (currentQuestion < quizQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            document.getElementById('quizQuestions').classList.remove('active');
            document.getElementById('quizResults').classList.add('active');
            
            // Determine result type
            const maxAnswer = Math.max(answers.A, answers.B, answers.C, answers.D);
            let resultType = '';
            
            if (answers.A === maxAnswer) {
                resultType = 'leader';
            } else if (answers.B === maxAnswer || answers.C === maxAnswer) {
                resultType = 'mindful';
            } else {
                resultType = 'disciplined';
            }
            
            // Track quiz completion in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'quiz_completed', {
                    'event_category': 'engagement',
                    'event_label': resultType,
                    'value': 1
                });
            }
            
            const results = {
                leader: {
                    badge: '🟠',
                    title: 'Soutěživý lídr',
                    subtitle: 'Tvoje síla: Tah na branku a vedení týmu',
                    description: 'Sport tě naučil jít naplno, soutěžit a vést ostatní. Tvůj přirozený tah na branku je skvělý v byznysu, prodeji nebo vedení projektů. Jen pozor na přetlak výkonu – mimo sport někdy není jasná "výhra".',
                    cta: 'Chceš zjistit, jak to přetavit do profese?',
                    action1: { text: 'Najdi svůj směr →', link: '#jak-to-funguje' },
                    action2: { text: 'Stáhnout materiál zdarma', link: 'mailto:info@sportovci-kariera.cz?subject=Zájem o materiál - Soutěživý lídr' }
                },
                mindful: {
                    badge: '🟢',
                    title: 'Vědomý hráč',
                    subtitle: 'Tvoje síla: Práce s procesem a pochopení',
                    description: 'Jsi typ, který chápe proces, umí naslouchat sobě i druhým. Sport tě naučil trpělivosti a vnitřní motivaci – ideální pro koučování, vzdělávání, mentoring. Potřebuješ ale jasný rámec, kam to celé směřuje.',
                    cta: 'Chceš získat kompletní průvodce zdarma?',
                    action1: { text: 'Stáhnout materiál zdarma →', link: 'mailto:info@sportovci-kariera.cz?subject=Zájem o materiál - Vědomý hráč' },
                    action2: { text: 'Prozkoumat, jak to funguje', link: '#jak-to-funguje' }
                },
                disciplined: {
                    badge: '🔵',
                    title: 'Stabilní dříč',
                    subtitle: 'Tvoje síla: Disciplína a spolehlivost',
                    description: 'Tvoje síla je v rutině, disciplíně a zodpovědnosti. Sport z tebe udělal člověka, na kterého je spoleh. Potřebuješ jen nový plán, kam tuhle energii teď nasměrovat.',
                    cta: 'Chceš konkrétní plán, jak dál?',
                    action1: { text: 'Najdi svůj směr →', link: 'mailto:info@sportovci-kariera.cz?subject=Začít screening hovor - Stabilní dříč' },
                    action2: { text: 'Prozkoumat, jak to funguje', link: '#jak-to-funguje' }
                }
            };
            
            const result = results[resultType];
            
            const resultsHTML = `
                <div class="result-badge">${result.badge}</div>
                <h2 class="result-title">${result.title}</h2>
                <p class="result-subtitle">${result.subtitle}</p>
                <p class="result-description">${result.description}</p>
                <div class="result-cta">
                    <h4>${result.cta}</h4>
                    <div class="result-actions">
                        <a href="${result.action1.link}" class="btn btn-primary result-action-btn">${result.action1.text}</a>
                        <a href="${result.action2.link}" class="btn btn-secondary result-action-btn" style="background:white;color:var(--primary);border:2px solid var(--primary)">${result.action2.text}</a>
                    </div>
                </div>
            `;

            document.getElementById('resultsContent').innerHTML = resultsHTML;

            // Add click listeners to result action buttons
            document.querySelectorAll('.result-action-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    closeQuiz();
                }, { passive: true });
            });
        }

        // EXISTING SCRIPTS
        function toggleMenu(event) {
            if (event) {
                event.stopPropagation();
                event.preventDefault();
            }
            const navLinks = document.getElementById('navLinks');
            const backdrop = document.getElementById('menuBackdrop');

            if (!navLinks || !backdrop) {
                return;
            }

            const isActive = navLinks.classList.toggle('active');
            backdrop.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.getElementById('navLinks');
            const backdrop = document.getElementById('menuBackdrop');

            if (navLinks && backdrop) {
                navLinks.classList.remove('active');
                backdrop.classList.remove('active');
            }
        }

        // COOKIE CONSENT MANAGEMENT
        function checkCookieConsent() {
            const consent = localStorage.getItem('cookieConsent');
            if (!consent) {
                // Show banner after 1 second
                setTimeout(() => {
                    document.getElementById('cookieConsent').classList.add('active');
                }, 1000);
            } else if (consent === 'accepted') {
                // Initialize analytics if accepted
                initAnalytics();
            }
        }

        function acceptCookies() {
            localStorage.setItem('cookieConsent', 'accepted');
            document.getElementById('cookieConsent').classList.remove('active');
            initAnalytics();
        }

        function declineCookies() {
            localStorage.setItem('cookieConsent', 'declined');
            document.getElementById('cookieConsent').classList.remove('active');
        }

        function initAnalytics() {
            // Initialize Google Analytics only if consent given
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                });
            }
        }

        // INITIALIZE ALL EVENT LISTENERS ON PAGE LOAD
        document.addEventListener('DOMContentLoaded', function() {
            // Menu toggle
            const menuToggleBtn = document.getElementById('menuToggle');
            if (menuToggleBtn) {
                menuToggleBtn.addEventListener('click', toggleMenu, { passive: false });
            }

            // Quiz open button
            const openQuizBtn = document.getElementById('openQuizBtn');
            if (openQuizBtn) {
                openQuizBtn.addEventListener('click', openQuiz, { passive: true });
            }

            // Quiz close button
            const closeQuizBtn = document.getElementById('closeQuizBtn');
            if (closeQuizBtn) {
                closeQuizBtn.addEventListener('click', closeQuiz, { passive: true });
            }

            // Quiz start button
            const startQuizBtn = document.getElementById('startQuizBtn');
            if (startQuizBtn) {
                startQuizBtn.addEventListener('click', startQuiz, { passive: true });
            }

            // Cookie consent buttons
            const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
            if (acceptCookiesBtn) {
                acceptCookiesBtn.addEventListener('click', acceptCookies, { passive: true });
            }

            const declineCookiesBtn = document.getElementById('declineCookiesBtn');
            if (declineCookiesBtn) {
                declineCookiesBtn.addEventListener('click', declineCookies, { passive: true });
            }

            // Check cookie consent on load
            checkCookieConsent();

            // Auto-close menu when clicking on any nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', closeMenu, { passive: true });
            });

            // Close menu when clicking backdrop
            const menuBackdrop = document.getElementById('menuBackdrop');
            if (menuBackdrop) {
                menuBackdrop.addEventListener('click', closeMenu, { passive: true });
            }

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                const nav = document.querySelector('nav');
                const navLinks = document.getElementById('navLinks');

                if (nav && navLinks && !nav.contains(e.target) && navLinks.classList.contains('active')) {
                    closeMenu();
                }
            }, { passive: true });

            // FAQ accordion functionality
            document.querySelectorAll('.faq-question').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const item = button.parentElement;
                    const answer = item.querySelector('.faq-answer');
                    const answerInner = item.querySelector('.faq-answer-inner');
                    const isActive = item.classList.contains('active');

                    // Close all other items
                    document.querySelectorAll('.faq-item').forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            const otherAnswer = otherItem.querySelector('.faq-answer');
                            if (otherAnswer) {
                                otherAnswer.style.maxHeight = '0';
                            }
                            const otherQuestion = otherItem.querySelector('.faq-question');
                            if (otherQuestion) {
                                otherQuestion.setAttribute('aria-expanded', 'false');
                            }
                        }
                    });

                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                        answer.style.maxHeight = '0';
                        button.setAttribute('aria-expanded', 'false');
                    } else {
                        item.classList.add('active');
                        // Use scrollHeight of inner content for accurate height
                        answer.style.maxHeight = answerInner.scrollHeight + 40 + 'px';
                        button.setAttribute('aria-expanded', 'true');
                    }
                });
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        closeMenu();
                    }
                });
            });

            // ESC key closes quiz modal and menu
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    const quizModal = document.getElementById('quizModal');
                    const navLinks = document.getElementById('navLinks');

                    if (quizModal && quizModal.classList.contains('active')) {
                        closeQuiz();
                    }
                    if (navLinks && navLinks.classList.contains('active')) {
                        closeMenu();
                    }
                }
            });

            // ========================================
            // SCROLL ANIMATIONS - Intersection Observer
            // ========================================
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Unobserve after animation to improve performance
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe all elements with animation classes
            document.querySelectorAll('.fade-in-up, .stagger-children').forEach(el => {
                observer.observe(el);
            });

            // ========================================
            // SCROLL PROGRESS BAR
            // ========================================
            const progressBar = document.getElementById('scrollProgress');

            function updateProgressBar() {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // Calculate scroll percentage
                const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

                // Update progress bar width
                if (progressBar) {
                    progressBar.style.width = scrollPercent + '%';
                }
            }

            // Update on scroll
            window.addEventListener('scroll', updateProgressBar, { passive: true });

            // Initial update
            updateProgressBar();
        });

// ========================================
// SCROLL-TRIGGERED ANIMATIONS
// Frontend Design Enhancement
// ========================================

// Intersection Observer for fade-in-up animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in-up class
document.querySelectorAll('.fade-in-up').forEach(element => {
    fadeInObserver.observe(element);
});

// Stagger animation trigger for grid children
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(':scope > *');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stagger-children').forEach(element => {
    staggerObserver.observe(element);
});

console.log('✨ Frontend Design Enhancements Loaded');
