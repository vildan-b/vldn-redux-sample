import * as actionTypes from "./actionsTypes"

export function chanfeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY, payload:category}
}