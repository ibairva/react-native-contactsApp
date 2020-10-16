import { put, takeEvery} from 'redux-saga/effects';



function* getContacts(){
    yield put({ type:"GET_CONTACTS", payload:""});
}

export function* watchGet(){
    yield takeEvery("GET_DATA", getContacts);
}

function* postContacts(){
    yield put({ type:"POST_CONTACTS", payload:resp.data});
}

export function* watchPost(){
    yield takeEvery("POST_DATA", postContacts);
}

function* deleteContacts(){
    yield put({ type:"DELETE_CONTACTS", payload:item});
}

export function* watchDelete(){
   
    yield takeEvery("DELETE_DATA", deleteContacts);
}



