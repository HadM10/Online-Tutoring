import axios from '../axios'

class Backend {

    getCategories() {
        return axios.get(`skills/categories`);
    }

    getSubCategories(id) {
        return axios.get(`skills/subCategories/${id}`)
    }

    getTrainers(id) {
        return axios.get(`skills/tutorials/${id}`)
    }

    getTutorials(id) {
        return axios.get(`skills/tutorials/${id}`)
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

    uploadPofilePic(formData) {
        return axios.post(`users/uploadProfilePic`, formData)
    }
  }

export default Backend