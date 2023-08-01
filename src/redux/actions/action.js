export const ADD = (item)=>{
    return{
        type: "ADD_CART",
        payload: item
    }
}
export const DLT = (id)=>{
    return{
        type: "RMV_CART",
        payload: id
    }
}


// remove indidividual iteam

export const REMOVE = (iteam)=>{
    return{
        type: "RMV_ONE",
        payload: iteam
    }
}
