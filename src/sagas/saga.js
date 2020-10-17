import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_DATA, DELETE_DATA, POST_DATA, receiveApiData, receiveDeletedData, receivePostedData } from '../actions/myAction';
import { fetchData, fetchDeletedData, fetchPostedData} from '../api';

function* getApiData(action) {
  try {
    const payload = yield call(fetchData);
    yield put(receiveApiData(payload));
    // console.log("this is my dataa", payload);
  } catch (e) {
    console.log(e);
  }
}

function* getDeletedApiData(action) {
  try {
    const payload = yield call(fetchDeletedData, action.id);
    yield put(receiveDeletedData(payload));
    // console.log("this is my deleted dataa", payload);
  } catch (e) {
    console.log(e);
  }
}

function* getPostedApiData(action) {
  try {
    const payload = yield call(fetchPostedData, action.name, action.phone);
    yield put(receivePostedData(payload));
    // console.log("this is my posted dataa", payload);
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_DATA, getApiData);
  yield takeLatest(DELETE_DATA, getDeletedApiData);
  yield takeLatest(POST_DATA, getPostedApiData);
}




