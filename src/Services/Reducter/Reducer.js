import { ADD_TO_CART } from "../constant"
const intialState={
          cart_Data:[]
}
export default function cartItem(state=intialState,action){

          
 switch(action.type){
          
          case ADD_TO_CART:
           console.warn('reducer:',action);
          return{
                    ...state,
                    cart_Data:action.data
          }
          break;
          default:
          return state;
 }
}