import { takeEvery,put } from 'redux-saga/effects';
import {loadTodos, loadTodoItem, GET_TODO_ITEM} from '../redux/todo';


function* getTodoItemSaga(payload) {
    console.log("this is the id:",payload);
    // alert("https://jsonplaceholder.typicode.com/todos/" + payload.id);
    try {
        const todo = yield fetch("https://jsonplaceholder.typicode.com/todos/" + payload.id)
            .then(resp => resp.json())
            .then(json => json)
            .catch(err => err)
            // alert(todo.id);
            // alert("todo item" + todo.id);
            yield put(loadTodoItem(todo));

    }
    catch (err) {
        console.log(err);
    }
}
function* getTodosSaga() {
    try {
        const todos = yield fetch("https://jsonplaceholder.typicode.com/todos")
            .then(resp => resp.json())
            .then(json => json)
            .catch(err => err)

            yield put(loadTodos(todos));

    }
    catch (err) {
        console.log(err);
    }
}

function* mainSaga() {
    // console.log('test');
    yield takeEvery("GET_TODOS", getTodosSaga);
    yield takeEvery(GET_TODO_ITEM, getTodoItemSaga);
}

export default mainSaga;