import React from 'react'

const Form = (props)=> {
    return (
        <div className="container mt-5">
        <form onSubmit={props.loadWeather}>
           <div className="row">
               <div className="col-md-3 offset-md-3">
                   <input type="text" className="form-control bg-white border-0 shadow-sm mb-4" placeholder="City" name="city" autoComplete="off"/>
               </div>
               <div className="col-md-3">
               <input type="text" className="form-control bg-white border-0 shadow-sm mb-4" placeholder="Country" name="country" autoComplete="off"/>
               </div>
               <div className="col-md-3 text-md-left mt-md-0">
                   <button className="btn btn-md border-0 outline-0 btn-warning mb-4">Get Weather</button>
               </div>
           </div>
        </form>
        </div>
    )
}

export default Form
