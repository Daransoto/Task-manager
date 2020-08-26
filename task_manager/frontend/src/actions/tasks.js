import axios from 'axios';
import { GET_TASKS, DELETE_TASK, ADD_TASK } from './types'

export const getTasks = () => dispatch => {
  axios.get('/api/tasks/')
    .then(res => {
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
    }).catch(err => console.log(err));
}

export const deleteTask = (id) => dispatch => {
  axios.delete(`/api/tasks/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    }).catch(err => console.log(err));
}

export const addTask = task => dispatch => {
  axios.post('/api/tasks/', task)
    .then(res => {
      dispatch({
        type: ADD_TASK,
        payload: res.data
      })
    }).catch(err => console.log(err));
}
