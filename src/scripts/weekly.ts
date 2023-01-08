// Weakly trading cycle
import moment, {Moment} from 'moment'
import chalk from 'chalk'


function logDate(date: Moment) {
  if (date.year() === 2023) {
    console.log(chalk.green(date.format('YYYY-MM-DD')))
    return
  }
  // if (date.year() === 2019) {
  //   console.log(chalk.yellow(date.format('YYYY-MM-DD')))
  //   return
  // }
  console.log(date.format('YYYY-MM-DD'))
}



function weeklyLog(date: string, comment: string = '') {
  console.log(`// ${comment} ${date}`)
  const d = moment(date, 'YYYY-MM-DD')
  const fortyWeeksLater = d.clone().add(40, 'weeks')
  logDate(fortyWeeksLater)
  const eightyWeeksLater = d.clone().add(80, 'weeks')
  logDate(eightyWeeksLater)
  const oneHundredSixtyWeeksLater = d.clone().add(160, 'weeks')
  logDate(oneHundredSixtyWeeksLater)

  const fortyWeeksBefore = d.clone().subtract(40, 'weeks')
  logDate(fortyWeeksBefore)
  const eightyWeeksBefore = d.clone().subtract(80, 'weeks')
  logDate(eightyWeeksBefore)
  const oneHundredSixtyWeeksBefore = d.clone().subtract(160, 'weeks')
  logDate(oneHundredSixtyWeeksBefore)
}

console.log("from all time low")
weeklyLog('2020-03-23')
console.log("from all time top")
weeklyLog('2021-11-19', 'all time top')
// console.log("from cycle low")
weeklyLog('2022-06-17', "cycle bottom")
// console.log("from cycle top")
weeklyLog('2022-08-21', 'cycle top')
