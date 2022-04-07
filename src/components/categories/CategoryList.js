import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators} from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"

class CategoryList extends Component {
  
  componentDidMount(){
    this.props.actions.getCategories()
    console.log("test")

    console.log(this.props.actions.getCategories())
    // console.log(this.props.categories)
  }


  render() {
    return (
      <div>
         {    console.log("1"+this.categories) } 
        {/* <h3>Categories : {this.props.categories.length}</h3> */}
        <h3>Categories</h3>
        <ListGroup>
          
          {
            this.props.categories.map(category =>(
              <ListGroupItem key={category.id}>
                  {category.categoryName}
              </ListGroupItem>
            ))
          }
         
        </ListGroup> 
        <h5> Secili Kategory : {this.props.currentCategory.categoryName}</h5>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentCategory:state.changeCategoryReducer,
    categories:state.categoryListReducers
    
  }

}

function mapDispatchToProps(dispatch){
  return {
    actions:{
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      )    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

