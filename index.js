const redux = require('redux');

const createStore = redux.createStore

const cakeBuyer = 'cake-buy';

function buycake () {
    return {
        type: cakeBuyer,
        info: 'First Redux action'
    };
}


const object = {
    numOfCake: 10
};


const reducer = (state = object, action) => {
    switch(action.type) {
        case cakeBuyer : return {
            ...state,
            numOfCake: state.numOfCake -1
        }
        default : return state
    }
}


const store = createStore(reducer)
console.log('object', store.getState());
 const unsubscribe =  store.subscribe(()  => console.log('update state', store.getState()));
store.dispatch(buycake());
store.dispatch(buycake());
unsubscribe();