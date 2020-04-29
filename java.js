const redux = require('redux');
const createStore = redux.createStore


const phone = 'numphone';

function sellphone()  {
    return {
        type: phone
    };
}

const newobject = {
    numofphone: 33
};

const oneReducer = (state = newobject, action) => {
   switch(action.type) {
       case phone : return {
           ...state,
           numofphone: state.numofphone - 5
       }
       default: return state
   }
}

const item = createStore(oneReducer);
console.log('value', item.getState());
item.dispatch(sellphone());
item.subscribe(() => console.log('value type', item.getState()));
item.dispatch(sellphone());
item.dispatch(sellphone());
