import { createSelector } from "reselect"
import { CategoriesState } from "./category.reducer"
import { Category, CategoryMap } from "./category.types"
import { rootReducer } from "../root-reducer"
import { RootState } from "../store"

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories: Category[]): CategoryMap => categories.reduce((acc, category) => {
  const { title, items } = category
  acc[title.toLowerCase()] = items
  return acc
  }, {} as CategoryMap)
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)
