
import { useState } from 'react'

const Nav = () => {
   const [menu, setMenu] = useState("menu-btn")
   const [menuItems, setMenuItems] =  useState('-100vh')
   const [navColor, setNavColor] = useState('#fffaf5')

   function openMenu() {
      if(menu === "menu-btn") {
         setMenu('menu-btn open')
         // setMenuItems(0)
         // setNavColor('transparent')
      }
      else {
         closeNav();
      }
   }

   function closeNav() {
      setMenu('menu-btn')
      setMenuItems('-100vh')
      setTimeout(() => {
         setNavColor('#fffaf5')
      }, 300)
   }


   return (
      <>
         <nav>
            <div onClick={openMenu} className={menu} >
               <div className="menu-btn__burger"></div>
            </div>
         </nav>
      </>
   )
}

export default Nav
