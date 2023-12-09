import { createStore } from 'redux'
 // 创建 reducer
 function counter(state = 0, action) {
     switch (action.type) {
         case 'PLUS':
             return state + 1
         case 'MINUS':
             if (state === 0){
                 return 0;
             }
             return state - 1
         default:
             return state
     }
 }
 // 创建 store
 const store = createStore(counter)
 // 抛出
 export default store