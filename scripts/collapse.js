document.addEventListener('DOMContentLoaded', () => {
    // Select all galleries that have the .toggle-gallery class
    const galleries = document.querySelectorAll('.toggle-gallery');

    galleries.forEach(gallery => {
        const firstImage = gallery.querySelector('.first-image');
        const toggleBtn = gallery.querySelector('.toggle-btn');

        // Store the original button text
        const originalText = toggleBtn.textContent;

        function toggleGallery() {
            const isExpanded = gallery.classList.toggle('expanded');

            // Change the button text based on the state
            toggleBtn.textContent = isExpanded ? 'Collapse' : originalText;
        }

        // Add a click listener to the first image to trigger the toggle
        firstImage.addEventListener('click', toggleGallery);

        // Add a click listener to the toggle button
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the link from jumping the page
            toggleGallery();
        });
    });
});