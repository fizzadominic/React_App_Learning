import React, {useState} from 'react'

export default function About() {


    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor : 'white',
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode") 
 const toggleStyle =  ()=>{
    if(myStyle.color === 'black'){
        setMyStyle({
            color:'white',
            backgroundColor: 'black',
          })
          

        setBtnText("Enable Light Mode")
   } 
    else{
        setMyStyle({
            color:'black',
            backgroundColor:'white',
        })
        setBtnText("Enable Dark Mode")
    }
  }

    return (
        <div className='container my-5 ' style={myStyle}  >
            <h2>About Us</h2>
            <div>

        <p>
        Reviews, client logos, case studies, and results bring consistency to your About Us page. It’s what really proves what you are saying is real and the impact you can bring to future clients.

        With these components in mind, you will have a framework from which to build an engaging and unique About Us page.

        However, if you are looking for some inspiration, the 25 examples below will guide your creative process.
        </p>
            </div>

            <div className='container '>
                <button onClick={toggleStyle} type="button" id= " change" className="btn btn-dark">{btnText}</button>

            </div>
        </div>
    )
}
