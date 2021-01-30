const axios = require('axios')
const fkey = '1.0_1lkpe7q2p868tb253ko312b9pv6s2c6ver013djblkphqk81c7ha4r359vqns3jmd4lq_1611846779237'
const studentListId = "5309668941840384"
const coachKaid = "kaid_566388036348377688031191"
const username = "tiago113"
const dueAfter = "2020-12-19T20:14:00.709Z"
const hashUrls = "210128-0616-9fec3d0fbe4c_1611846929906"
const cookies = 'KAVID=78bba636-928f-417a-9c16-a5b0e1b101ec; _gcl_au=1.1.1289192661.1605624690; _ga=GA1.2.111229800.1605624690; G_ENABLED_IDPS=google; ki_r=; ki_t=1606186128184%3B1606325954154%3B1606325954154%3B2%3B6; _fbp=fb.1.1608399972890.649270967; _gid=GA1.2.617799742.1611846547; fkey=1.0_1lkpe7q2p868tb253ko312b9pv6s2c6ver013djblkphqk81c7ha4r359vqns3jmd4lq_1611846779237; KAAS=6F_KJF8v2m0KYV4Jqt0zOA; LIS=pt; KAAL=$W9I9lZOStlU8qTcBM53dxJgLEMbmBb-vQocWHvuwYKA.~qnnh1j$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY*; KAAC=$ZGcWB5EcZFFSn-7tQKUyVLxKsQgG0B2GLxPHgSIf7QE.~qnnh1j$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY*$a2FpZF81ODQ5NzE1NTA2NzUwOTQ0MjIyMDQ0MjY!0!0!1~2'
const urls = {
  recebeRecomendações: `https://pt.khanacademy.org/api/internal/graphql/UserAssignments?lang=pt&_=${hashUrls}`,
  recebeExercícios: `https://pt.khanacademy.org/api/internal/graphql/getOrCreatePracticeTask?lang=pt&_=${hashUrls}`, 
  enviaExercício: `https://pt.khanacademy.org/api/internal/_mt/graphql/attemptProblem?lang=pt&_=${hashUrls}`
}
const headers = {
  'Host': 'pt.khanacademy.org',
  'Connection': 'close',
  'Content-Length': '2412',
  'accept': '*/*',
  'x-ka-fkey': `${fkey}`,
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
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
var ExercisesIds = []



async function início(after){
  ExercisesIds = await recebeRecomendações(after)
  if(!ExercisesIds[0]){
    return
  }else{
    console.log(ExercisesIds)
    // início(null)
  }
  ExercisesIds.map(id=>recebeExercícios(id))
}



const exercises = []
function recebeRecomendações(after){
  const exercisesIds = []
  const ids = api.post(urls.recebeRecomendações, data(after)).then(res=>{
    if(res.data.data.user.assignmentsPage.pageInfo.nextCursor){
      início(res.data.data.user.assignmentsPage.pageInfo.nextCursor)
    }
  for(let i of res.data.data.user.assignmentsPage.assignments){
    if(!i.totalCompletionStates){
      i.contents.map(res=>{
        if(res.kind==='Exercise'){
          exercisesIds.push(res.id)
        }
      })
    }else{
    if(i.totalCompletionStates[0].state!=='completed'){    
        i.contents.map(res=>{
          if(res.kind==='Exercise'){
            exercisesIds.push(res.id)
          }
        })
    }
  }
}


  return exercisesIds
  }).catch(err=>{console.log('função1'); console.log(err)})
  return ids
}
 function recebeExercícios(id){
  if(!ExercisesIds[0]){
    return
  }
   api.post(urls.recebeExercícios, data2(id)).then(res=>{
   
      res.data.data.getOrCreatePracticeTask.result.userTask.task.reservedItems.map(items=>{
          exercises.push({exerciseId:items.slice(0, items.indexOf('|')), itemId: items.slice(items.indexOf('|')+1), taskKey: res.data.data.getOrCreatePracticeTask.result.userTask.task.key})
      })

      exercises.map(ex=>enviaExercício(ex.exerciseId, ex.itemId, ex.taskKey))
    }).catch(err=>{console.log('função2 id:' + id); console.log(err.response.status)})

}
let exercíciosFeitos = []
function enviaExercício(exerciseId, itemId, taskKey){
  // console.log(exerciseId, itemId)
  if(!ExercisesIds[0]){
    return
  }
  if(exercíciosFeitos.indexOf(itemId)!==-1){
    return
  }
  api.post(urls.enviaExercício, data3(exerciseId, itemId, taskKey)).then(res=>{
    if(res.status === 200){
    exercíciosFeitos.push(itemId)
    }else{
      console.log(res.status)
    }
    console.log(exerciseId, itemId + ' Sucesso')
    console.log(res.status)
  }).catch(err=>{console.log('função3 id:' + exerciseId); console.log(err.response.status)})
}


function data(after){
  return {"operationName":"UserAssignments","variables":{"after":after,"pageSize":10,"needAssignmentCount":false,"studentListId":studentListId,"coachKaid":coachKaid,"orderBy":"DUE_DATE_DESC","dueAfter":dueAfter,"dueBefore":null},"query":"query UserAssignments($after: ID, $dueAfter: DateTime, $dueBefore: DateTime, $pageSize: Int, $orderBy: AssignmentOrder!, $needAssignmentCount: Boolean!, $studentListId: String, $coachKaid: String) {\n  user {\n    id\n    kaid\n    assignmentCount(dueAfter: $dueAfter) @include(if: $needAssignmentCount)\n    assignmentsPage(after: $after, dueAfter: $dueAfter, dueBefore: $dueBefore, pageSize: $pageSize, orderBy: $orderBy, studentListId: $studentListId, coachKaid: $coachKaid) {\n      assignments {\n        id\n        key\n        subjectSlug\n        contents {\n          ...ContentFields\n          __typename\n        }\n        assignedDate\n        dueDate\n        studentList {\n          id\n          cacheId\n          name\n          __typename\n        }\n        totalCompletionStates: itemCompletionStates {\n          student {\n            id\n            kaid\n            __typename\n          }\n          state\n          completedOn\n          bestScore {\n            numCorrect\n            numAttempted\n            __typename\n          }\n          __typename\n        }\n        exerciseConfig {\n          itemPickerStrategy\n          __typename\n        }\n        __typename\n      }\n      pageInfo {\n        nextCursor\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ContentFields on LearnableContent {\n  contentId: id\n  id\n  kind\n  title: translatedTitle\n  defaultUrlPath\n  topicPaths {\n    path {\n      id\n      kind\n      slug\n      __typename\n    }\n    __typename\n  }\n  description: translatedDescription\n  thumbnailUrl\n  slug\n  ... on Exercise {\n    expectedDoNCount: exerciseLength\n    timeEstimate {\n      lowerBound\n      upperBound\n      __typename\n    }\n    __typename\n  }\n  ... on Video {\n    imageUrl: thumbnailUrl\n    youtubeId\n    translatedYoutubeId\n    duration\n    __typename\n  }\n  __typename\n}\n"}
}
function data2(id){
return {"operationName":"getOrCreatePracticeTask","variables":{"input":{"exerciseId":id,"stopCardPersist":false,"canReserveItems":true}},"query":"mutation getOrCreatePracticeTask($input: GetOrCreatePracticeTaskInput!) {\n  getOrCreatePracticeTask(input: $input) {\n    result {\n      error {\n        code\n        debugMessage\n        __typename\n      }\n      userTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        includeOptOutButton\n        includeWorkedExampleButton\n        practiceExercise {\n          ...userExerciseFields\n          __typename\n        }\n        readOnly\n        task {\n          contentKey\n          directLink\n          description\n          exerciseLength\n          id\n          key\n          languageTag\n          pointBounty\n          pointsEarned\n          slug\n          taskType\n          title\n          timeEstimate {\n            lowerBound\n            upperBound\n            __typename\n          }\n          translatedDescription\n          translatedTitle\n          avatarPartsAwarded {\n            id\n            name\n            partType\n            thumbnailSrc\n            translatedDisplayName\n            translatedRequirements\n            __typename\n          }\n          badgesAwarded {\n            iconSrc\n            translatedDescription\n            translatedExtendedDescription\n            __typename\n          }\n          completionCriteria {\n            name\n            __typename\n          }\n          promotionCriteria {\n            name\n            value\n            __typename\n          }\n          reservedItems\n          reservedItemsCompleted\n          taskAttemptHistory {\n            correct\n            timeDone\n            seenHint\n            itemId\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...userExerciseFields\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment userExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      conceptTagsInfo: conceptTags {\n        id\n        displayName\n        slug\n        __typename\n      }\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  masteryPoints\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
}
function data3(exerciseId, itemId, taskKey){
  return {"operationName":"attemptProblem","variables":{"input":{"problemNumber":null,"assessmentItemSha":"f1cc8f1a26ff1c090a41c02aa0bf3e635e4b8f59","assessmentItemId":itemId,"completed":true,"exerciseId":exerciseId,"topicId":"x126004ad","problemType":"problem-type-0","countHints":0,"timeTaken":8,"attemptNumber":1,"attemptContent":"[[{\"multInput\":false,\"currentValue\":\"-8\"}],[]]","attemptState":"{\"numeric-input 1\":{\"coefficient\":false,\"static\":false,\"labelText\":\"\",\"size\":\"normal\",\"answerForms\":[],\"currentValue\":\"-8\"}}","taskContentKey":"ag5zfmtoYW4tYWNhZGVteXISCxIIRXhlcmNpc2UYq-6PjwUM","taskKey":taskKey,"skipped":false,"clientDt":"2020-12-19T04:13:43.210Z","localTimezoneOffsetSeconds":-10800,"context":null}},"query":"mutation attemptProblem($input: AttemptProblemInput!) {\n  attemptProblem(attempt: $input) {\n    result {\n      userExercise {\n        ...userExerciseFields\n        __typename\n      }\n      newTask {\n        cards {\n          done\n          cardType\n          ... on ProblemCard {\n            exerciseName\n            problemType\n            __typename\n          }\n          __typename\n        }\n        includeSkipButton\n        task {\n          description\n          id\n          key\n          languageTag\n          pointBounty\n          pointsEarned\n          taskType\n          title\n          translatedDescription\n          translatedTitle\n          avatarPartsAwarded {\n            id\n            name\n            partType\n            thumbnailSrc\n            translatedDisplayName\n            translatedRequirements\n            __typename\n          }\n          badgesAwarded {\n            iconSrc\n            translatedDescription\n            translatedExtendedDescription\n            __typename\n          }\n          completionCriteria {\n            name\n            __typename\n          }\n          ... on PracticeTask {\n            promotionCriteria {\n              name\n              value\n              __typename\n            }\n            reservedItems\n            reservedItemsCompleted\n            taskAttemptHistory {\n              correct\n              timeDone\n              seenHint\n              itemId\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        userExercises {\n          ...userExerciseFields\n          __typename\n        }\n        __typename\n      }\n      actionResults {\n        attemptCorrect\n        notificationsAdded {\n          avatarParts\n          badges\n          readable\n          toast\n          urgent\n          continueUrl\n          __typename\n        }\n        pointsEarned {\n          points\n          __typename\n        }\n        __typename\n      }\n      attemptPromotions {\n        fpmPromotions {\n          progressKey\n          level\n          __typename\n        }\n        __typename\n      }\n      updatedRecommendations {\n        contentId\n        kind\n        sourceId\n        __typename\n      }\n      error {\n        code\n        debugMessage\n        uuid\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment userExerciseFields on UserExercise {\n  exerciseModel: exercise {\n    id\n    assessmentItemCount: numAssessmentItems\n    displayName\n    isQuiz\n    isSkillCheck\n    name\n    nodeSlug\n    progressKey\n    translatedDisplayName\n    relatedContent {\n      id\n      contentKind\n      kind\n      thumbnailUrl\n      translatedTitle\n      topicPaths {\n        path {\n          id\n          kind\n          slug\n          __typename\n        }\n        __typename\n      }\n      ... on Article {\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        __typename\n      }\n      ... on Video {\n        duration\n        imageUrl\n        kaUrl\n        nodeSlug\n        relativeUrl\n        slug\n        translatedYoutubeId\n        __typename\n      }\n      __typename\n    }\n    relatedVideos {\n      conceptTagsInfo: conceptTags {\n        id\n        displayName\n        slug\n        __typename\n      }\n      contentKind\n      duration\n      id\n      imageUrl\n      kaUrl\n      kind\n      nodeSlug\n      progressKey\n      relativeUrl\n      slug\n      thumbnailUrl\n      translatedDescription\n      translatedTitle\n      translatedYoutubeId\n      __typename\n    }\n    problemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    translatedProblemTypes {\n      items {\n        id\n        live\n        sha\n        __typename\n      }\n      name\n      relatedVideos\n      __typename\n    }\n    __typename\n  }\n  exercise: exerciseName\n  fpmMasteryLevel\n  lastAttemptNumber\n  lastCountHints\n  lastDone\n  lastMasteryUpdate\n  longestStreak\n  masteryPoints\n  maximumExerciseProgressDt: maximumExerciseProgressDate\n  streak\n  totalCorrect\n  totalDone\n  __typename\n}\n"}
}

início(null)




