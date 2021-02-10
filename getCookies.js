const puppeteer = require('puppeteer')


async function main(login, senha){
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();

  await page.goto('https://www.khanacademy.org');
  var time = 0
  page.on('request', request =>{
    if(request._url.slice(0, 70) === 'https://www.khanacademy.org/api/internal/_bb/bigbingo/mark_conversions'){
      time = request._url.slice(101)
    }
  
  })

  // Get the "viewport" of the page, as reported by the page.
console.log( 'starting bot...')
  await page.waitFor('._10ytj5l2')
  await page.click('._10ytj5l2')

  console.log('esperando por login')
  
  await page.type('input[data-test-id="identifier"]', login)
  await page.type('input[data-test-id="password"]', senha)
  await page.keyboard.press('Enter')
  console.log('clicou no login')
  await page.waitFor('._158ir6wt')
  await page.click('._158ir6wt')
  await page.waitFor('._1q5inpz')
  await page.click('._1q5inpz')
  await page.waitFor('._8ry3zep')
  await page.click('._8ry3zep')
const cookies = await page.cookies()
const url = await page.url()
const coachKaid = url.slice(url.indexOf('teacher')+8, url.indexOf('class')-1)
const studentList = url.slice(url.indexOf('class')+6)
const hashUrls = time
var fkey = ''


const cookiesCompletos = ['G_ENABLED_IDPS=google;', 'G_AUTHUSER_H=1;', 'LIS=pt;']
for(i of cookies){
  if(i.name === 'fkey'){
    fkey = i.value
  }
  cookiesCompletos.push(`${i.name}=${i.value};`)
  console.log(i.name)
}
  const stringCookies = cookiesCompletos.join(' ')

  console.log('finaly bot')
  // await browser.close();
  return {coachKaid, studentList, fkey, stringCookies, hashUrls, login}
}

module.exports = main