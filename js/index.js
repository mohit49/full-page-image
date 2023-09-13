// initialize homepage functionality
const selectors = {
  mainBannerButton: ".main-banner-button",
};
const homePageInit = () => {
    $mainButton.addEventListener('click', function(){
        alert('Hello, World')
    })
};
const $mainButton = document.querySelector(selectors.mainBannerButton);
homePageInit();
