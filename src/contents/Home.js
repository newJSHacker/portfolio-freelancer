import React, {Component} from 'react'
import ReactTypingEffect from 'react-typing-effect'
import profilepic from '../img/Anastasiya.png'
import Social from '../components/Social'
class Home extends Component {
    render(){
        return(
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect style = {{align:'center',fontSize:50, color: 'red'}} className="typingeffect" text={['I am Anastasiya', 'I am a web developer']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}

export default Home