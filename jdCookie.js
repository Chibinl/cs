/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_pin=18666404632_p;pt_key=AAJgPeUGADDChge-1CxkcchuUqjD_oDbkLxjYsfAq_7bVcV9AvlPK2OIGmdx8ZTKdHH_d1kem-s;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_pin=Chipun-Leung;pt_key=AAJgPefEADBHKnaCo0cl_qlHSCjxEIUHpbm7EFgQZQ2-gW_mPQ6ISyCsofMUE1eDlhb6dIxI1yU;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJgPeXYADBzZYOdtFpXKHMGBN5wgdNqTluRCkDA_YS6KQTIwKxZN9rkHu7OGQZd6FvwH-ErPkI;pt_pin=zihuangtan19424;',
  'pt_pin=jd_fxzTMsmhRhII;pt_key=AAJgPeg0ADA7iSYjhl7YYGpebcjwHErVYos1M9EZQ37OvtG42TapgA0gBajzySb7OAJveFrL0Ic;',
  
  
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
