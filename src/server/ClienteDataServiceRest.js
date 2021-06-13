import http from "./http-common"

const getAll = () => {
    return http.get("cliente")
}

const get = id => {
    return http.get(`/cliente/$`)
}
const create = data => {
    return http.post("/cliente", data)
}

const update = (id, data) => {
    return http.put(`/cliente/${id}`, data)
}

const remove = id => {
    return http.delete(`/cliente/${id}`)
}

const removeAll = () => {
    return http.delete(`/cliente/`)
}

const findByTitle = tittle => {
    return http.get(`/cliente/?title=${tittle}`)
}

export default {
    get,
    getAll,
    create,
    update,
    remove,
    removeAll,
    findByTitle
}