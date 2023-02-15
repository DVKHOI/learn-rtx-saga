import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('log', action);
// }
function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 1s');
  // Waiting 1s
  yield delay(1000);
  // Waiting depatch action
  console.log('Waiting done dipatch action');
  yield put(incrementSagaSuccess(action.payload));
}
export default function* counterSaga() {
  console.log('Counter saga');
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
