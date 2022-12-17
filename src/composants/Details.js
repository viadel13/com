import React, {Fragment, PureComponent } from 'react'


class Details extends PureComponent {

  render() {
    
    const{stateDetails, bool, handleQteInitial, subTotal} = this.props
 
    return (
        <>
          
            <h3>Clients</h3>
            
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nom client" />
            </div><br />

            <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Barcode Scanner" />
            </div>
            
            <table className="table">
                <thead className='titreTableau'>
                    <tr>
                        <th>x</th>
                        <th scope="col">Produit</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Quantite</th>
                        <th scope="col">Total</th>
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
                                        <td style={{fontWeight : 'bold'}}>Subtotal</td>
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
                
                
                    <tr>
                        {/* <th scope="row">Total</th> */}
                        <td>Total</td>
                        <td colSpan={4}>@twitter</td>
                    </tr>
                </tbody>
            </table>

            <div className="bouton">
                <button className="btn btn-danger">CANCEL</button>
                <button className="btn btn-primary">PAYEMENT</button>
            </div>
         
        </>
        
    )
  }
}
export default Details