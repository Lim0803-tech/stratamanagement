export const cronConfig = {
  jobs: [
    {
      name: 'daily-maintenance-check',
      schedule: '0 0 * * *', // Run at midnight every day
      endpoint: '/api/cron?job=daily-maintenance-check'
    },
    {
      name: 'weekly-notifications',
      schedule: '0 0 * * 0', // Run at midnight every Sunday
      endpoint: '/api/cron?job=weekly-notifications'
    },
    {
      name: 'monthly-reports',
      schedule: '0 0 1 * *', // Run at midnight on the first day of each month
      endpoint: '/api/cron?job=monthly-reports'
    },
    {
      name: 'backup',
      schedule: '0 0 * * *', // Run daily backup at midnight
      endpoint: '/api/cron?job=backup'
    },
    {
      name: 'maintenance-reminders',
      schedule: '0 9 * * *', // Run at 9 AM every day
      endpoint: '/api/cron?job=maintenance-reminders'
    },
    {
      name: 'document-cleanup',
      schedule: '0 1 * * *', // Run at 1 AM every day
      endpoint: '/api/cron?job=document-cleanup'
    },
    {
      name: 'meeting-reminders',
      schedule: '0 8 * * *', // Run at 8 AM every day
      endpoint: '/api/cron?job=meeting-reminders'
    },
    {
      name: 'payment-reminders',
      schedule: '0 10 * * 1', // Run at 10 AM every Monday
      endpoint: '/api/cron?job=payment-reminders'
    }
  ]
}