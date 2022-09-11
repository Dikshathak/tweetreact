const initialState= [];
export default function getReducer(state=initialState,action)
{
switch(action.type)
{
    case "APPLE":
        return action.response;
        default:
            return state;
}
}