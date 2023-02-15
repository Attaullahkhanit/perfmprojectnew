import { Action } from "@remix-run/router"


    const initialData = {dtload: true}

    export const regUsersListReducer = (state = initialData, action) => {
        if(action.type == "REGISTERUSERLIST"){
            return {
                ...action.payload
            }
        }else{
            return{
                ...state
            }
        }
    }