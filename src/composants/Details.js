import React, {Fragment, PureComponent } from 'react'

class Details extends PureComponent {
    
  render() {
    
    const{stateDetails, val, bool, handleQteInitial, subTotal, HandleClient, HandleCode, envoyer, client, code} = this.props
   
    return (
        <>
          
            <h3>Clients</h3>
            <form >
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nom client" 
                        value={client}
                        onChange={HandleClient}
                        required
                        />
                </div><br />

                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Barcode Scanner"
                        value={code}
                        onChange={HandleCode}
                    />
                </div>
                
                <table className="table">
                    <thead className='titreTableau'>
                        <tr>
                            <th>x</th>
                            <th scope="col">Produit</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Quantite</th>
                            <th scope="col">Quantite Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            bool === true 
                            ?

                            stateDetails.map((i, index)=>{

                                return(

                                    <Fragment key={index}>
                                        <tr className='det'>
                                            <td className='sup'>
                                                <button className='btn btn-danger del'>del</button>
                                            </td>

                                            <td className='th' data-label='Produit'>{i.name}</td>
                                            <td data-label='Prix'>{i.prix} FRCFA</td>
                                            <td data-label='Quantite' className='qte'>
                                                
                                                <div className='numQte'>
                                                    <input 
                                                        className='form-control' 
                                                        type='number' 
                                                        value={i.qteInitial} 
                                                        onChange={handleQteInitial} 
                                                    />
                                                </div>
                                            
                                            </td>
                                            <td data-label='Total'>{i.qteTotal}</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontWeight : 'bold'}}>Total</td>
                                            <td style={{color : 'green'}} colSpan={3}>{subTotal(i.qteInitial, i.prix)} FRCFA</td>
                                            <td>{i.qteInitial} items</td>
                                        </tr>
                                    </Fragment>
                                )
                            })
                            :   
                            (
                                <tr>
                                    <td colSpan={5} style={{color : 'red', fontWeight : 'bold'}}>Acun article selectionne</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                <div className="bouton">
                    <button className="btn btn-danger">CANCEL</button>
                    {
                        val 
                        
                        ?  
                            client === '' 
                            
                            ? <button disabled  style={{color : 'red', fontWeight : 'bold'}} className="btn btn-primary" onClick={envoyer}>PAYEMENT</button>

                            : 
                        
                        <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={envoyer}>PAYEMENT</button>
                        
                        : <button disabled  style={{color : 'red', fontWeight : 'bold'}} className="btn btn-primary" onClick={envoyer}>PAYEMENT</button>
                    }
                   
                </div>
            </form>
        
            <div className="modal fade pop" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Details Produit</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h5 className=' fs-5'>Client : {client}</h5>
                        <h5 className=' fs-5'>Designation : {stateDetails.map((i)=>i.name)}</h5>
                        <h5 className='fs-5'>Items : {stateDetails.map((i)=>i.qteInitial)}</h5>
                        <h5 className='fs-5'>Total : {stateDetails.map((i)=>subTotal(i.qteInitial, i.prix))} FRCFA</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" className="btn btn-primary">Envoyer</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
        
    )
  }
}
export default Details