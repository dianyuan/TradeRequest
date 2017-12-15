export default function (state=null, action) {
  
  switch(action.type)
  {
    case "TYPE_SELECTED" : return action.payload;
    break;
  }

  return state;
}