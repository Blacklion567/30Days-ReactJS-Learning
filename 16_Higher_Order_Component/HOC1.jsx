const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

const buttonWithStyles = (CompParam, name = 'default') => {
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'info',
      backgroundColor: '#2196F3',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
  ];
  const { backgroundColor, color } = colors.find((c) => c.name === name);

  const buttonStyles = {
    backgroundColor,
    padding: '10px 45px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color,
  };
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />;
  };
};

const NewButton = buttonWithStyles(Button);
const ReactButton = buttonWithStyles(Button, 'react');
const InfoButton = buttonWithStyles(Button, 'info');
const SuccessButton = buttonWithStyles(Button, 'success');
const WarningButton = buttonWithStyles(Button, 'warning');
const DangerButton = buttonWithStyles(Button, 'danger');


const HOC1 = () => {
  return (
    <>
      <NewButton text='NewButton'
        onClick={() => alert('NewButton')}
      />
      <ReactButton text='ReactButton'
        onClick={() => alert('ReactButton')}
      />
      <InfoButton text='InfoButton'
        onClick={() => alert('InfoButton')}
      />
      <SuccessButton text='SuccessButton'
        onClick={() => alert('SuccessButton')}
      />
      <WarningButton text='WarningButton'
        onClick={() => alert('WarningButton')}
      />
      <DangerButton text='DangerButton'
        onClick={() => alert('DangerButton')}
      />
    </>
  );
};


export default HOC1;
