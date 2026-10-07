document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const categories = document.querySelectorAll('.stack-category');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            categories.forEach(category => {
                const categoryType = category.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === categoryType) {
                    category.classList.remove('hidden');
                } else {
                    category.classList.add('hidden');
                }
            });
        });
    });
});
