const puppeteer = require('puppeteer')

const urls = {
  'tiagoarodrigues55':'https://www.khanacademy.org/profile/kaid_299212292994264221381966/assignments/teacher/kaid_392072691530132937767193/class/6551515930574848',
  'iaiamamendes@gmail.com':'https://pt.khanacademy.org/profile/kaid_667147597119607535878627/assignments/teacher/kaid_392072691530132937767193/class/6551515930574848',
  'fernandaboffelli@gmail.com':'https://pt.khanacademy.org/profile/kaid_434807737341220213033953/assignments/teacher/kaid_392072691530132937767193/class/6551515930574848',
  'victoria.lopez@alunoviva.com.br':'https://www.khanacademy.org/profile/kaid_147804494235003969080485/assignments/teacher/kaid_392072691530132937767193/class/6551515930574848',
  'lucasodebrecht':'https://pt.khanacademy.org/profile/kaid_226487931520381241914472/assignments/teacher/kaid_392072691530132937767193/class/6551515930574848',
  'MariaLidiaDQAlmeida':'https://pt.khanacademy.org/profile/kaid_787610714442308184032842/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
  'GiulianoBoveGomes':'https://www.khanacademy.org/profile/kaid_951842752072287246851636/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
  'antonio.tocunduva@alunoviva.com.br':'https://pt.khanacademy.org/profile/kaid_686994834307217320063225/assignments/teacher/kaid_392072691530132937767193/class/6551515930574848',
  'pietravenusfontana@gmail.com':'https://pt.khanacademy.org/profile/kaid_998536545171326831271133/assignments/teacher/kaid_392072691530132937767193/class/6551515930574848',
  'pemahfuzsilva@gmail.com':'https://pt.khanacademy.org/profile/kaid_922855955957019807198406/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
  'milanlara1@gmail.com':'https://pt.khanacademy.org/profile/kaid_888935498455674538305030/assignments/teacher/kaid_392072691530132937767193/class/6551515930574848',
  'diego.garcia999':'https://pt.khanacademy.org/profile/kaid_400016447913382740092784/assignments/teacher/kaid_392072691530132937767193/class/6554823860699136',
  'ottolautert':'https://pt.khanacademy.org/profile/kaid_852504037948269164136861/assignments/teacher/kaid_392072691530132937767193/class/6551515930574848',
  'lorenabehisnelian@gmail.com':'https://pt.khanacademy.org/profile/kaid_43977542730842079922204/assignments/teacher/kaid_392072691530132937767193/class/6554823860699136',
  'gabrielsbatist':'https://pt.khanacademy.org/profile/Gabrielsbatist/assignments/teacher/kaid_358828771056574545375092/class/4818161444012032',
  'joaopaiva1905':'https://pt.khanacademy.org/profile/kaid_68972219603611092504951/assignments/teacher/kaid_358828771056574545375092/class/6211404341657600',
  'joaocsonnewend@gmail.com':'https://pt.khanacademy.org/profile/joaocury/assignments/teacher/kaid_358828771056574545375092/class/6211404341657600',
  'guidocoimbra':'https://pt.khanacademy.org/profile/kaid_814688854378512957960353/assignments/teacher/kaid_392072691530132937767193/class/6554823860699136',
  'ana.tolezani':'https://pt.khanacademy.org/profile/kaid_199525090255673926211175/assignments/teacher/kaid_392072691530132937767193/class/6554823860699136',
  'lupinheiroo':'https://pt.khanacademy.org/profile/lupinheiroo/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
  'MariahPassagemNegrao':'https://pt.khanacademy.org/profile/kaid_406071221519223808441545/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
  'RafaelaMenin':'https://pt.khanacademy.org/profile/RafaelaMenin/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
  'Fcthiagok':'https://pt.khanacademy.org/profile/kaid_473265287885115324916953/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
  'FelipeCallasAvila':'https://www.khanacademy.org/profile/FelipeCallasAvila/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
  'franciscoouro':'https://pt.khanacademy.org/profile/franciscoouro/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
  'vitormercadante':'https://pt.khanacademy.org/profile/kaid_260919640512036160769812/assignments/teacher/kaid_666762397174059315103301/class/5196608754368512',
}
async function main(login, senha, url = urls[login] ){

  const browser = await puppeteer.launch({
    // args: [
    //     '--no-sandbox',
    //     '--disable-setuid-sandbox'
    // ]
    headless:true
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
    width:1000,
    height:1000
  })

console.log( 'starting bot...')


  
  await page.type('input[data-test-id="identifier-field"]', login)
  await page.type('input[data-test-id="password-field"]', senha)
  await page.keyboard.press('Enter')
  await page.waitForSelector('._158ir6wt')

  await page.goto(url);

  await page.waitForSelector('._1n78j0nb', {timeout: 30000}).catch()

  const cookies = await page.cookies()


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
  await page.screenshot({path:`prints/print-${login}.png`})
  
  console.log('finaly bot')
  // await browser.close();
  return {coachKaid, studentList, fkey, stringCookies, hashUrls, login}
}

module.exports = main


