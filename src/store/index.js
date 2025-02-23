import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state=initialState,action)=>{
//     console.log(state.counter,'counetr');
//     switch(action.type){
//         case "increment":
//             return{
//                 counter:state.counter + 1,
//                 showCounter:state.showCounter
//             };
//         case "decrement":
//             return{
//                 counter:state.counter - 1,
//                 showCounter:state.showCounter
//             };
//         case "toggle":
//             return{
//                 counter:state.counter,
//                 showCounter:!state.showCounter
//             }
//         default:
//             return state

//     }
// }

const store = configureStore({
  reducer: counterSlice.reducer,
});

// const subscriptionMethod = ()=>{
//     const lateststate =store.getState();
//     console.log(lateststate,'latest');
// }

// store.subscribe(subscriptionMethod)
export const counterActions = counterSlice.actions;
// console.log(counterActions, "action");

export default store;
