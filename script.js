const date=document.querySelector('.day-number')
const day=document.querySelector('.day-name')
const month=document.querySelector('.month-name')
const year=document.querySelector('.month-year')
const time=document.querySelector('.day-time')

const today=new Date()
console.log(today)
const weekDays=['sunday','monday','thursday','wednesday','thursday','friday','saturday']

const Allmonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date.innerHTML=today.getDate()
day.innerHTML=weekDays[today.getDay()]
month.innerHTML=Allmonths[today.getMonth()]
year.innerHTML=today.getFullYear()
