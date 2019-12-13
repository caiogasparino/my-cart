import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import Button from '@material-ui/core/Button';

 class Home extends Component<any>{
    
    handleClick = (id : number)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card product-card flex-fill" key={item.id}>
                        <div className="card-img-left">
                            <img src={item.img} alt={item.title}/>
                        </div>

                        <div className="card-body">
                            <span className="card-title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price} $</b></p>
                            <Button variant="contained" color="secondary" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">Add to cart</i></Button>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container py-4 mt-5">
                <div className="d-flex flex-wrap">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state : any)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch : any)=>{
    
    return{
        addToCart: (id : number)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)