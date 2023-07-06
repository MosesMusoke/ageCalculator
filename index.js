//output elements
const outputYear = document.querySelector('.output-year')
const outputMonth = document.querySelector('.output-month')
const outputDay = document.querySelector('.output-day')
const submitBtn = document.querySelector('.submit-btn')

//input elements
const inputYear = document.querySelector('#year')
const inputMonth = document.querySelector('#month')
const inputDay = document.querySelector('#day')

//error element
const errorYear = document.querySelector('.error-year')
const errorMonth = document.querySelector('.error-month')
const errorDay = document.querySelector('.error-day')

let isValid = false

inputDay.addEventListener('input', function (e) {
  if (+inputDay.value > 31) {
    errorDay.textContent = 'Must be a valid date'
    isValid = false
    return
  }else {
    isValid = true
    errorDay.textContent = ''
  }

  if (+inputDay.value === 0) {
    isValid = false
    errorDay.textContent = 'This field is required'
    isValid = false
    return
  }else {
    errorDay.textContent = ''
  }
})

inputMonth.addEventListener('input', function (e) {
  if (+inputMonth.value > 12) {
    errorMonth.textContent = 'Must be a valid date'
    isValid = false
    return
  }else {
    isValid = true
    errorMonth.textContent = ''
  }

  if (+inputMonth.value === 0) {
    isValid = false
    errorMonth.textContent = 'This field is required'
    isValid = false
    return
  }else {
    errorMonth.textContent = ''
  }
})

inputYear.addEventListener('input', function (e) {
  if (+inputYear.value > 2023) {
    errorYear.textContent = 'Must be a valid date'
    isValid = false
    return
  }else {
    isValid = true
    errorYear.textContent = ''
  }

  if (+inputYear.value === 0) {
    isValid = false
    errorYear.textContent = 'This field is required'
    isValid = false
    return
  }else {
    errorYear.textContent = ''
  }
})

submitBtn.addEventListener('click', calculateDate)

function calculateDate() {
  if (isValid) {
    let birthDay = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`
    let birthDayObj = new Date(birthDay)
    let dateDiffInMilli = Date.now() - birthDayObj
    let ageDate = new Date(dateDiffInMilli)
    let ageYears = ageDate.getUTCFullYear() - 1970
    let ageMonths = ageDate.getUTCMonth()
    let ageDays = ageDate.getUTCDay() - 1

    // Displaying the age
    outputDay.textContent = ageDays
    outputMonth.textContent = ageMonths
    outputYear.textContent = ageYears
  }
  else {
    alert('error')
  }
}

