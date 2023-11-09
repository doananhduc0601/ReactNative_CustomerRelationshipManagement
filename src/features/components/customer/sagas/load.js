import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { GetData } from "../../../../utils/async_Storage";

export function* watchLoadCustomers() {
    yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
    try {
        const customers = yield GetData("CUSTOMERS_KEY");

        yield delay(1500);

        yield put(actions.loadResult(customers));
    } catch (error) {
        yield put(actions.loadResult([]));
    }
}