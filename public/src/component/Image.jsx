import React from 'react'

const Image = ({urls, handleClick}) => {
    
     return(
         <>
         <li className="Img" onClick={()=>handleClick(urls.regular)} style={{listStyle:"none"}}>
            <img src={urls.small} alt="Picsum" width="350"/>
         </li>
         </>
     );
 }
 export default Image;