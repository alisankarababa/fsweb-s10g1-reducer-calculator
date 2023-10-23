import React from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useReducer } from 'react';
import { initialState } from './reducers';
import reducer from './reducers';
import { applyNumber, changeOperation, actionClearDisplay, actionStageToMemory } from './actions';

function App() {

    const [state, dispatchState] = useReducer( reducer , initialState );

    function hApplyNumber(e) {
        dispatchState(applyNumber(Number(e.target.value)));
    }

    function hChangeOperation(e) {
        dispatchState(changeOperation(e.target.value));
    }

    function hClearDisplay() {
        dispatchState(actionClearDisplay())
    }

    function hStageToMemory() {
        dispatchState(actionStageToMemory())
    }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> X</span>
              <span id="memory"><b>Memory:</b> 0</span>
            </div>

            <div className="row">
              <CalcButton onClick={hStageToMemory} value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={hApplyNumber} value={1} />
              <CalcButton onClick={hApplyNumber} value={2} />
              <CalcButton onClick={hApplyNumber} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={hApplyNumber} value={4} />
              <CalcButton onClick={hApplyNumber} value={5} />
              <CalcButton onClick={hApplyNumber} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={hApplyNumber} value={7} />
              <CalcButton onClick={hApplyNumber} value={8} />
              <CalcButton onClick={hApplyNumber} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={hChangeOperation} value={"+"} />
              <CalcButton onClick={hChangeOperation} value={"*"} />
              <CalcButton onClick={hChangeOperation} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={hClearDisplay} value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
