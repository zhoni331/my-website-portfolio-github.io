const languageSelector = document.getElementById('language-selector');
const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');

// Language data object
const translations = {
    en: {
        heading: 'Welcome to Our Website',
        paragraph: 'Please select your preferred language from the dropdown menu above.',
    },
    ru: {
        heading: 'Добро пожаловать на наш сайт',
        paragraph: 'Пожалуйста, выберите предпочитаемый язык из выпадающего меню выше.',
    },
    kk: {
        heading: 'Біздің веб-сайтымызға қош келдіңіз',
        paragraph: 'Жоғарыдағы ашылмалы мәзірден қалаған тіліңізді таңдаңыз.',
    },
};

// Event listener for language change
languageSelector.addEventListener('change', function() {
    const selectedLanguage = languageSelector.value;

    // Update the content based on the selected language
    heading.textContent = translations[selectedLanguage].heading;
    paragraph.textContent = translations[selectedLanguage].paragraph;
});
