let buttonStyle = {

  border: '2px',
  fontWeight: 'bold',
  marginTop: '25px',

};

function Button({ label }) {
  return (
    <button
      className="mui-btn mui-btn--raised"
      style={buttonStyle} >
      {label}
    </button>
  );
}

export default Button;

