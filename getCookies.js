const puppeteer = require('puppeteer')


async function main(login, senha){
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();

  await page.goto('https://www.khanacademy.org');
  var time = 0
  page.on('request', request =>{
    if(request._url.slice(0, 81) === 'https://www.khanacademy.org/api/internal/_bb/bigbingo/mark_conversions?lang=en&_='){
      time = request._url.slice(81)
    }
  
  })

  // Get the "viewport" of the page, as reported by the page.
console.log( 'starting bot...')
  await page.waitForSelector('._10ytj5l2')
  await page.click('._10ytj5l2')

  
  await page.type('input[data-test-id="identifier"]', login)
  await page.type('input[data-test-id="password"]', senha)
  await page.keyboard.press('Enter')
  await page.waitForSelector('._158ir6wt')
  await page.click('._158ir6wt')
  await page.waitForSelector('._1q5inpz')
  await page.click('._1q5inpz')
  await page.waitForSelector('._8ry3zep')
  await teste()
  async function teste(){
    await page.click('._8ry3zep')
  
    await page.waitForSelector('._pftepk',{timeout:5000}).catch(()=>teste())    
  }
  const cookies = await page.cookies()
  const url = await page.url()
  

await page.screenshot({path:`prints/print-${login}.png`})
const coachKaid = url.slice(url.indexOf('teacher')+8, url.indexOf('class')-1)
const studentList = url.slice(url.indexOf('class')+6)
const hashUrls = time
var fkey = ''


const cookiesCompletos = ['LIS=pt;']
for(i of cookies){
  if(i.name === 'fkey'){
    fkey = i.value
  }
    cookiesCompletos.push(`${i.name}=${i.value};`)
}
  const stringCookies = cookiesCompletos.join(' ')

  console.log('finaly bot')
  await browser.close();
  return {coachKaid, studentList, fkey, stringCookies, hashUrls, login}
}

module.exports = main