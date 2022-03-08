const puppeteer = require('puppeteer')
main("mercadantevitor@gmail.com", "vamo frita")

async function main(login, senha){

  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto('https://www.khanacademy.org/login?continue=%2F');
  var time = 0
  page.on('request', request =>{
    if(request._url.slice(0, 81) === 'https://www.khanacademy.org/api/internal/_bb/bigbingo/mark_conversions?lang=en&_='){
      time = request._url.slice(81)
    }
  
  })
  page.setViewport({
    width:2000,
    height:1000
  })

  // Get the "viewport" of the page, as reported by the page.
console.log( 'starting bot...')
  //await page.waitForSelector('._10ytj5l2')
//  await page.click('._10ytj5l2')

  
  await page.type('input[data-test-id="identifier"]', login)
  await page.type('input[data-test-id="password"]', senha)
  await page.keyboard.press('Enter')
  await page.waitForSelector('._158ir6wt')
  await page.click('._158ir6wt')
  await page.waitForSelector('._1q5inpz')
  await page.click('._1q5inpz')
  await page.waitForSelector('._8ry3zep')
  const classe = (login === "guido.coimbra@alunoviva.com.br" ?  '._158ir6wt' : '._8ry3zep')
  await teste(classe)
  async function teste(classe){
    await page.click(classe)
  
    await page.waitForSelector('._pftepk',{timeout:5000}).catch(()=>teste(classe))    
  }


}