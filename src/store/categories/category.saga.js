import { all, call, put, takeLatest } from "redux-saga/effects"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from "./category.action"
import { CATEGORIES_ACTION_TYPES } from "./category.types"

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments, "categories")
    yield put(fetchCategoriesSuccess(categories))
  }
  catch (error) {
    yield put(fetchCategoriesFailed(error))
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGOIRES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}
