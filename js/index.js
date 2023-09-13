// initialize homepage functionality
const selectors = {
  mainBannerButton: ".main-banner-button",
};
const homePageInit = () => {
    // register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('https://mohit49.github.io/full-page-image/service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.error('Service Worker registration failed:', error);
            });
    }

    window.addEventListener('beforeinstallprompt', function(event) {
        // Prevent the default browser install prompt
        event.preventDefault();

        // Store the event to use it later
        const deferredPrompt = event;

        // Show your custom install button or notification
        const installButton = document.getElementById('install-button');
        installButton.style.display = 'block';

        // Handle the user's click on the custom install button
        installButton.addEventListener('click', function() {
            // Show the browser's install prompt
            deferredPrompt.prompt();

            // Wait for the user to respond to the install prompt
            deferredPrompt.userChoice.then(function(choiceResult) {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }

                // Reset the deferredPrompt for future use
                deferredPrompt = null;

                // Hide the custom install button
                installButton.style.display = 'none';
            });
        });
    });

    $mainButton.addEventListener('click', function(){
        alert('Hello, World')
    })
};
const $mainButton = document.querySelector(selectors.mainBannerButton);
homePageInit();
