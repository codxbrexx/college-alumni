/* 
 * Accessibility Utilities for WCAG AA Compliance
 * SRS §8: Performance & Accessibility
 */

/**
 * Skip to main content link (WCAG 2.4.1)
 * Add this component at the top of your app
 */
export const SkipLink = () => {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:border-2 focus:border-white"
        >
            Skip to main content
        </a>
    );
};

/**
 * Screen reader only text utility
 * Usage: <span className="sr-only">Screen reader text</span>
 */
// Add to global CSS:
/*
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
*/

/**
 * Focus visible styles for keyboard navigation
 * Add to global CSS for all interactive elements
 */
/*
*:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
}
*/

/**
 * Accessible button component example
 */
export const AccessibleButton = ({ children, onClick, ariaLabel, disabled = false }) => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            disabled={disabled}
            className="px-4 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
            {children}
        </button>
    );
};

/**
 * Accessible form field with proper labeling
 */
export const AccessibleInput = ({ id, label, type = "text", required = false, error, ...props }) => {
    const errorId = error ? `${id}-error` : undefined;

    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block text-sm font-bold mb-2"
            >
                {label}
                {required && <span className="text-red-600 ml-1" aria-label="required">*</span>}
            </label>
            <input
                id={id}
                type={type}
                required={required}
                aria-required={required}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={errorId}
                className="w-full p-3 border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                {...props}
            />
            {error && (
                <p id={errorId} role="alert" className="text-red-600 text-sm mt-1">
                    {error}
                </p>
            )}
        </div>
    );
};

/**
 * Loading spinner with accessibility
 */
export const AccessibleLoadingSpinner = ({ size = "medium", label = "Loading..." }) => {
    const sizeClasses = {
        small: "w-4 h-4 border-2",
        medium: "w-8 h-8 border-4",
        large: "w-12 h-12 border-4"
    };

    return (
        <div role="status" className="flex items-center justify-center">
            <div
                className={`${sizeClasses[size]} border-gray-300 border-t-red-600 rounded-full animate-spin`}
                aria-hidden="true"
            ></div>
            <span className="sr-only">{label}</span>
        </div>
    );
};

/**
 * Accessible modal/dialog component
 */
export const AccessibleModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
            <div className="bg-white max-w-2xl w-full mx-4 border-2 border-black p-6">
                <div className="flex justify-between items-start mb-4">
                    <h2 id="modal-title" className="text-2xl font-serif font-bold">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="text-2xl hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        ×
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

/**
 * Accessible breadcrumb navigation
 */
export const AccessibleBreadcrumb = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && <span className="mx-2" aria-hidden="true">/</span>}
                        {item.link ? (
                            <a
                                href={item.link}
                                className="hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                                aria-current={index === items.length - 1 ? "page" : undefined}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span aria-current="page">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

/**
 * Image with proper alt text compliance
 */
export const AccessibleImage = ({ src, alt, decorative = false, ...props }) => {
    return (
        <img
            src={src}
            alt={decorative ? "" : alt}
            role={decorative ? "presentation" : undefined}
            {...props}
        />
    );
};
