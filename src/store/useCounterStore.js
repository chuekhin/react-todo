import { create } from "zustand";

// const useCounterStore = create(function(set){
//     return {
//         count : 3,
//         resetCount : function(){
//             return set({count : 0})
//         },
//         incrementCount : function(){
//             return set(function(state){
//                 return {count : state.count + 1}
//             })
//         },
//         decrementCount : function(){
//             return set(function(state){
//                 return {count : state.count - 1}
//             })
//         }
//     }
// });
const useCounterStore = create(
    (set) => {
        return {
            count : 3,
            resetCount : () => set({count : 0}),
            incrementCount : () => set((state) => ({count : state.count +1 })),
            decrementCount : () => set((state) => ({count : state.count -1 }))
        }
    }
);

export default useCounterStore