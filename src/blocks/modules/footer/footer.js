const $closeAgeRestriction = document.querySelector('.footer__age_restriction_close')
const $ageRestrictionBlock = document.querySelector('.footer__age_restriction')

$closeAgeRestriction.addEventListener('click', e => {
    e.preventDefault()
    $ageRestrictionBlock.classList.remove('active')
    localStorage.setItem('agreement', true)
})

if (!localStorage.getItem('agreement')) {
    $ageRestrictionBlock.classList.add('active')
}