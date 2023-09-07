import { CanDeactivateFn } from '@angular/router';

export const notifyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(confirm("Your data is not saved!")){
    return true;
  }
  else{
    return false;
  }
};
