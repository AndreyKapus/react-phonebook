import { nanoid } from 'nanoid'

const Contacts = ({props}) => {
  const id = nanoid()

  const {onDeleteContact} = props;

  return(
<>
    {props.map(el => {
    return <div key={id}>
      {el.name}: {el.number}
      <button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
    </div>
    })}
</>
  )
}

export default Contacts
