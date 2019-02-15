import { OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES, SEARCH_ASYNC_ENTITIES } from "../action-types";

export function openModal(mediaId) {
    return {
        type: OPEN_MODAL,
        payload: {
            mediaId
        }
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function searchEntities(query) {
    return {
        type: SEARCH_ENTITIES,
        payload: {
            query
        }
    }
}

export function searchAsyncEntities(query) {
    console.log("sdsdasdasdasdas")
    return (dispatch) => {
        
        setTimeout(() => {
            console.log("sdsdasdasdasdas")
            dispatch(searchEntities(query))
        }, 5000)
    }
}

