
const Feeddback = ({props, handleIncrement}) => {

  const stateKeys = Object.keys(props);

  return (
    stateKeys.map(key => (
      <button type="button"
      key={key}
      onClick={() => handleIncrement(key)}
      >{key}
      </button>
    ))
  )
}

export default Feeddback
