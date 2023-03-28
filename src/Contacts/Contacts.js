const Contacts = ({props}) => {
  console.log(props.name)
  // const {name, contacts} = props;
  return(
<>
    {props.map(el => {
    return  <div key={el.name}>{el.name}</div>
    })}
</>
  )
}

export default Contacts
