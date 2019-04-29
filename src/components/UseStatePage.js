import {
  headingStyles,
  itemStyle,
} from './styles';

const React = require('react');

const TextInputBoundToState = (props) => {
  const {
    advice,
    handleChange,
    inputValue,
  } = props;

  const inputStyle = {
    display: 'inline-block',
    width: '95%',
    height: '80%',
    fontSize: '20px',
    border: '2px solid #ccc',
  };

  return (
    <div>
      <div style={itemStyle}>
        <input style={inputStyle} type="text" value={props.inputValue} onChange={handleChange} />
      </div>
      <p style={itemStyle}>{advice}</p>
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

export const UseStatePage = () => {
  const [state, setState] = React.useState(initialState);

  const props = mapStateToProps(state, setState);

  return (
    <div>
      <h2 style={headingStyles[1]}>useState</h2>
      <h3 style={headingStyles[2]}>Bound to the state</h3>
      <TextInputBoundToState
        advice={props.advice}
        handleChange={props.handleChange}
        inputValue={props.inputValue}
      />
    </div>
  );
};
