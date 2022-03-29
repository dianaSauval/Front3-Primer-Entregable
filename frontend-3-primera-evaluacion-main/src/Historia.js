import React from "react";




export default class Historia extends React.Component{
    render(){
        return(
            <div className="layout">
                <p className="historia">{this.props.historia}</p>
                <div className="opciones">
                    <div className="opcion">
                        <button className="botones" onClick={()=>this.props.handleClick("a")}>A</button>
                        <p className="opcion">{this.props.opcion1}</p>                        
                    </div>
                    <div className="opcion">
                        <button className="botones" onClick={()=>this.props.handleClick("b")}>B</button>
                        <p className="opcion">{this.props.opcion2}</p>
                    </div>                    
                </div>
                <div className="recordatorio">
                    <p>Selección anterior: {this.props.seleccionAnterior}</p>
                    <p>Historial de opciones elegidas:</p>
                    <ul>
                        {this.props.opcionesElegidas}                        
                    </ul>
                </div>
            </div>
        )
    }
}