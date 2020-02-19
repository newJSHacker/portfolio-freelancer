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
                   <Navitem item="Home" tolink="/portfolio-freelancer/" activec={this.activeItem} />
                   <Navitem item="About" tolink="/portfolio-freelancer/about" activec={this.activeItem} />
                   <Navitem item="Education" tolink="/portfolio-freelancer/education" activec={this.activeItem} />
                   <Navitem item="Skills" tolink="/portfolio-freelancer/skills" activec={this.activeItem} />
                   <Navitem item="Contact" tolink="/portfolio-freelancer/contact" activec={this.activeItem} />
               </ul>
           </nav>
       )
   }
}

export default Navbar