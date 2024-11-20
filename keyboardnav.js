const menuItems = document.querySelectorAll('#menu li a');

menuItems.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
        const key = event.key;

        switch (key) {
            case 'ArrowDown':
                event.preventDefault(); // Prevent scrolling
                if (index < menuItems.length - 1) {
                    menuItems[index + 1].focus();
                } else {
                    menuItems[0].focus(); // Wrap to first item
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (index > 0) {
                    menuItems[index - 1].focus();
                } else {
                    menuItems[menuItems.length - 1].focus(); // Wrap to last item
                }
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (index < menuItems.length - 1) {
                    menuItems[index + 1].focus();
                } else {
                    menuItems[0].focus(); // Wrap to first item
                }
                break;
            case 'ArrowLeft':
                event.preventDefault();
                if (index > 0) {
                    menuItems[index - 1].focus();
                } else {
                    menuItems[menuItems.length - 1].focus(); // Wrap to last item
                }
                break;
            default:
                break;
        }
    });
});