import React, {Component} from 'react'
import Navitem from './Navitem'

class Navbar extends Component {
   constructor(props){
       super(props)
       this.state = {
           'NavItemActive':''
       }
   }

   activeItem = (x) => {
       if(this.state.NavItemActive.length>0){
           document.getElementById(this.state.NavItemActive).classList.remove('active')
       }

       this.setState({'NavItemActive': x}, function(){
           document.getElementById(this.state.NavItemActive).classList.add('active')
       })
   }

   render(){
       return(
           <nav>
               <ul>
                   <Navitem item="Home" tolink="/react-portfolio/" activec={this.activeItem} />
                   <Navitem item="About" tolink="/react-portfolio/about" activec={this.activeItem} />
                   <Navitem item="Education" tolink="/react-portfolio/education" activec={this.activeItem} />
                   <Navitem item="Skills" tolink="/react-portfolio/skills" activec={this.activeItem} />
                   <Navitem item="Contact" tolink="/react-portfolio/contact" activec={this.activeItem} />
               </ul>
           </nav>
       )
   }
}

export default Navbar