import { IAppState, initialState } from "../state-logic/StateStructure";
import { ActionType, IAction } from "./ActionStructure";

export const myReducer = (model: IAppState = initialState, action: IAction): IAppState => {
  
    switch (action.type) {
      case ActionType.LOGIN:
        return loginAction(model, action);
      case ActionType.SIGNUP:
        return SignupAction(model, action);
    }
  
    return model;
}

const loginAction = (model: IAppState, action: IAction) => {
    return Object.assign({}, model, { currentUser: action.payload });
  }

const SignupAction = (model: IAppState, action: IAction) => {
    return Object.assign({}, model, { currentUser: action.payload });
  }
