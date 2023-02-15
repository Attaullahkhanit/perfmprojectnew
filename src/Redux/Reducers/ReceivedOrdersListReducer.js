

const  initialData = {dtload: true}

export const receivedOrdersList = (state= initialData, action) => {
        if(action.type == "RECEIVEDORDERSLIST"){
            return{
                ...action.payload
            }
        }else{
            return{
            ...state
            }
        }
}