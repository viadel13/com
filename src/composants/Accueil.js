import React, { Component, Fragment } from 'react'
import Form from './Form';
import Menu from './Menu';
import data from './data';
import Details from './Details';


class Accueil extends Component {

    state = {
        details : [],
        search : '',
        bool : false,
        client : '',
        code : ''
        
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

    envoyer = ()=>{
        
      

        console.log(`nom : ${this.state.client} code : ${this.state.code}`)
        
        

        this.setState({
            client : '',
            code : '',
            details : [{}]
        })

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
            search : e.target.value
        })
    }

    handleClick = (id, name, prix, qteTotal, qteInitial) =>{
    
        this.setState({
            details : [{ id, name, prix, qteTotal, qteInitial}],
            // idCopie : [...this.state.idCopie, idCopie],
            bool : true

        })  
    }
  

  render() {
  
   
    return (
      <>
        {/* <button onClick={this.plus}>Change</button> */}
        <div className='col-12 col-md-6 card '>
            <Details 
                stateDetails={this.state.details}
                bool={this.state.bool}  
                handleQteInitial={this.handleQteInitial}
                subTotal = {this.subTotal}
                HandleClient = {this.HandleClient}
                HandleCode = {this.HandleCode}
                envoyer = {this.envoyer}
                client = {this.state.client}
                code = {this.state.code}
            />
        </div>
        
        <div className='col-12 col-md-6 card'>

            <Form search={this.search} state={this.state.search}/>
            <Menu />

            <div className='container containerImage card my-2'>
                <div className='row testi'>
                    {data.filter((i) =>{
                        return i.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())
                    }).map((i, index)=>{
                        return(
                            <Fragment key={index}>
                                <div className='col-12 col-sm-2 col-md-6 my-4 imageProduit' onClick={()=>this.handleClick(i.id, i.name, i.prix, i.qteTotal, i.qteInitial)} >
                                    <img src={i.image}className='img-fluid imgProd' alt={i.name} />
                                    <div className='titreProd'>
                                        <h3>{i.name}</h3>
                                    </div>
                                    <div className='overlay'>
                                        <div className='content'>
                                            <h3>{i.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })}
                    
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default Accueil;
