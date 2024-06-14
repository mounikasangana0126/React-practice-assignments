export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const COUNTER = 'COUNTER';

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
  });
  
  export const removeItem = (itemId) => ({
    type: REMOVE_ITEM,
    payload: itemId,
  });
  
  export const counter = (itemId, quantity) => ({
    type:COUNTER,
    payload: { itemId, quantity },
  });
