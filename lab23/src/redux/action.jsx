export const UPDATE_DISPLAY_NAME = 'UPDATE_DISPLAY_NAME'

export const updateDispName = (newName) => {
    return {
        type: UPDATE_DISPLAY_NAME,
        payload: newName
    }
}