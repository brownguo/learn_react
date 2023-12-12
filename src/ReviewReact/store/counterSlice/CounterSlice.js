import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counterSlice",
    initialState:{
        value: 0,
        disabled: false
    },
    reducers: {
        //网络请求啥的，都写在这里就好哟，2023年12月12日17:05:40
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