import  * as axios from "axios";


const instance = axios.create({
    withCredentials : true,
    headers: {
        "API-KEY":'ed251c57-b6e1-488e-8bf4-59e6c01b56db'
      },
      baseURL:'https://social-network.samuraijs.com/api/1.0/'
});


export const usersAPI = {
    
    getUsers (currentPage = 4, pageSize=4 ){
        
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`
            )
            .then(response =>{
                
                return (
                    response.data
                )
                })
                
        )
    },
    unfollow (userId) {
        return (
            instance.delete(`follow/${userId}`
            )
            .then(response =>response.data.resultCode)
        )
    },
    follow (userId ) {
        return (
            instance.post(`follow/${userId}`)
            .then(response =>response.data.resultCode)
        )
    }    
}
  
export const authAPI = {
    statusMe(){
        return(
            instance.get(`auth/me`)
        )
    },
    login(email, password, rememberMe = false){
        
        return(
            instance.post(`auth/login`,{email : email, password : password, rememberMe : rememberMe, captcha: false })
            
        )
        
    },
    logout(){
        return(
            instance.delete(`auth/login`)
        )
    }
}

export const ProfileAPI = {
    getProfile(userId){
        return(
            instance.get(`profile/`+ userId)
            .then(response =>response.data)
        )
    },
    getStatus(userId){
        return(            
            instance.get(`profile/status/`+ userId)
            .then(response =>response.data)
        )
    },
    updateStatus(status){
        return(
            instance.put(`profile/status/`,{ status : status })
        )
    }
}