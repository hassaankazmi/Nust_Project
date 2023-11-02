const axios = require('axios');

const sendLogPlugin = {
  sendLog(msg) {
    const TASK_MANAGEMENT_CHAT_ID = '-1001879667078'
    const SYSTEM_INFO_TELEGRAM_BOT_TOKEN = '1894368130:AAE8ug-PAGHpW9xeQApkW1YcI87m2gQjihI'
    const value = encodeURIComponent(`${window.location.host}|${JSON.stringify(msg)}`)
    axios.get(`https://api.telegram.org/bot${SYSTEM_INFO_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TASK_MANAGEMENT_CHAT_ID}&text=${value}`)
  }
}

export default (context, inject) => {
  inject('myLog', sendLogPlugin)
}
