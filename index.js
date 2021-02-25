const axios = require('axios')
const getCookies = require('./getCookies')
var timestamp = new Date().toISOString()


// const logins = [{login: 'tiagoarodrigues55', senha: 'Tiago2003'}, {login: 'tiago113', senha: 'skebfcqm'}, {login: 'tiago228', senha: 'xtsyrscw' }, {login: 'tiago3274', senha: 'quabxnsz'}]

login()
async function login(){
  const logins = await axios.get('https://khansolver.vercel.app/api/getSubscribers').then(res=>res.data)
for(let login of logins){
  console.log('chamei main passando o login: ' + login.username)
  await solve(login.username, login.password)
}
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
// const cookies = "KAVID=c2157bf0-36ba-45b3-8a6b-2c90e8cdcfa3; _gcl_au=1.1.1071199951.1612879540; _ga=GA1.2.1926539698.1612879548; _gid=GA1.2.625633886.1612879548; G_ENABLED_IDPS=google; fkey=1.0_2olctu033ojejvj4lr2qkp0febrlgcu02fanm6faunqq59u9jmj2fik7bj1vqgug9_1612880866831; KAAS=XFmsiCHVkVRRSyDX1qt9RQ; LIS=pt; KAAL=$DUJo65Rh01SfZoCt6KP8LQxUopzOtlj3RAjkUCr1q7c.~qo9muv$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY*; KAAC=$k6sAAok4r8KfDJ4bLmo889XMJX2j4EmYDyyzpZGFgUo.~qo9muv$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY*$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY!0!0!1~2; _gat=1"
const urls = {
  recebeRecomendações: `https://pt.khanacademy.org/api/internal/graphql/UserAssignments?lang=pt&_=${hashUrls}`,
  recebeUnitTests: `https://pt.khanacademy.org/api/internal/graphql/getOrCreateExerciseTask?lang=pt&_=${hashUrls}`, 
  recebeExercícios: `https://pt.khanacademy.org/api/internal/graphql/getOrCreatePracticeTask?lang=pt&_=${hashUrls}`, 
  enviaExercício: `https://pt.khanacademy.org/api/internal/_mt/graphql/attemptProblem?lang=pt&_=${hashUrls}`,
  recebeAssentmentId: `https://pt.khanacademy.org/api/internal/graphql/getAssessmentItem?lang=pt&_${hashUrls}`
}
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
  'Referer':`https://pt.khanacademy.org/profile/${username}/assignments/teacher/${coachKaid}/class/${studentListId}`,
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': `${cookies}`
}
const api = axios.create({
  headers,
});
let ExercisesIds = []



async function início(after){
  console.log('função inicio chamada')
  ExercisesIds = await recebeRecomendações(after)
  if(!ExercisesIds){
    console.log('nenhum id de exercício foi retornado pela função recebeRecomendações')
    return
  }else{
    console.log('Esses foram os exercícios retornados pela função recebeRecomendações')
    // início(null)
  }
  console.log('Chamando a função recebeExercícios para cada id recolhido')
  console.log(ExercisesIds)

  await ExercisesIds.map(id=>recebeExercícios(id))
  
return
}



const exercises = []
async function recebeRecomendações(after){
  console.log('inicia a função recebeRecomendações')
  const exercisesIds = []
  const ids = await api.post(urls.recebeRecomendações, data(after)).then(res=>{
    if(res.data.data.user.assignmentsPage.pageInfo.nextCursor){
      console.log('chamando a função inicio passando o próximo cursor')
      início(res.data.data.user.assignmentsPage.pageInfo.nextCursor)
    }
  for(let i of res.data.data.user.assignmentsPage.assignments){
    if(i.contents[0].kind === 'TopicUnitTest'){
      console.log("Tem teste da unidade!!")
    }
    if(i.contents[0].kind === 'TopicQuiz'){
      console.log("Tem quiz da unidade!!")
    }
    if(!i.totalCompletionStates){
        if(i.contents[0].kind==='Exercise' && exercisesIds.indexOf(i.contents[0].id)===-1){
          exercisesIds.push(i.contents[0].id)
        }
      
    }else{
    if(i.totalCompletionStates[0].state!=='completed'){    
      // console.log(i.contents)
          if(i.contents[0].kind==='Exercise' && exercisesIds.indexOf(i.contents[0].id)===-1){
            exercisesIds.push(i.contents[0].id)
          }
        
    }
  }
}

  return exercisesIds
  }).catch(err=>{console.log('função1'); console.log(err)})
  return ids
}
const exercíciosPropostos = []
 function recebeExercícios(id){
   console.log('Começou a função recebExercícios com o parâmetro: ' + id)
   const Exercises = []
  if(!ExercisesIds[0]){
    return
  }
   api.post(urls.recebeExercícios, data2(id)).then(res=>{
    
      res.data.data.getOrCreatePracticeTask.result.userTask.task.reservedItems.map(items=>{
          Exercises.push({exerciseId:items.slice(0, items.indexOf('|')), itemId: items.slice(items.indexOf('|')+1), taskKey: res.data.data.getOrCreatePracticeTask.result.userTask.task.key})
      })
      console.log('Chama a função enviaExercicio para cada exercicio da lista Exercises')
      Exercises.map(ex=>{enviaExercício(ex.exerciseId, ex.itemId, ex.taskKey);
        exercíciosPropostos.push(ex.itemId)
      })
    }).catch(err=>{console.log('função2 id:' + id); console.log(err)})

}
//   function recebeUnitTests(id){
//    console.log('Começou a função recebeUnitTests com o parâmetro: ' + id)
//    const Exercises = []
 
//    api.post(urls.recebeUnitTests, data4(id)).then(res=>{
//      const exsIds = []
//     res.data.data.getOrCreateExerciseTask.result.userTask.userExercises.map(ex=>{
//       if(exsIds.indexOf(ex.exerciseModel.id)===-1){
//       exsIds.push(ex.exerciseModel.id)
//       }
//     })
//     console.log("chamei getAssentment")
//     const exs =  getAssentmentItemId(exsIds)
//       console.log('Chama a função enviaExercicio para cada exercicio da lista Exercises')
//       // Exercises.map(ex=>enviaExercício(ex.exerciseId, ex.itemId, ex.taskKey))
//     }).catch(err=>{console.log('função2 id:' + id); console.log(err)})

// }
let exercíciosFeitos = []

function enviaExercício(exerciseId, itemId, taskKey){
  // console.log(exerciseId, itemId)
  if(!ExercisesIds[0]){
    console.log('Não tem mais ids no ExercisesIds')
    return
  }
  if(exercíciosFeitos.indexOf(itemId)!==-1){
    console.log(`O exercício (${exerciseId}, ${itemId}, ${taskKey}) já está nos exercícios feitos`)
    return
  }
  api.post(urls.enviaExercício, data3(exerciseId, itemId, taskKey)).then(res=>{
    if(res.status === 200){
    exercíciosFeitos.push(itemId)
    console.log(`O exercício (${itemId}) foi adicionado aos exercícios feitos`)
    }else{
      console.log(res.status)
    }

  }).catch(err=>{console.log('função3 id:' + exerciseId); console.log(err.response.status)})
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

function data(after){
  return {"operationName":"UserAssignments","variables":{"after":after,"pageSize":10,"needAssignmentCount":false,"studentListId":studentListId,"coachKaid":coachKaid,"orderBy":"DUE_DATE_DESC","dueAfter":dueAfter,"dueBefore":null},"query":"query UserAssignments($after: ID, $dueAfter: DateTime, $dueBefore: DateTime, $pageSize: Int, $orderBy: AssignmentOrder!, $needAssignmentCount: Boolean!, $studentListId: String, $coachKaid: String) {\n  user {\n    id\n    kaid\n    assignmentCount(dueAfter: $dueAfter) @include(if: $needAssignmentCount)\n    assignmentsPage(after: $after, dueAfter: $dueAfter, dueBefore: $dueBefore, pageSize: $pageSize, orderBy: $orderBy, studentListId: $studentListId, coachKaid: $coachKaid) {\n      assignments {\n        id\n        key\n        subjectSlug\n        contents {\n          ...ContentFields\n          __typename\n        }\n        assignedDate\n        dueDate\n        studentList {\n          id\n          cacheId\n          name\n          __typename\n        }\n        totalCompletionStates: itemCompletionStates {\n          student {\n            id\n            kaid\n            __typename\n          }\n          state\n          completedOn\n          bestScore {\n            numCorrect\n            numAttempted\n            __typename\n          }\n          __typename\n        }\n        exerciseConfig {\n          itemPickerStrategy\n          __typename\n        }\n        __typename\n      }\n      pageInfo {\n        nextCursor\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ContentFields on LearnableContent {\n  contentId: id\n  id\n  kind\n  title: translatedTitle\n  defaultUrlPath\n  topicPaths {\n    path {\n      id\n      kind\n      slug\n      __typename\n    }\n    __typename\n  }\n  description: translatedDescription\n  thumbnailUrl\n  slug\n  ... on Exercise {\n    expectedDoNCount: exerciseLength\n    timeEstimate {\n      lowerBound\n      upperBound\n      __typename\n    }\n    __typename\n  }\n  ... on Video {\n    imageUrl: thumbnailUrl\n    youtubeId\n    translatedYoutubeId\n    duration\n    __typename\n  }\n  __typename\n}\n"}
}
function data2(id){
return {"operationName":"getOrCreatePracticeTask","variables":{"input":{"exerciseId":id,"stopCardPersist":false,"canReserveItems":true}},"query":"mutation getOrCreatePracticeTask($input: GetOrCreatePracticeTaskInput!) {\n  getOrCreatePracticeTask(input: $input) {\n    result {\n      error {\n        code\n        debugMessage\n        __typename\n      }\n      userTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        includeOptOutButton\n        includeWorkedExampleButton\n        practiceExercise {\n          ...userExerciseFields\n          __typename\n        }\n        readOnly\n        task {\n          contentKey\n          directLink\n          description\n          exerciseLength\n          id\n          key\n          languageTag\n          pointBounty\n          pointsEarned\n          slug\n          taskType\n          title\n          timeEstimate {\n            lowerBound\n            upperBound\n            __typename\n          }\n          translatedDescription\n          translatedTitle\n          completionCriteria {\n            name\n            __typename\n          }\n          promotionCriteria {\n            name\n            value\n            __typename\n          }\n          reservedItems\n          reservedItemsCompleted\n          taskAttemptHistory {\n            correct\n            timeDone\n            seenHint\n            itemId\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...userExerciseFields\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment userExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      conceptTagsInfo: conceptTags {\n        id\n        displayName\n        slug\n        __typename\n      }\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  masteryPoints\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
}
function data3(exerciseId, itemId, taskKey){
  return {"operationName":"attemptProblem","variables":{"input":{"problemNumber":null,"assessmentItemSha":"f1cc8f1a26ff1c090a41c02aa0bf3e635e4b8f59","assessmentItemId":itemId,"completed":true,"exerciseId":exerciseId,"topicId":"x126004ad","problemType":"problem-type-0","countHints":0,"timeTaken":8,"attemptNumber":1,"attemptContent":"[[{\"multInput\":false,\"currentValue\":\"-8\"}],[]]","attemptState":"{\"numeric-input 1\":{\"coefficient\":false,\"static\":false,\"labelText\":\"\",\"size\":\"normal\",\"answerForms\":[],\"currentValue\":\"-8\"}}","taskContentKey":"ag5zfmtoYW4tYWNhZGVteXISCxIIRXhlcmNpc2UYq-6PjwUM","taskKey":taskKey,"skipped":false,"clientDt":"2020-12-19T04:13:43.210Z","localTimezoneOffsetSeconds":-10800,"context":null}},"query":"mutation attemptProblem($input: AttemptProblemInput!) {\n  attemptProblem(attempt: $input) {\n    result {\n      userExercise {\n        ...userExerciseFields\n        __typename\n      }\n      newTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        task {\n          description\n          id\n          key\n          languageTag\n          pointBounty\n          pointsEarned\n          taskType\n          title\n          translatedDescription\n          translatedTitle\n          avatarPartsAwarded {\n            id\n            name\n            partType\n            thumbnailSrc\n            translatedDisplayName\n            translatedRequirements\n            __typename\n          }\n          badgesAwarded {\n            iconSrc\n            translatedDescription\n            translatedExtendedDescription\n            __typename\n          }\n          completionCriteria {\n            name\n            __typename\n          }\n          ... on PracticeTask {\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...userExerciseFields\n          __typename\n        }\n        __typename\n      }\n      actionResults {\n        attemptCorrect\n        notificationsAdded {\n          avatarParts\n          badges\n          readable\n          toast\n          urgent\n          continueUrl\n          __typename\n        }\n        pointsEarned {\n          points\n          __typename\n        }\n        __typename\n      }\n      attemptPromotions {\n        fpmPromotions {\n          progressKey\n          level\n          __typename\n        }\n        __typename\n      }\n      updatedRecommendations {\n        contentId\n        kind\n        sourceId\n        __typename\n      }\n      error {\n        code\n        debugMessage\n        uuid\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment userExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      conceptTagsInfo: conceptTags {\n        id\n        displayName\n        slug\n        __typename\n      }\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  masteryPoints\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
}
function data4(topicId){
  return {"operationName":"getOrCreateExerciseTask","variables":{"input":{"canReserveItems":true,"taskType":"topic_unit_test","topicId":topicId}},"query":"mutation getOrCreateExerciseTask($input: GetOrCreateExerciseTaskInput!) {\n  getOrCreateExerciseTask(input: $input) {\n    result {\n      error {\n        code\n        debugMessage\n        __typename\n      }\n      actionResults {\n        notificationsAdded {\n          avatarParts\n          badges\n          continueUrl\n          readable\n          toast\n          urgent\n          __typename\n        }\n        __typename\n      }\n      userTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        task {\n          description\n          id\n          key\n          languageTag\n          pointBounty\n          pointsEarned\n          taskType\n          title\n          translatedDescription\n          translatedTitle\n          completionCriteria {\n            name\n            __typename\n          }\n          ... on MasteryChallengeTask {\n            expirationTime\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          ... on SubjectChallengeTask {\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          ... on TopicQuizTask {\n            contentKey\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          ... on TopicUnitTestTask {\n            contentKey\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...exerciseTaskUserExerciseFields\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment exerciseTaskUserExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      conceptTagsInfo: conceptTags {\n        id\n        displayName\n        slug\n        __typename\n      }\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  masteryPoints\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
}
function data5(exerciseId, index){
  return {"operationName":"getAssessmentItem","variables":{"input":{"exerciseId":exerciseId,"problemNumber":index}},"query":"query getAssessmentItem($input: AssessmentItemInput!) {\n  assessmentItem(input: $input) {\n    item {\n      id\n      sha\n      problemType\n      itemData\n      __typename\n    }\n    error {\n      code\n      debugMessage\n      __typename\n    }\n    __typename\n  }\n}\n"}
}

await início(null)
}

