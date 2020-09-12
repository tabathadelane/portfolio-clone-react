import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact(){
    return (
        <div>
            <div><h1>Contact Me</h1></div>
              <h3><FontAwesomeIcon icon={faFileAlt} />
              <a href="https://drive.google.com/file/d/1yaStgCMFZ9CGyhsPdrxobGHP1DSV0Evs/view?usp=sharing" ><i class="fas fa-sticky-note"></i>RESUME</a></h3>
              <h3><FontAwesomeIcon icon={faLinkedin} />
              <a href="https://linkedin.com/in/tabathadelaneyoung" >LINKEDIN</a></h3>
              <h3><FontAwesomeIcon icon={faGithubSquare} />
              <a href="https://github.com/tabathadelane" >GITHUB</a></h3>
              <h3><FontAwesomeIcon icon={faEnvelopeOpenText} />
              <a href="mailto:tabathadelane@gmail.com" >EMAIL</a></h3>
              <h3><FontAwesomeIcon icon={faTwitterSquare} />
              <a href="https://twitter.com/tabathadelane" >TWITTER</a></h3>
        </div>
    )}

export default Contact
