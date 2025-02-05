import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import {MdFavorite} from 'react-icons/md'
import {FaGripfire, FaPlay} from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import {IoLibrary} from 'react-icons/io5'
import { MdSpaceDashboard } from 'react-icons/md'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img src='https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b' className='profile-img' alt='profile'/>
        <div>
            <SidebarButton title = "Feed" to = "/feed" icon={<MdSpaceDashboard/>}/>
            <SidebarButton title = "Trending" to = "/trending" icon={<FaGripfire/>}/>
            <SidebarButton title = "Player" to = "/player" icon={<FaPlay />}/>
            <SidebarButton title = "Favorites" to = "/favorites" icon={<MdFavorite/>}/>
            <SidebarButton title = "Library" to = "/" icon={<IoLibrary/>}/>
        </div>
        <SidebarButton title = "Sign Out" to = "" icon={<FaSignOutAlt />}/>
    </div>
  )
}
