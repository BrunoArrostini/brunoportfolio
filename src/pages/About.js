import React from 'react'
import foto from "../images/foto-profil.jpg"

const About = () => {
  return (
    <div className='middle'>
      <h2>About me</h2>
      <img src={foto} alt="" className='foto'></img>
      <div className='aboutText'>
        <p>Hi I'm Bruno, a <strong>frontend developer</strong> 
        <br/>
        I really love developing beacuse it lets me travel to a different dimension. 
        <br/>
        <br/>
        I graduated in foreign languages, worked as a guide in Nord Europe, 
        then I started a Master in frontend development in 2022.
        It's been first love beacuse I love <strong>creating</strong> entertaining user interfaces.
        My best development skills is <strong>React</strong> and its libraries beacuse it allows me to create light apps with lots of features.
        <br/>
        <br/>
        Usually I spend a lot of time in personal growth, actually I'm a very curios person so it's more a need than a choice.
        <br/>
        Anyway I like enjoy free time travelling, meeting new people, know more about their story.
        </p>
      </div>
    </div>
  )
}

export default About