import React,{Component} from 'react'
import './App.css'
import Newcard from './newcard'




class Card2 extends Component {
  constructor(props){
  super(props)  
  this.state={
      input:'',
      name:'',
      number:''
      

  }
  this.calcul=this.calcul.bind(this)
      
  }
      calcul(event) {
      
          this.setState({input:event.target.value})
      this.props.valid(event.target.value) 
    }

      handlechange1=(event)=>{
          this.setState({number:event.target.value})
     this.props.number(event.target.value) 
    }
       handlechange=(event)=>{
           this.setState({name:event.target.value})
       
       this.props.name(event.target.value)

       
      
       }

  render(){
      return (
          <div className='user'> 
            
               <input type='text'pattern="\d*" maxlength="4"
                 
                      
                       onChange={this.calcul}/>

                <input type="text" pattern="\d*" maxlength="16"
                       
                       onChange={this.handlechange1}/>
                
                <input type='text' pattern="\d*" maxlength="20"
                       
                       onChange={this.handlechange}/>

          </div>
      )
      }


}

export default Card2;

