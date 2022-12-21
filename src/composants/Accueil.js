import React, { Component, Fragment } from 'react'
import Hoc from './Hoc';
import Form from './Form';
import Menu from './Menu';
import data from './data';
import Details from './Details';


class Accueil extends Component {


  render() {
    
    const{

        handleClick, 
        state, 
        search,
        handleQteInitial,
        subTotal,
        HandleClient,
        envoyer,
        HandleCode
        
        } = this.props
    
    return (
      <>
        {/* <button onClick={this.plus}>Change</button> */}
        <div className='col-12 col-md-6 card '>
            <Details 
                stateDetails={state.details}
                bool={state.bool}  
                handleQteInitial={handleQteInitial}
                subTotal = {subTotal}
                HandleClient = {HandleClient}
                HandleCode = {HandleCode}
                envoyer = {envoyer}
                client = {state.client}
                code = {state.code}
                val = {state.val}
         
            />
        </div>
        
        <div className='col-12 col-md-6 card'>

            <Form 
                search={search} 
                state={state.search}
            />
            <Menu />

            <div className='container containerImage card my-2'>
                <div className='row testi'>
                    {data.filter((i) =>{
                        return i.name.toLocaleLowerCase().includes(state.search.toLocaleLowerCase())
                    }).map((i, index)=>{
                        return(
                            <Fragment key={index}>
                                <div className='col-12 col-sm-2 col-md-6 my-4 imageProduit' onClick={()=>handleClick(i.id, i.name, i.prix, i.qteTotal, i.qteInitial)} >
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

export default Hoc(Accueil);
