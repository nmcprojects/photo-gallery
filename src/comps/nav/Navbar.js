import React from 'react'
import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Button from '../btn/Button'

import './navbar.css'

import { title } from '../../constants/Constants'

const sizeBtn = {
    width: '30px',
    height: '30px',
}

const Navbar = ({user, ...props}) => {
  return (
    <div className="navbar-wrap">
        <motion.h1 
            className="logo"
            whileHover={{ 
                cursor: 'pointer',
                color: 'var(--primary-bold)' 
            }}
            onClick={props.clickLogo}
        >{title.logo}</motion.h1>
        <div className="navbar">
            {
                user ? <>
                    <motion.img 
                        className="avatar" 
                        src={user.imageUrl} alt="avatar" 
                        whileHover={{ opacity: 1 }}
                        onClick={props.getDocsOfUser}
                    />
                    <Button onClick={props.handleLogout}>
                        <AiOutlineLogout style={sizeBtn} />
                    </Button>
                </> : <Button onClick={props.handleLogin}>
                    <AiOutlineLogin style={sizeBtn}/>
                </Button>
            }
        </div>
    </div>
  )
}

export default Navbar