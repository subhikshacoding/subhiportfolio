import React from 'react'
import './footer.css'
import HouseIcon from '@mui/icons-material/House';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachEmailSharpIcon from '@mui/icons-material/AttachEmailSharp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>

            <div className='left'>
                <div className='location'>
                    <HouseIcon size={20} style={{color:"#ffff",marginRight:"2rem"}}/>
                  <div>
                    <p>9, sannathi street,
                      chennai
                    </p>
                    
                    </div>
                 </div>
                 <div className='phone'>
                 <h4>< PhoneIcon  size={20} style={{color:"#ffff",marginRight:"2rem"}}/>
                 8925754873 </h4>
                 </div>

                 <div className='email'>
                 <h4><  AttachEmailSharpIcon size={20} style={{color:"#ffff",marginRight:"2rem"}}/>
                 subhisubhiksha31@gmail.com</h4>
                 </div>
            </div>
            <div className='right'>
                <h4>
                    <a href="https://github.com/subhikshacoding/portfolio"><button className='button'> GitHub</button> </a></h4>
                    <p>
                        created by M.subhikshacoding </p>
                 
                  <div className='social'>
                  < FacebookRoundedIcon  size={50} style={{color:"#ffff",marginRight:"1rem"}}/>
                  < LinkedInIcon  size={50} style={{color:"#ffff",marginRight:"1rem"}}/>
                    < GitHubIcon  size={50} style={{color:"#ffff",marginRight:"1rem"}}/>

                 

                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer