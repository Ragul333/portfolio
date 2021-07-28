import React from 'react'

export const Project = (props) => {
    return (
       

            
            <div class="col-md-4" >
            <div class="card" data-aos='zoom-in' style={{marginTop:"5%"}}>
  <img src={props.image}  class="card-img-top" alt="..."/>
  <div class="card-body" >
  <h4 className='text-center' style={{border:'1px solid silver',padding:'5px'}}>{props.title}</h4>    
    <p class="card-text text-justify">{props.about}</p>
    <p className='mt-2 mb-2' style={{fontSize:"smaller"}}>
    <span style={{border:"1px solid silver",padding:'5px'}}><i class="fas fa-laptop-code"></i> TECH STACKS</span> <br/><br/>
     {props.skills}
            </p>
 
{/* 
           <div className='d-flex col-md-6 col-sm-4 mx-auto mt-3' style={{backgroundColor:"#1f1752"}}>
            <button className='btn btn-outline-info'>
              <span>
            
              </span>
              <a href={props.code} target='_blank'>Code</a>
                
            </button> &nbsp;
            <button className='btn btn-outline-info'>
               <span>
       
               </span>
                <a href={props.live} target='_blank'>Live</a>
            </button>
            </div> */}
            </div>
            <div
                            className="overlay"
                            >
                            <h5 className="text text-center card-hover-line">
                              <div id='code-overlay'>
                            <span  style={{border:"1px solid silver" ,padding:'15px'}}>
                            <a href={props.code} target='_blank'>
                              
                            <i class="fas fa-code"></i>
                              </a>
                            </span> &nbsp;&nbsp;&nbsp;
                            <span  style={{border:"1px solid silver" ,padding:'15px'}}>
                            <a href={props.live} target='_blank'>
                        
                            <i class="fas fa-rocket"></i>
                            </a>
                            </span></div>
                            </h5>
                          </div>
</div>
</div>



    )
}
