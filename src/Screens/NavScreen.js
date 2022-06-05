import  {  useState } from 'react'
import '../Styles/navbar_styles.css'
const initialStateBtnActive = {
  inicio: false,
  presentacion:false,
  tecnologias:false,
  proyectos:false,
  contactos:false
}  


export const NavScreen = ({isVisibleInicio, isVisiblePresent, isVisibleTecnology,isVisibleProyect,isVisibleContac}) => {
  console.log(isVisibleTecnology)
  const [menu, setMenu] = useState({
    menuOpen:false,
    btnClose:false,
    btnOpen:true
  })
  const [btnActive, setBtnActive] = useState(initialStateBtnActive)
  const handleBtnActive = (e) =>{
    const menuItem = e.currentTarget.text.toLowerCase()
    setBtnActive({
      ...initialStateBtnActive,
      [menuItem]: true
    })
  }
  const handleMenu =()=>{

    if(menu.btnOpen === true){
      setMenu({
        menuOpen:true,
        btnClose:true,
        btnOpen:false
      })
    } else {
      setMenu({
        menuOpen:false,
        btnClose:false,
        btnOpen:true
      })
      setBtnActive({
        ...initialStateBtnActive
      })
    }
  } 
  console.log(isVisibleContac)

  return (
    <>
        <div className='d-flex justify-content-start align-items-center navbar_ul'>
        <i onClick={handleMenu} className={menu.btnOpen ? "fa-solid fa-bars" : "classNoc"}></i>
          <div  className={menu.menuOpen ? "d-flex flex-column menuC" : "classNoc"}>
          <a className={ isVisibleInicio ? 'btnActive normal': 'normal'  } onClick={handleBtnActive}  href='#inicio'>
            Inicio
          </a>
          <a className={ isVisibleInicio  ? ' normal': isVisiblePresent ? ' btnActive normal':'normal'} onClick={handleBtnActive}  href='#present'>
            Presentacion
          </a>
          <a  className={ isVisibleInicio  ? ' normal':isVisiblePresent ? 'normal':isVisibleTecnology ? ' btnActive normal':'normal'} onClick={handleBtnActive}  href='#tec'>
            Tecnologias
          </a>
          <a  className={isVisibleTecnology ? 'normal': isVisibleContac ? 'normal':isVisibleProyect ? 'btnActive normal':'normal'} onClick={handleBtnActive} href='#proyect'>
            Proyectos
          </a>
          <a  className={ isVisibleContac ? 'btnActive normal':'normal'} onClick={handleBtnActive} href='#contac'>
            Contactos
          </a>
          </div>
          <i onClick={handleMenu} className={menu.btnClose ? "fa-solid fa-circle-xmark": 'classNoc'}></i>
        </div>
    </>
  )
}
