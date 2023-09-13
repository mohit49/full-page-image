// initialize homepage functionality
const selectors = {
  mainBannerButton: ".main-banner-button",
};
const homePageInit = () => {
    // register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.error('Service Worker registration failed:', error);
            });
    }

    $mainButton.addEventListener('click', function(){
        alert('Hello, World')
    })
};
const $mainButton = document.querySelector(selectors.mainBannerButton);
homePageInit();
