const axios = require('axios')
const getCookies = require('./getCookies')
var timestamp = new Date().toISOString()

// const logins = [{login: 'tiagoarodrigues55', senha: 'Tiago2003'}, {login: 'tiago113', senha: 'skebfcqm'}, {login: 'tiago228', senha: 'xtsyrscw' }, {login: 'tiago3274', senha: 'quabxnsz'}]
login()
async function login(){
  // await solve('lucasodebrecht', 'Lepikson10')
  await solve('victoria.lopez@alunoviva.com.br', 'Licas2107')
  // await solve('lupinheiroo', 'khanacademy123')
  // await solve('MariahPassagemNegrao', '23092003')
  // await solve('RafaelaMenin', '070797004')
  // await solve('Fcthiagok', 'kalassa7')
  // await solve('joaopaiva1905', 'brad1234')
  // await solve('MariaLidiaDQAlmeida', 'marialidia123')
  // await solve('joaocsonnewend@gmail.com', '#Cury007')
  // await solve('FelipeCallasAvila', 'Pulga1234')
  // await solve('franciscoouro', 'Chico100@')
  // await solve('vitormercadante', 'vamo frita')
  // await solve('GiulianoBoveGomes', 'svenska17')
//   const logins = await axios.get('https://khansolver.vercel.app/api/getSubscribers').then(res=>res.data)
// for(let login of logins){
//   console.log('chamei main passando o login: ' + login.username)
//   await solve(login.username, login.password)
// }
// await solve("ottolautert", "Jack2004")
}

async function solve(login, senha){

  const dados = await getCookies(login, senha)
  console.log('Os dados chegaram!')
  const Data = {coachKaid: "kaid_392072691530132937767193", studentList: "6551515930574848", fkey: "1.0_l5q45u3vme95pjkr4n51ds107g1icot4oncfop815gjda0q4kcoo7t7h7b26g8n79_1612447605478", stringCookies: "KAVID=78bba636-928f-417a-9c16-a5b0e1b101ec; _gcl_au=1.1.1289192661.1605624690; _ga=GA1.2.111229800.1605624690; G_ENABLED_IDPS=google; ki_r=; ki_t=1606186128184%3B1606325954154%3B1606325954154%3B2%3B6; _fbp=fb.1.1608399972890.649270967; _gac_UA-6742635-1=1.1612196589.Cj0KCQiA6t6ABhDMARIsAONIYyxbTUdoz1J3djXUXpBudarehOdi3bNwHD5rbjHqAf2j9jIgLmekTd4aAgSCEALw_wcB; _gid=GA1.2.1127238055.1612447595; fkey=1.0_l5q45u3vme95pjkr4n51ds107g1icot4oncfop815gjda0q4kcoo7t7h7b26g8n79_1612447605478; G_AUTHUSER_H=1; KAAS=hvQ-cPdN0FIETU1wuwbWcQ; LIS=pt; _gat=1; KAAL=$GWirUZbNPcKqdfORkFOXIedYtGa0SxAaGF51lYvsAvs.~qo0cwg$a2FpZF8yOTkyMTIyOTI5OTQyNjQyMjEzODE5NjY*; KAAC=$zvHTkrbq70JhOh-YBAXoZCuuy9Czp9FT8e9hkBrKIqo.~qo0cwg$a2FpZF8yOTkyMTIyOTI5OTQyNjQyMjEzODE5NjY*$a2FpZF8yOTkyMTIyOTI5OTQyNjQyMjEzODE5NjY!0!0!0~2", hashUrls: "210203-1541-6c168fc23472_1612448082597", login: "tiagoarodrigues55"}
  console.log('iniciando processo de resolução...')
const fkey = dados.fkey
const studentListId = dados.studentList
const coachKaid = dados.coachKaid
const username = dados.login
const dueAfter = timestamp
const hashUrls = dados.hashUrls
const cookies = dados.stringCookies
const hash2 = "1604303425"
const defaultPath = `FetchContentData?hash=${hash2}&variables=${encodeURIComponent('{"path":"math/geometry-home/analytic-geometry-topic","queryParams":"lang=pt"}')}`
const urlTeste = 'https://pt.khanacademy.org/api/internal/graphql/FetchContentData?fastly_cacheable=persist_until_publish&hash=1604303425&variables=%7B%22path%22%3A%22math%2Fgeometry-home%2Fanalytic-geometry-topic%22%2C%22queryParams%22%3A%22lang%3Dpt%26open%3D1%22%2C%22isModal%22%3Afalse%2C%22followRedirects%22%3Atrue%7D&lang=pt'
// defaultPath.replace('/{/g', '%7B')
// defaultPath.replace('/"/g', '%22')
// defaultPath.replace('/:/g', '%3A')
// defaultPath.replace('///g', '%2F')
// const cookies = "KAVID=c2157bf0-36ba-45b3-8a6b-2c90e8cdcfa3; _gcl_au=1.1.1071199951.1612879540; _ga=GA1.2.1926539698.1612879548; _gid=GA1.2.625633886.1612879548; G_ENABLED_IDPS=google; fkey=1.0_2olctu033ojejvj4lr2qkp0febrlgcu02fanm6faunqq59u9jmj2fik7bj1vqgug9_1612880866831; KAAS=XFmsiCHVkVRRSyDX1qt9RQ; LIS=pt; KAAL=$DUJo65Rh01SfZoCt6KP8LQxUopzOtlj3RAjkUCr1q7c.~qo9muv$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY*; KAAC=$k6sAAok4r8KfDJ4bLmo889XMJX2j4EmYDyyzpZGFgUo.~qo9muv$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY*$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY!0!0!1~2; _gat=1"
const urls = {
  recebeRecomendações: `https://pt.khanacademy.org/api/internal/graphql/UserAssignments?lang=pt&_=${hashUrls}`,
  recebeUnitTests: `https://pt.khanacademy.org/api/internal/graphql/getOrCreateExerciseTask?lang=pt&_=${hashUrls}`, 
  recebeExercícios: `https://pt.khanacademy.org/api/internal/graphql/getOrCreatePracticeTask?lang=pt&_=${hashUrls}`, 
  enviaExercício: `https://pt.khanacademy.org/api/internal/_mt/graphql/attemptProblem?lang=pt&_=${hashUrls}`,
  recebeAssentmentId: `https://pt.khanacademy.org/api/internal/graphql/getAssessmentItem?lang=pt&_=${hashUrls}`,
  verificaTeste: `https://pt.khanacademy.org/api/internal/graphql/quizAndUnitTestAttemptsQuery?lang=pt&_=${hashUrls}`,
  getContentJSON: `https://pt.khanacademy.org/api/internal/graphql/${defaultPath}`
  // recebeTopico: `https://pt.khanacademy.org/math/pt-mat-prep-em-1/x67c409c65485f00f:probabilidade-e-estatistica?open=1`
}
const CookiesTeste = "KAVID=a64fe133-42e7-4ca3-bbf4-3560d567aa53; _gcl_au=1.1.1834764664.1619397817; _ga=GA1.2.1618553734.1619397818; G_ENABLED_IDPS=google; KAAS=_dxB_rC9ZISlUcOMn_hAGA; LIS=pt; _gid=GA1.2.1746437848.1621547396; GOOGAPPUID=x; fkey=1.0_3c23d3k397dnoicu1gku10gen9t1pqmaui8i2dpn304pj8o3die6hf29o0c0g1o8r7bv_1621611672367; KAAL=$3vJRYohq-kD9BpMrDNsbI8Gjxgu_iMjG6Zrt4E3IIrk.~qtgrkq$a2FpZF84ODg5MzU0OTg0NTU2NzQ1MzgzMDUwMzA*; KAAC=$1t_bEbo_KZsl-EYw3ksH4dwSWMLDZvDAMJfIZLVLlww.~qtgrkq$a2FpZF84ODg5MzU0OTg0NTU2NzQ1MzgzMDUwMzA*$a2FpZF84ODg5MzU0OTg0NTU2NzQ1MzgzMDUwMzA!0!0!0~2"
const RefererTeste = "https://pt.khanacademy.org/math/geometry-home/analytic-geometry-topic?open=1"
var headers2 = {
  'Host': 'pt.khanacademy.org' ,
  'Content-Length': '4938' ,
  'Sec-Ch-Ua': '\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\"',
  'Accept': '*/*' ,
  'Sec-Ch-Ua-Mobile': '?0' ,
  'X-Ka-Fkey': '1.0_out6ve3g3cmkp34r4fol2c6l2663noumig2rnbrpig8ivh93286t7e1ias9t3l2jm5k_1621955131458' ,
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36' ,
  'Content-Type': 'application/json',
  'Origin': 'https://pt.khanacademy.org',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': 'https://pt.khanacademy.org/math/pt-mat-prep-em-1/x67c409c65485f00f:numeros?open=1',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' ,
  'Connection': 'close',
  'Cookies':'KAVID=a64fe133-42e7-4ca3-bbf4-3560d567aa53; _gcl_au=1.1.1834764664.1619397817; _ga=GA1.2.1618553734.1619397818; G_ENABLED_IDPS=google; GOOGAPPUID=x; _gid=GA1.2.1155439073.1621953750; fkey=1.0_out6ve3g3cmkp34r4fol2c6l2663noumig2rnbrpig8ivh93286t7e1ias9t3l2jm5k_1621955131458; KAAS=8EGkwwTtObSNrlyQ5l5gNA; LIS=pt; _gat=1; KAAL=$rZfisHABH9smfNbQzcFi3Ua1HSaQVqftie0NBMS8qgU.~qto4p0$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY*; KAAC=$Mg3iSfFRW1uV1L3_ajg49dNyNVZoP_KhUzm-lO9_gC4.~qto4p0$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY*$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY!0!0!1~2',
};
const headers = {
  'Host': 'pt.khanacademy.org',
  'Connection': 'close',
  'Content-Length': '2412',
  'accept': '*/*',
  'x-ka-fkey': `${fkey}`,
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0;     Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
  'content-type': 'application/json',
  'Origin': 'https://pt.khanacademy.org',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  // 'Referer':RefererTeste,
  'Referer':`https://pt.khanacademy.org/profile/${username}/assignments/teacher/${coachKaid}/class/${studentListId}`,
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': `${cookies}`
}
const api = axios.create({
  headers,
});
const api2 = axios.create({
  headers2,
});
let ExercisesIds = []



async function início(after){
  console.log('função inicio chamada')
 
  ExercisesIds = await recebeRecomendações(after, true)
  OldExercisesIds = await recebeRecomendações(after, false)
  console.log(ExercisesIds)
  console.log(OldExercisesIds)
  OldExercisesIds[0] ? OldExercisesIds.map(ex=>{
    ExercisesIds.push(ex)
  }): null
  // const {unitId, progressKeys} = await getContentJSON()
  // const content2 = await getContent2(unitId, progressKeys)

  // return
  if(!ExercisesIds){
    console.log('nenhum id de exercício foi retornado pela função recebeRecomendações')
    return
  }else{
    console.log('Esses foram os exercícios retornados pela função recebeRecomendações')
    // início(null)
  }
  console.log('Chamando a função recebeExercícios para cada id recolhido')

  await ExercisesIds.map(id=>(id.type==="exercise"?recebeExercícios(id.topicId):
  // recebeTestes(id.topicId)
  null
  ))
  
return
}

async function getContent2(unitId, progressKeys){
  for(let i of progressKeys){
    console.log(urls.recebeUnitTests)
    console.log(data4(unitId, i.positionKey))
  api2.post(urls.recebeUnitTests, data4(unitId, i.positionKey)).then(res=>{
    console.log('foi')
  }).catch(err=>console.log('não foi'))
  }
}
async function getContentJSON(){
  console.log(urls.getContentJSON)
  console.log(urlTeste)
  console.log('getContentJSON')
  return await api2.get(urlTeste).then(res=>{
    const contentJSON =  JSON.parse(res.data.data.contentJson)
    const unitId = contentJSON.componentProps.curation.unitId
    console.log(unitId)
    const progressKeys = []
    Object.entries(contentJSON.componentProps.curation.tabs[0].modules[0].quizzes).forEach(  ([, quiz]) => {
       progressKeys.push({
         contentId: quiz.contentId,
         positionKey: quiz.positionKey
       })
  })
  return {unitId, progressKeys}
  }).catch(err=>console.log(err))
  // return await api.get(urls.getContentJSON).then(res=>res.data)
}
const exercises = []
async function recebeRecomendações(after, old){
  console.log('inicia a função recebeRecomendações')
  const exercisesIds = []
  var urlMath = ''
  const ids = await api.post(urls.recebeRecomendações, data(after, old)).then(res=>{
    if(res.data.data.user.assignmentsPage.pageInfo.nextCursor){
      console.log('chamando a função inicio passando o próximo cursor')
      início(res.data.data.user.assignmentsPage.pageInfo.nextCursor)
    }
    if(!res.data.data.user.assignmentsPage.assignments[0]){
      return []
    }
  for(let i of res.data.data.user.assignmentsPage.assignments){
    // console.log("i.ExerciseConfig", i.ExerciseConfig)
    // console.log("i.contents[0].kind", i.contents[0].kind)
    // console.log("i.contents.length", i.contents.length)
    // console.log("i.contents[0].topicPaths.length", i.contents[0].topicPaths.length)
    const topicIds = i.contents[0].topicPaths[0].path.map(res=>res.id)
    // console.log("topic ids: ", topicIds)
    if(i.contents[0].kind === ('TopicUnitTest'||'TopicQuiz')){
      console.log("Tem teste da unidade!!")
       urlMath = `https://pt.khanacademy.org${i.contents[0].defaultUrlPath.slice(0,i.contents[0].defaultUrlPath.indexOf("#"))}`
      
    }

    if(i.contents[0].kind === 'TopicQuiz'){
      console.log("Tem quiz da unidade!!")
    }

    if(!i.totalCompletionStates){
        if(i.contents[0].kind==='Exercise' && exercisesIds.indexOf(i.contents[0].id)===-1){
          exercisesIds.push({topicId: i.contents[0].id, type: "exercise", name: i.contents[0].title})
        }
        if(i.contents[0].kind==='TopicQuiz' && exercisesIds.indexOf(i.contents[0].id)===-1){
          exercisesIds.push({topicId: i.contents[0].id, type: "quiz",  name: i.contents[0].title})
        }
      
    }else{
    if(i.totalCompletionStates[0].state!=='completed'){  
      // console.log(i.contents)
          if(i.contents[0].kind==='Exercise' && exercisesIds.indexOf(i.contents[0].id)===-1){
            exercisesIds.push({topicId: i.contents[0].id, type: "exercise",  name: i.contents[0].title})
          }
          if(i.contents[0].kind==='TopicQuiz' && exercisesIds.indexOf(i.contents[0].id)===-1){
            exercisesIds.push({topicId: i.contents[0].id, type: "quiz",  name: i.contents[0].title})
          }
        
    }else{
      if(i.contents[0].kind==='Exercise' && exercisesIds.indexOf(i.contents[0].id)===-1){
        exercisesIds.push({topicId: i.contents[0].id, type: "exercise"})
      }
      if(i.contents[0].kind==='TopicQuiz' && exercisesIds.indexOf(i.contents[0].id)===-1){
        exercisesIds.push({topicId: i.contents[0].id, type: "quiz"})
      }
    }
  }

}

  return exercisesIds
  }).catch(err=>{console.log('função1'); console.log(err)})
  if(!urlMath){
    return ids
  }
  const testId = await axios.get(urlMath).then(res=>{
    console.log(res.status)
    const topic = res.data.slice(res.data.indexOf('"topic"'))
    const id = topic.slice(topic.indexOf('"id"')+6)
    return {topicId: id.slice(0, id.indexOf('"')), type: "unitTest"}
 }).catch(err=>console.log(err))
 if(testId){
verificaTeste(testId.topicId)
}else{
  console.log("Sem testeId")
  return ids
}

 ids.push(testId)
  return ids
}
const exercíciosPropostos = []
async function recebeTestes(id){
  await api.post(urls.recebeUnitTests, data4(id)).then(res=>{
    const taskKey = res.data.data.getOrCreateExerciseTask.result.userTask.task.key
    const exercisesInfo = res.data.data.getOrCreateExerciseTask.result.userTask.userExercises.map(ex=>({exerciseId: ex.exerciseModel.id, AssentmentItemId: ex.exerciseModel.problemTypes[0].items.map(i=>i.id)}))
    // enviaExercício(?, ?, taskKey )
    const Aiis = []
     exercisesInfo.map(info=>{
       info.AssentmentItemId.map(aii=>{
         if(Aiis.indexOf(aii)===-1){
         enviaExercício(info.exerciseId, aii, taskKey, id)
         Aiis.push(aii)

         }
       })
     })
   
  }).catch(err=>console.log(err))
}
 function recebeExercícios(id){
   console.log('Começou a função recebExercícios com o parâmetro: ' + id)
   const Exercises = []
   api.post(urls.recebeExercícios, data2(id)).then(res=>{
     if(!res.data.data.getOrCreatePracticeTask.result['userTask']){
       console.log('Não passou')
       return
     }
     console.log('Passou')
      res.data.data.getOrCreatePracticeTask.result.userTask.task.reservedItems.map(items=>{
          Exercises.push({exerciseId:items.slice(0, items.indexOf('|')), itemId: items.slice(items.indexOf('|')+1), taskKey: res.data.data.getOrCreatePracticeTask.result.userTask.task.key})
      })
      console.log('Chama a função enviaExercicio para cada exercicio da lista Exercises')
      Exercises.map(ex=>{enviaExercício(ex.exerciseId, ex.itemId, ex.taskKey);
        exercíciosPropostos.push(ex.itemId)
      })
    }).catch(err=>{console.log('função2 id:' + id)
        console.log(err)
  })

}

let exercíciosFeitos = []

function enviaExercício(exerciseId, itemId, taskKey, name){
  // console.log(exerciseId, itemId)
  // if(!ExercisesIds[0]){
  //   console.log('Não tem mais ids no ExercisesIds')
  //   return
  // }
  if(exercíciosFeitos.indexOf(itemId)!==-1){
    console.log(`O exercício (${exerciseId}, ${itemId}, ${taskKey}) já está nos exercícios feitos`)
    return
  }
  api.post(urls.enviaExercício, data3(exerciseId, itemId, taskKey)).then(res=>{
    if(res.status === 200){
    exercíciosFeitos.push(itemId)
    // console.log(`O exercício (${itemId}) foi adicionado aos exercícios feitos`)
    // console.log(res.data.data.attemptProblem.result)
    // console.log(`(${exerciseId}, ${itemId}, ${taskKey})`)
    }else{
      console.log(name)
    }

  }).catch(err=>{console.log('função3 id:' + exerciseId)
        console.log(err)
})
}
async function getAssentmentItemId(exsIds){
  const exData = []
  for(i of exsIds){
    await api.post(urls.recebeAssentmentId, data5(i, exsIds.indexOf(i))).then(res=>{
      if(res.data.data.assessmentItem.error !== null){
        console.log(i, exsIds.indexOf(i))
        return
      }
      exData.push({exId:i, Aii:res.data.data.assessmentItem.item.id})
    })
  }
  console.log(exData)

  return exData
}


async function verificaTeste(topicId){
  await api.post(urls.verificaTeste, data6(topicId)).then(res=>{
    if(!res.data.data.user.latestUnitTestAttempts[0]){
      return
    }
    console.log(res.data.data.user.latestUnitTestAttempts[0].isCompleted)
  
  }).catch(err=>console.log(err))
}
function data(after, old=false){
  if(old){
  return {"operationName":"UserAssignments","variables":{"after":after,"pageSize":10,"needAssignmentCount":false,"studentListId":studentListId,"coachKaid":coachKaid,"dueAfter":timestamp,"orderBy":"DUE_DATE_ASC","dueBefore":null},"query":"query UserAssignments($after: ID, $dueAfter: DateTime, $dueBefore: DateTime, $pageSize: Int, $orderBy: AssignmentOrder!, $needAssignmentCount: Boolean!, $studentListId: String, $coachKaid: String) {\n  user {\n    id\n    kaid\n    assignmentCount(dueAfter: $dueAfter) @include(if: $needAssignmentCount)\n    assignmentsPage(after: $after, dueAfter: $dueAfter, dueBefore: $dueBefore, pageSize: $pageSize, orderBy: $orderBy, studentListId: $studentListId, coachKaid: $coachKaid) {\n      assignments {\n        id\n        key\n        subjectSlug\n        contents {\n          ...ContentFields\n          __typename\n        }\n        assignedDate\n        dueDate\n        studentList {\n          id\n          cacheId\n          name\n          __typename\n        }\n        totalCompletionStates: itemCompletionStates {\n          student {\n            id\n            kaid\n            __typename\n          }\n          state\n          completedOn\n          bestScore {\n            numCorrect\n            numAttempted\n            __typename\n          }\n          __typename\n        }\n        exerciseConfig {\n          itemPickerStrategy\n          __typename\n        }\n        __typename\n      }\n      pageInfo {\n        nextCursor\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ContentFields on LearnableContent {\n  contentId: id\n  id\n  kind\n  title: translatedTitle\n  defaultUrlPath\n  topicPaths {\n    path {\n      id\n      kind\n      slug\n      __typename\n    }\n    __typename\n  }\n  description: translatedDescription\n  thumbnailUrl\n  slug\n  ... on Exercise {\n    expectedDoNCount: exerciseLength\n    timeEstimate {\n      lowerBound\n      upperBound\n      __typename\n    }\n    __typename\n  }\n  ... on Video {\n    youtubeId\n    translatedYoutubeId\n    duration\n    __typename\n  }\n  __typename\n}\n"}
  }
  return {"operationName":"UserAssignments","variables":{"after":after,"pageSize":10,"needAssignmentCount":false,"studentListId":studentListId,"coachKaid":coachKaid,"dueAfter":null,"orderBy":"DUE_DATE_DESC","dueBefore":timestamp},"query":"query UserAssignments($after: ID, $dueAfter: DateTime, $dueBefore: DateTime, $pageSize: Int, $orderBy: AssignmentOrder!, $needAssignmentCount: Boolean!, $studentListId: String, $coachKaid: String) {\n  user {\n    id\n    kaid\n    assignmentCount(dueAfter: $dueAfter) @include(if: $needAssignmentCount)\n    assignmentsPage(after: $after, dueAfter: $dueAfter, dueBefore: $dueBefore, pageSize: $pageSize, orderBy: $orderBy, studentListId: $studentListId, coachKaid: $coachKaid) {\n      assignments {\n        id\n        key\n        subjectSlug\n        contents {\n          ...ContentFields\n          __typename\n        }\n        assignedDate\n        dueDate\n        studentList {\n          id\n          cacheId\n          name\n          __typename\n        }\n        totalCompletionStates: itemCompletionStates {\n          student {\n            id\n            kaid\n            __typename\n          }\n          state\n          completedOn\n          bestScore {\n            numCorrect\n            numAttempted\n            __typename\n          }\n          __typename\n        }\n        exerciseConfig {\n          itemPickerStrategy\n          __typename\n        }\n        __typename\n      }\n      pageInfo {\n        nextCursor\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ContentFields on LearnableContent {\n  contentId: id\n  id\n  kind\n  title: translatedTitle\n  defaultUrlPath\n  topicPaths {\n    path {\n      id\n      kind\n      slug\n      __typename\n    }\n    __typename\n  }\n  description: translatedDescription\n  thumbnailUrl\n  slug\n  ... on Exercise {\n    expectedDoNCount: exerciseLength\n    timeEstimate {\n      lowerBound\n      upperBound\n      __typename\n    }\n    __typename\n  }\n  ... on Video {\n    youtubeId\n    translatedYoutubeId\n    duration\n    __typename\n  }\n  __typename\n}\n"}
}

function data2(id){
return {"operationName":"getOrCreatePracticeTask","variables":{"input":{"exerciseId":id,"stopCardPersist":false,"canReserveItems":true}},"query":"mutation getOrCreatePracticeTask($input: GetOrCreatePracticeTaskInput!) {\n  getOrCreatePracticeTask(input: $input) {\n    result {\n      error {\n        code\n        debugMessage\n        __typename\n      }\n      userTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        task {\n          contentKey\n          exerciseLength\n          id\n          key\n          pointBounty\n          pointsEarned\n          slug\n          taskType\n          timeEstimate {\n            lowerBound\n            upperBound\n            __typename\n          }\n          completionCriteria {\n            name\n            __typename\n          }\n          promotionCriteria {\n            name\n            value\n            __typename\n          }\n          reservedItems\n          reservedItemsCompleted\n          taskAttemptHistory {\n            correct\n            timeDone\n            seenHint\n            itemId\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...userExerciseFields\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment userExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
}
function data3(exerciseId, itemId, taskKey){
  // return {"operationName":"attemptProblem","variables":{"input":{"problemNumber":null,"assessmentItemSha":"06b4350ebeb8d2126480370a920af993e4f7b2dd","assessmentItemId":itemId,"completed":true,"exerciseId":exerciseId,"topicId":"x1c1cf27b","problemType":"Type 2 - dup","countHints":0,"timeTaken":1,"attemptNumber":1,"attemptContent":"[[{\"currentValue\":\"12\"}],[]]","attemptState":"{\"input-number 1\":{\"simplify\":\"required\",\"size\":\"normal\",\"answerType\":\"number\",\"currentValue\":\"12\"}}","taskContentKey":"ag5zfmtoYW4tYWNhZGVteXIXCxIIRXhlcmNpc2UiCXhmYjBjMTIyOQw","taskKey":taskKey,"skipped":false,"clientDt":timestamp,"localTimezoneOffsetSeconds":-10800,"context":null}},"query":"mutation attemptProblem($input: AttemptProblemInput!) {\n  attemptProblem(attempt: $input) {\n    result {\n      userExercise {\n        ...userExerciseFields\n        __typename\n      }\n      newTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        task {\n          description\n          id\n          key\n          languageTag\n          pointBounty\n          pointsEarned\n          taskType\n          title\n          translatedDescription\n          translatedTitle\n          completionCriteria {\n            name\n            __typename\n          }\n          ... on PracticeTask {\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...userExerciseFields\n          __typename\n        }\n        __typename\n      }\n      actionResults {\n        attemptCorrect\n        notificationsAdded {\n          avatarParts\n          badges\n          readable\n          toast\n          urgent\n          continueUrl\n          __typename\n        }\n        pointsEarned {\n          points\n          __typename\n        }\n        __typename\n      }\n      attemptPromotions {\n        fpmPromotions {\n          progressKey\n          level\n          __typename\n        }\n        __typename\n      }\n      updatedRecommendations {\n        contentId\n        kind\n        sourceId\n        __typename\n      }\n      error {\n        code\n        debugMessage\n        uuid\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment userExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      conceptTagsInfo: conceptTags {\n        id\n        displayName\n        slug\n        __typename\n      }\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  masteryPoints\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
  return {"operationName":"attemptProblem","variables":{"input":{"problemNumber":null,"assessmentItemSha":"c976d841388fb8df9e085808c5c8a0e9dd74c7c8","assessmentItemId":itemId,"completed":true,"exerciseId":exerciseId,"topicId":"x886360f0","problemType":"1. Center and radius","countHints":0,"timeTaken":1,"attemptNumber":1,"attemptContent":"[[{\"type\":\"circle\",\"center\":[2,2],\"radius\":1}],[]]","attemptState":"{\"interactive-graph 1\":{\"backgroundImage\":{\"url\":null},\"correct\":{\"center\":[2,0],\"radius\":2.5,\"type\":\"circle\"},\"graph\":{\"type\":\"circle\",\"center\":[2,2],\"radius\":1},\"gridStep\":[0.5,0.5],\"labels\":[\"x\",\"y\"],\"markings\":\"graph\",\"range\":[[-5,5],[-5,5]],\"rulerLabel\":\"\",\"rulerTicks\":10,\"showProtractor\":false,\"showRuler\":false,\"showTooltips\":false,\"snapStep\":[0.25,0.25],\"step\":[1,1]}}","taskContentKey":"ag5zfmtoYW4tYWNhZGVteXIXCxIIRXhlcmNpc2UiCXgyNWFmOWMwMww","taskKey":taskKey,"skipped":false,"clientDt":timestamp,"localTimezoneOffsetSeconds":-10800,"context":null}},"query":"mutation attemptProblem($input: AttemptProblemInput!) {\n  attemptProblem(attempt: $input) {\n    result {\n      userExercise {\n        ...userExerciseFields\n        __typename\n      }\n      newTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        task {\n          id\n          key\n          pointBounty\n          pointsEarned\n          taskType\n          completionCriteria {\n            name\n            __typename\n          }\n          ... on PracticeTask {\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...userExerciseFields\n          __typename\n        }\n        __typename\n      }\n      actionResults {\n        attemptCorrect\n        notificationsAdded {\n          avatarParts\n          badges\n          readable\n          toast\n          urgent\n          continueUrl\n          __typename\n        }\n        pointsEarned {\n          points\n          __typename\n        }\n        __typename\n      }\n      attemptPromotions {\n        fpmPromotions {\n          progressKey\n          level\n          __typename\n        }\n        __typename\n      }\n      updatedRecommendations {\n        contentId\n        kind\n        sourceId\n        __typename\n      }\n      error {\n        code\n        debugMessage\n        uuid\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment userExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
}
function data4(topicId, positionKey){
  return {"operationName":"getOrCreateExerciseTask","variables":{"input":{"canReserveItems":true,"positionKey":positionKey,"taskType":"topic_quiz","topicId":topicId}},"query":"mutation getOrCreateExerciseTask($input: GetOrCreateExerciseTaskInput!) {\n  getOrCreateExerciseTask(input: $input) {\n    result {\n      error {\n        code\n        debugMessage\n        __typename\n      }\n      actionResults {\n        notificationsAdded {\n          avatarParts\n          badges\n          continueUrl\n          readable\n          toast\n          urgent\n          __typename\n        }\n        __typename\n      }\n      userTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        task {\n          id\n          key\n          pointBounty\n          pointsEarned\n          taskType\n          completionCriteria {\n            name\n            __typename\n          }\n          ... on MasteryChallengeTask {\n            expirationTime\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          ... on SubjectChallengeTask {\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          ... on TopicQuizTask {\n            contentKey\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          ... on TopicUnitTestTask {\n            contentKey\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...exerciseTaskUserExerciseFields\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment exerciseTaskUserExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      conceptTagsInfo: conceptTags {\n        id\n        displayName\n        slug\n        __typename\n      }\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
}
function data5(exerciseId, index){
  return {"operationName":"getAssessmentItem","variables":{"input":{"exerciseId":exerciseId,"problemNumber":index}},"query":"query getAssessmentItem($input: AssessmentItemInput!) {\n  assessmentItem(input: $input) {\n    item {\n      id\n      sha\n      problemType\n      itemData\n      __typename\n    }\n    error {\n      code\n      debugMessage\n      __typename\n    }\n    __typename\n  }\n}\n"}
}
function data6(topicId){
  return {"operationName":"quizAndUnitTestAttemptsQuery","variables":{"topicId":topicId},"query":"query quizAndUnitTestAttemptsQuery($topicId: String!) {\n  user {\n    id\n    latestUnitTestAttempts(unitId: $topicId) {\n      id\n      numAttempted\n      numCorrect\n      completedDate\n      canResume\n      isCompleted\n      __typename\n    }\n    latestQuizAttempts(topicId: $topicId) {\n      id\n      numAttempted\n      numCorrect\n      completedDate\n      canResume\n      isCompleted\n      positionKey\n      __typename\n    }\n    __typename\n  }\n}\n"}
}

await início(null)
async function unitTest(){
  const topicId = await getTopicId()
  await verificaTeste(topicId)
  // const exInfo = []
  // exInfo.map(info=>enviaExercício(info.exerciseId, info.itemId, info.taskKey))
  // await verificaTeste(topicId)

}
// unitTest()

async function getTopicId(){
  const urlMath = await api.post(urls.recebeRecomendações, data(null)).then(res=>{
    for(let i of res.data.data.user.assignmentsPage.assignments){
      if(i.contents[0].kind === 'TopicUnitTest'){
         return `https://pt.khanacademy.org${i.contents[0].defaultUrlPath.slice(0,i.contents[0].defaultUrlPath.indexOf("#"))}`
        
      }
    }
  })
  const topicId = await axios.get(urlMath).then(res=>{
    const topic = res.data.slice(res.data.indexOf('"topic"'))
    const id = topic.slice(topic.indexOf('"id"')+6)
    return id.slice(0, id.indexOf('"'))
 }).catch(err=>console.log(err))
 return topicId
}
console.log(exercíciosFeitos)
}
