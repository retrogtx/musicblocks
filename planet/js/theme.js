document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
    
    themeToggle.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = 'Dark Mode';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = 'Light Mode';
        }
    });
}); 