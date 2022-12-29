import wording from './wording'

// Update wording in the page
const updateWording = (newLang) => {
  if (newLang === lang) return

  for (const element of document.querySelectorAll('[data-t]')) {
    element.innerHTML = wording[newLang][element.getAttribute('data-t')]
  }

  lang = newLang
  document.querySelector('html').lang = lang
}

// Init. Translate the page based on the browser language if we have it
let lang = 'en'
const navLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0]

if (Object.keys(wording).includes(navLang)) {
  updateWording(navLang)
}

// Handle lang change requested by user
document.querySelector('.lang').addEventListener('click', () => {
  const availablesLang = Object.keys(wording)
  updateWording(availablesLang[(availablesLang.indexOf(lang) + 1) % availablesLang.length])
})
