import axios from 'axios'

export const slackIntegration = async (id, token) => {
    try {
        let response = await axios.post('https://de63-103-218-24-121.ngrok.io/attendance/slack/integration/', { id },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )

    return response
    } catch (error) {
       let response={
            status:404
        }
        return response 
    }
       
   
}