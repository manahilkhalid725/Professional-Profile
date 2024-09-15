document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.main > section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    function handleNavClick(event)
    {
        event.preventDefault();
        const targetId = event.target.getAttribute('data-target');
        showSection(targetId);
        navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }
    if (sections.length > 0) 
        {
        showSection(sections[0].id);
    }
    navLinks.forEach(link => 
        {
        link.addEventListener('click', handleNavClick);
    });
});
