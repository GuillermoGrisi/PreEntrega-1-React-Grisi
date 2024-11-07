import logo from '/LogoSurf.jpg'

function Logo() {
  return (
    <div className='logoContainer'>
        <img className='logoImg' src={logo} alt=""/>
        <h2 className='brandName'>Driver's Wave</h2>
    </div>
  )
}

export default Logo