import React, { Component } from 'react';
import { connect } from 'react-redux';
class TotalAmount extends Component<any>{
    
    render(){
  
        return(
            <div className="container">
                <div className="row">
                    <div className="card p-3 w-100">
                        <div className="input-group d-flex align-items-center">
                        </div>
                        <div className="Total-price w-100 mt-3 border-top py-3"><b>Total: {this.props.total} $</b></div>
                        </div>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state : any)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch : any)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TotalAmount)