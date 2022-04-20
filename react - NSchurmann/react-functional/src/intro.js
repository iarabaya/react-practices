// function App(props) {
  // const { miProp } = props;
  // return(<h1>Hola</h1>)
// }

const MiComponente = ({miProp}) =>{
  return(
    <div>
      Nombre: {miProp}
    </div>
  )
}

const Intro = () =>{
  return(
    <MiComponente miProp={'chanchito feliz'}/>
  )
}


export default Intro;
