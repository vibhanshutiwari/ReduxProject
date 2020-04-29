const redux = require('redux');
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const phone = 'numphone';
const laptop = 'numlaptop';

function sellphone()  {
    return {
        type: phone
    };
}

function selllaptop()  {
    return {
        type: laptop
    };
}


const newobject = {
    numofphone: 33
};

const another = {
    numoflaptop: 100
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

const towReducer = (state = another, action) => {
    switch(action.type) {
        case laptop : return {
            ...state,
            numoflaptop: state.numoflaptop + 25
        }
        default: return state
    }
 }

const rootReducer = combineReducers({
  mb: oneReducer,
  lap: towReducer
});

const item = createStore(rootReducer);
console.log('value', item.getState());
item.dispatch(sellphone());
item.dispatch(selllaptop());
item.subscribe(() => console.log('value type', item.getState()));
item.dispatch(sellphone());
item.dispatch(sellphone());
item.dispatch(selllaptop());
