export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const STAGE_TO_MEMORY = "STAGE_TO_MEMORY";
export const FETCH_FROM_MEMORY = "FETCH_FROM_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY"

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

export function changeOperation(operation) {
    return {type: CHANGE_OPERATION, payload: operation};
}

export function actionClearDisplay() {
    return {type: CLEAR_DISPLAY}
}

export function actionStageToMemory() {
    return {type: STAGE_TO_MEMORY}
}

export function actionFetchFromMemory() {
    return {type: FETCH_FROM_MEMORY};
}

export function actionClearMemory() {
    return {type: CLEAR_MEMORY};
}