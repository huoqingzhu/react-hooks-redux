type StateType = {
  isLogin:boolean,
  count: number,
}
type ActionType = {
  type: 'login'|"outLogin"|"add"
}
const State = { isLogin:false,count: 1, }
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
      case 'login':
        return {...state, isLogin:true}
      case 'outLogin':
        return {...state, isLogin:false}
      case "add":
        return {...state,count:state.count+1}
      default:
        return state
  }
}
export {State,reducer}