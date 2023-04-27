import React from 'react'
import ItemsLlist from './ItemsLlist'
import Navbr from '../components/Navbr'
import Usernav from '../components/Usernav'

function Userhome() {
 const data={}
const email=localStorage.getItem('email')
data.email=email.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
  console.log(data.email)
    

    

  return (
    <div>
            {data.email === 'user123@gmail.com' && <Usernav/>}
            {data.email !== 'user123@gmail.com' && <Navbr/>}
    </div>
  )
}

export default Userhome
