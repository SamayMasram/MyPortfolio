/**
 * Check for saved theme preference in localStorage 
 * or default to light mode on initial load.
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const button = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (button) button.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (button) button.textContent = '🌙';
    }
}

/**
 * Toggle between dark-mode and light-mode
 * and save the preference to localStorage.
 */
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.theme-toggle');
    
    // Update button icon
    button.textContent = isDarkMode ? '☀️' : '🌙';
    
    // Save preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Initialize theme when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initTheme);