// import moment here; use this package in each function
const moment = require('moment')

const today = () => {
  return moment().format('dddd')

}

const calendar = () => {
  // write code for dates.calendar
return moment().format('MMM DD, YYYY')
}

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format('HH:MM:SS A')
}

module.exports = {
  today,
  calendar,
  currentTime
}