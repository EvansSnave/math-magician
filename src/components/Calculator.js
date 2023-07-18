import Output from './Output';

function Calculator() {
  return (
    <div class="calculator">
      <React.StrictMode>
      <Output />
      <div class="calculator__input">
        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>

        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>

        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>

        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>
        <button class="input__clear">AC</button>
      </div>
      </React.StrictMode>
    </div>
  );
}

export default Calculator;