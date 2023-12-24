import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:"cart",
        initialState:{
            count:0,
            items:[],
            
            
        },
        reducers:{
            
            addToCart:(state,action)=>{
                    state.count++
            },
            addItems:(state,action)=>{
                state.items.push(action.payload)
                console.log(action.payload);
                console.log(state.count);
                
            }

        }
    }
)

export default cartSlice.reducer;
export const{addToCart,addItems} = cartSlice.actions;
