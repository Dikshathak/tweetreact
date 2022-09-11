const initialState= 10;
const firstReducer=(state=initialState,action)=>
{
    
 switch(action.type)
 {
     case "HELLO":
        
         return state+1;
         default:
             return state;
 }
}
export default firstReducer;