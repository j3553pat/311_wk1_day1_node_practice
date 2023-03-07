// import moment here; use this package in each function
const moment = require('moment')

const today = () => {
  return moment().format('dddd')

}

const calendar = () => {
  // write code for dates.calendar

}

const currentTime = () => {
  // write code for dates.currentTime

}

module.exports = {
  today,
  calendar,
  currentTime
}