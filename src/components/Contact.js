import React from 'react'

export const Contact = () => {
    return (
        <>
        <hr/>
        <div className='container mt-4 mb-4' >
        <div className='col-md-12 mx-auto' id="contactus">
        <div class="text-divider"><p className='text-center mb-4' style={{border:"1px solid silver",padding:'15px'}}>Get connected you can find me at</p></div>
        <div className='col-md-6 mx-auto' id="contactus">
            <p className='text-center contact-p mb-4'></p>
            <p className='d-flex contact-icon mt-4' style={{justifyContent:"space-around"}}>
            <a href='https://github.com/Ragul333' target='_blank' style={{color:"black"}} >
            <i class="fab fa-github" ></i>
            </a>
            <a href='https://www.linkedin.com/in/ragul-s-7192311a9/' target='_blank'>
            <i class="fab fa-linkedin-in" style={{color:"#0e76a8"}}></i>
            </a>
            <a href='https://wa.me/+917010278840' target='_blank'>
            <i class="fab fa-whatsapp" style={{color:"#25D366"}}></i>
            </a>

            </p>
            <p className='text-center text-muted mt-5'>
                 &#169; Ragul
            </p>
        </div>
        </div>
        </div>
        </>
    )
}
