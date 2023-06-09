import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />

        </div>
        <p>&copy; right with reservation 2023 PizzaHot.com </p>
      
    </div>
  )
}

export default Footer
