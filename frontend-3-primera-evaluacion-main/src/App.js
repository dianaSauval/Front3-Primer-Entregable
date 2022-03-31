import React from "react";
import Historia from "./Historia";
import data from "./components/data.json";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      nroHistoria:1,
      id:"1",
      seleccionAnterior:"",
      opcionesElegidas:[]
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(opcionElegida){
    this.setState({
      nroHistoria:this.state.nroHistoria+1,
      id: (this.state.nroHistoria+1)+opcionElegida,
      seleccionAnterior:opcionElegida,
      opcionesElegidas: [...this.state.opcionesElegidas, opcionElegida]
    })
    console.log(this.state.nroHistoria);
  }

  componentDidUpdate() {
    if (this.state.nroHistoria >=6) {
      alert(
        "FIN"
      );
    }
  }

  render(){    
    return (
      <div className="App">
        {this.state.id===1
        ? data.map((element)=>(
          <Historia 
            handleClick={this.handleClick} 
            historia={element.historia}
            opcion1={element.opciones.a}
            opcion2={element.opciones.b}                        
            />
        ))
        : data
              .filter((element)=>element.id === this.state.id)
              .map((element)=>(
                <Historia 
                handleClick={this.handleClick} 
                historia={element.historia}
                opcion1={element.opciones.a}
                opcion2={element.opciones.b}
                seleccionAnterior={this.state.seleccionAnterior}                
                opcionesElegidas={this.state.opcionesElegidas.map((opcion)=>{                  
                  return <li>{opcion}</li>
                })}                              
                />
              ))}        
      </div>
    );
  }
}



export default App;
