


export const initialState = null;




   



export const reducer = (state,action) => {
    
    
    if(action.type === "USER"){
        return action.payload;
    }
    return state;
}
export const searchReducer = (state,action) => {
    
    // true me => search result show krna h
    if(action.type === "SEARCH"){
        return action.payload;
    }
    return state;
}



// export initialState;

