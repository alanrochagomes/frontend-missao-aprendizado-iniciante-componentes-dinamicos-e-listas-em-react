import './Card.css'

export default function Card(props) {
  console.log(props)
  return (
    <div className='card'>
      <h1>{props.nome}</h1>
      <img src={props.imagem} width="200"/>
    </div>)
}
