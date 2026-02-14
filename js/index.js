document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.block');
    const targetTop = document.querySelectorAll('#top');

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            })
        }, {
            threshold: 0.02
        });

        const ioTop = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible-top');
                    observer.unobserve(entry.target);
                }
            })
        }, {
            threshold: 0.02
        });

        targets.forEach(t => io.observe(t));
        targetTop.forEach(t => ioTop.observe(t));
    }
    else {
        targets.forEach(t => t.classList.add('is-visible'));
        targetTop.forEach(t => t.classList.add('#top'));
    }
});
