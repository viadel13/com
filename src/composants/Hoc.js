import React, { Component } from 'react'


const Hoc = (Enfant)=> {
    
    class Hoc extends Component {
        
        state = {
            details : [],
            search : '',
            bool : false,
            client : '',
            code : '' ,
            val : false
        }
      
        HandleClient = (e)=>{
            this.setState({
                client : e.target.value
            })
        }

        HandleCode = (e)=>{
            this.setState({
                code : e.target.value
            })
        }

        envoyer = (e)=>{
            e.preventDefault()
        }


        handleQteInitial = (e) =>{
            const stateCopie = [...this.state.details]
            stateCopie[0].qteInitial = e.target.value
            if(stateCopie[0].qteInitial >= 0){
                this.setState({
                    details : stateCopie
                })
            }
        
        
        }

        subTotal = (qteInitial,  prix) =>{
            
            let s = qteInitial * prix;            
            return s;
        }

        search = (e) =>{
            this.setState({
                search : e.target.value,
            })
        }

        handleClick = (id, name, prix, qteTotal, qteInitial) =>{
        
            this.setState({
                details : [{ id, name, prix, qteTotal, qteInitial}],
                // idCopie : [...this.state.idCopie, idCopie],
                bool : true,
                val : true

            })  
        }
    
    
        render() {
            
            return( 
                <Enfant 
                    handleClick={this.handleClick}
                    state={this.state}
                    search={this.search}
                    HandleClient={this.HandleClient}
                    HandleCode={this.HandleCode}
                    handleQteInitial={this.handleQteInitial}
                    envoyer={this.envoyer}
                    subTotal={this.subTotal}
                  
                />
                )
        }
    }

    return Hoc

}

export default Hoc
