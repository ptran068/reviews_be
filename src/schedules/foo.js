import { CronJob } from 'cron'

const job = new CronJob({
  cronTime: '00 01 00 01 * *',
  onTick: () => {
    console.log('tick')
  },
  timeZone: 'Asia/Ho_Chi_Minh'
})
job.start()
