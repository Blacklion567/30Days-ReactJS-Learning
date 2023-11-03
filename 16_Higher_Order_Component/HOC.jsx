
const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>{text}</button>
  );
};

const buttonWithStyles = (ComParam) => {
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  };
  return (props) => {
    return <ComParam {...props} style={buttonStyles} />;
  };
};

const NewButton = buttonWithStyles(Button);

const Hoc1 = () => {
  return (
    <>
      <div className="App">
        <Button text='No Styles'
          onClick={() => alert('No Style')}
        />
        <NewButton text='Styled Button'
          onClick={() => alert('Styled Button')}
        />
      </div>
    </>
  );
};

export default Hoc1;
