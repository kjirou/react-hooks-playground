const React = require('react');
const ReactDOM = require('react-dom');

const TextInputBoundToState = (props) => {
  const {
    advice,
    handleChange,
    inputValue,
  } = props;

  return (
    <div>
      <h3>Bound to the state</h3>
      <div>
        <input type="text" value={props.inputValue} onChange={handleChange} />
        <span>{advice}</span>
      </div>
    </div>
  );
};

const initialState = {
  inputValue: '',
  maxLength: 5,
};

const mapStateToProps = (state, setState) => {
  return {
    advice: `Remining ${state.maxLength - state.inputValue.length}/${state.maxLength} characters.`,
    handleChange: (event) => {
      const inputValue = event.target.value;
      setState(state => {
        return Object.assign({}, state, {inputValue});
      });
    },
    inputValue: state.inputValue,
  };
};

const UseStatePage = () => {
  const [state, setState] = React.useState(initialState);

  const props = mapStateToProps(state, setState);

  return (
    <TextInputBoundToState
      advice={props.advice}
      handleChange={props.handleChange}
      inputValue={props.inputValue}
    />
  );
};

module.exports = {
  UseStatePage,
};
