import axios from '../axios'

class Backend {

    getCategories() {
        return axios.get('categories');
    }

    getSubCategories(id){
        return axios.get(`subCategories/${id}`)
    }

    getTrainers() {
        return axios.get('trainers/')
    }

    getTutorial(id) {
        return axios.get(`tutorials/${id}`)
    }

    getTutorials() {
        return axios.get('tutorials/')
    }

    getLessons(id) {
        return axios.get(`skills/lessons/${id}`)
    }

    registerUser(data) {
        return axios.post('users/register', data)
    }

    loginUser(data) {
        return axios.post('users/login/', data)
    }

    getTrainers(data){
        return axios.get('/trainers', data)
    }

    uploadProfilePic(formData) {
        return axios.post(`users/uploadProfilePic`, formData)
    }
    getComments() {
        return axios.get('/chats')
    }
  }

export default new Backend()