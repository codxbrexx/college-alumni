/**
 * Performance Optimization Utilities
 * SRS §8: Performance & Accessibility
 */

/**
 * Debounce function for search inputs
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 */
export const debounce = (func, delay = 300) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

/**
 * Throttle function for scroll/resize events
 * @param {Function} func - Function to throttle
 * @param {number} limit - Minimum time between calls in milliseconds
 */
export const throttle = (func, limit = 200) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

/**
 * Lazy load images when they enter viewport
 * Usage: <img data-src="image.jpg" className="lazy" alt="..." />
 */
export const initLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

/**
 * Preload critical resources
 * @param {string} href - Resource URL
 * @param {string} as - Resource type (script, style, image, etc.)
 */
export const preloadResource = (href, as = 'script') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
};

/**
 * Local storage with expiration
 * @param {string} key - Storage key
 * @param {any} value - Value to store
 * @param {number} ttl - Time to live in milliseconds
 */
export const setWithExpiry = (key, value, ttl) => {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

/**
 * Get from local storage with expiration check
 * @param {string} key - Storage key
 * @returns {any|null} - Stored value or null if expired
 */
export const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
};

/**
 * Memoize expensive function calls
 * @param {Function} fn - Function to memoize
 */
export const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

/**
 * Batch multiple state updates
 * @param {Function[]} updates - Array of state update functions
 */
export const batchUpdates = (updates) => {
    // React 18 automatic batching handles this, but for older versions:
    Promise.resolve().then(() => {
        updates.forEach(update => update());
    });
};

/**
 * Measure component render time (development only)
 * @param {string} componentName - Name of component
 * @param {Function} callback - Render function
 */
export const measurePerformance = (componentName, callback) => {
    if (process.env.NODE_ENV === 'development') {
        const start = performance.now();
        const result = callback();
        const end = performance.now();
        console.log(`${componentName} rendered in ${(end - start).toFixed(2)}ms`);
        return result;
    }
    return callback();
};

/**
 * Virtual scroll helper for large lists
 * @param {Array} items - Full list of items
 * @param {number} visibleCount - Number of visible items
 * @param {number} scrollTop - Current scroll position
 * @param {number} itemHeight - Height of each item
 */
export const getVirtualScrollItems = (items, visibleCount, scrollTop, itemHeight) => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = startIndex + visibleCount;

    return {
        visibleItems: items.slice(startIndex, endIndex),
        startIndex,
        offsetY: startIndex * itemHeight
    };
};

/**
 * Optimize images for web
 * @param {File} file - Image file
 * @param {number} maxWidth - Maximum width
 * @param {number} maxHeight - Maximum height
 * @param {number} quality - JPEG quality (0-1)
 * @returns {Promise<Blob>} - Optimized image blob
 */
export const optimizeImage = (file, maxWidth = 1920, maxHeight = 1920, quality = 0.8) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let { width, height } = img;

                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob(resolve, 'image/jpeg', quality);
            };
        };
    });
};
