export enum ActionType{
    LOGIN = "loginAction",
    SIGNUP = "signupAction",
    //MYREIMBURSEMENTS = "myReimbursementsAction"
}

export interface IAction{
    type: ActionType,
    payload: any
}