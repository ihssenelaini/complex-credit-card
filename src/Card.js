import React, { Component } from 'react'
import master from './Master-Card-Blue-icon.png'
import visa from './Former_Visa_(company)_logo.svg.png'

import puce from './carte-de-débit-puce-clipart-vectorisé_csp31873817.jpg'
import Background from './354081-admin.jpg';

import './Card.css'
class Card extends Component {

    changeName=(foulen)=>{
        return (
            foulen.toUpperCase() )
    }



     changeNumber=(number)=>{
         
         number= number.toString()
         let result =''
         for(let i =0;i< number.length;i +=4)
         {
             result += number.slice(i,i+4)+ ' '
         }
     return result
      
     
        
     }


     changevalid=(number)=>{
         number=number.toString()
         return number.slice(0,2)+'/'+number.slice(2)



     }
    render(){
        const {cardname}=this.props
        const {cardnumber}=this.props
        const {cardvalid}=this.props
        return(
            <div className="app-form" style={{backgroundImage: `url(${Background})`
        }}>

         
                
                   <h1 className="title">CREDITCARD</h1>
                   
              
               <div className="images">
                <img className="img3"style={{width:"50px",height:"50px"}} src={puce}/>
                <div className="number">
                <h2 className="first">7253 3256 7896 1245</h2>
                <div className ="birth">
                <h2 style={{color:"white",marginLeft:"28px"}}>{this.changeNumber(cardnumber)}</h2> 
                <span style={{marginLeft:"-80px"}}>month/year</span>
              <span style={{marginRight:"250px"}}>valid thrue {this.changevalid(cardvalid)}</span>
              </div>
                <h1 style={{color:"white",marginRight:"250px"}}>{this.changeName(cardname)}</h1>
                </div>

              <div className="image">
                <img className="img2" src={master} />
                <img className="img1" src={visa} />
                </div>
               </div>
{/*         
             <img className="irc_mi" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/092011/mastercard.png?itok=umOYRlA4" onload="typeof google==='object'&amp;&amp;google.aft&amp;&amp;google.aft(this)" alt="Résultat de recherche d'images pour &quot;logo master card&quot;" width="195" height="195" style="margin-top: 79px;"/>
             <img className="irc_mi" src="https://www.getcreditcardinfo.com/img/visa.png" onload="typeof google==='object'&amp;&amp;google.aft&amp;&amp;google.aft(this)" alt="Image associée" width="100" height="100" style="margin-top: 27px;"/> */}
              
              
            </div>
        )
    }
}
export default Card