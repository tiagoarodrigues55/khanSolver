const axios = require('axios')

axios.get("https://khansolver.vercel.app/api/getSubscribers").then(res=>{
        console.log(res.data)
})
