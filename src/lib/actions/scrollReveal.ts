/**
 * Svelte action to reveal elements on scroll using Intersection Observer
 */
export function scrollReveal(node: HTMLElement, options: { threshold?: number } = {}) {
    const threshold = options.threshold || 0.1;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.classList.add('in-view');
                observer.unobserve(node);
            }
        });
    }, { threshold });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
