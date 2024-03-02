import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        // ACTION : REDUCER FUNCTION
        addItem : (state , action)=>{
            state.items.push(action.payload);//Mutating the state Here
        },
        // use Action based on the requirement 
        removeItem : (state )=>{
            state.items.pop();
        },
        clearCart : (state , action )=>{
            state.items.length=0;
        }
    }
});

// Export Actions and Reducers 
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;