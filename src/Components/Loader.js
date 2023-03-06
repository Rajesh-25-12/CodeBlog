import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import './lodere.scss'
const Loader = ({ open }) => {
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <DialogContent >
          {/* <div style={{}}>
          <div classNameName="divLoader" >

    <svg classNameName="svgLoader" viewBox="0 0 100 100">
        <path ng-attr-d="{{config.pathCmd}}"  stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#ffffff" transform="rotate(179.719 50 51)"> 
           <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
            </animateTransform>
           
            </path>
    </svg>
    <img src={Gif} classNameName='image' alt='' style={{ width: "240px", height: "240px" }}></img>


    <span classNameName="fvloadio">

       </span>
    </div>
    </div> */}
 

    <div className="bg-1"></div>
<section className="loading-data">
  <h2 className="loading-text text-center text-uppercase">
    <span className="char">L</span>
    <span className="char">o</span>
    <span className="char">a</span>
    <span className="char">d</span>
    <span className="char">i</span>
    <span className="char">n</span>
    <span className="char">g</span>
  </h2>
</section>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Loader
