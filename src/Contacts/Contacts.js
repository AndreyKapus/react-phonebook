import { nanoid } from 'nanoid'

const Contacts = ({props}) => {
  console.log(props)

  return(
<>
    {props.map(el => {
    return <div key={nanoid()}>{el.name}</div>
    })}
</>
  )
}

export default Contacts
