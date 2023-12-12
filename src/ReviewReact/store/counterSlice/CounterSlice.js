import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counterSlice",
    initialState:{
        value: 0,
        disabled: false
    },
    reducers: {
        RPLUS: (state)=>{
            state.value += 1
            if (state.value > 0){
                state.disabled = false;
            }
        } ,
        RMINUS: (state) =>{
            state.value -= 1
            if (state.value === 0){
                state.disabled = true;
                state.value = 0;
            }
        }
    }
})
// Action creators are generated for each case reducer function
export const { RPLUS, RMINUS} = counterSlice.actions
export default counterSlice.reducer