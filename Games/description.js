document.addEventListener('DOMContentLoaded', () => {
    // Info Modal Elements
    const openInfoBtn = document.getElementById('open-modal-btn');
    const closeInfoBtn = document.getElementById('close-info-btn');
    const infoModal = document.getElementById('info-modal');

    // Device Modal Elements
    const openDeviceBtn = document.querySelector('.play-btn'); // Targets "Play Game Now"
    const closeDeviceBtn = document.getElementById('close-device-btn');
    const deviceModal = document.getElementById('device-modal');

    // Helper functions to keep code DRY (Don't Repeat Yourself)
    const openModal = (modalTarget) => {
        modalTarget.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (modalTarget) => {
        modalTarget.classList.remove('active');
        // Only restore scrolling if NO other modal is open
        if (!infoModal.classList.contains('active') && !deviceModal.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    };

    // --- Info Modal Events ---
    if (openInfoBtn && infoModal && closeInfoBtn) {
        openInfoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(infoModal);
        });

        closeInfoBtn.addEventListener('click', () => closeModal(infoModal));
        
        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) closeModal(infoModal);
        });
    }

    // --- Device Modal Events ---
    if (openDeviceBtn && deviceModal && closeDeviceBtn) {
        openDeviceBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(deviceModal);
        });

        closeDeviceBtn.addEventListener('click', () => closeModal(deviceModal));

        deviceModal.addEventListener('click', (e) => {
            if (e.target === deviceModal) closeModal(deviceModal);
        });
    }
});