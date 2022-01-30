import React from 'react';
import EditorBox from './EditorBox';
class Designs extends React.Component {
  constructor() {
    super();
    this.state = {
      expandDesignTitle :"Nothing"
    }
  }
  expandDesign = (title,isopen) => {
    if(isopen==="open")
    { 
      this.setState({
      expandDesignTitle : "nothing"
    })
    }
    else
    {
    this.setState({
      expandDesignTitle :  title
    })
  }
  }
    render() {
      console.log(this.props);
      const {allcode} = this.props;
      console.log("allcode",allcode);
      return (
        <div>
  {/*wave starts*/}
  <div className="reviewwaveup">
    <svg className="waves designwave" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x={35} y={2} fill="rgba(245, 83, 237,0.7)" />
        <use xlinkHref="#gentle-wave" x={39} y={4} fill="rgba(0, 201, 255,0.5)" />
        <use xlinkHref="#gentle-wave" x={43} y={6} fill="rgb(190, 5, 225,0.2)" />
        <use xlinkHref="#gentle-wave" x={47} y={8} fill="rgba(5,181,228,0.3)" />
        <use xlinkHref="#gentle-wave" x={50} y={1} fill="rgba(0,0,228,0.3)" />
      </g>
    </svg>
  </div>
  {/*wave ends*/}
  <div className="design" id="designs">
  
    <div className="designcontainer" id="glass">
      <h1>Designs</h1>
      <div>
     {allcode.map((code) => (
       <div>
         <EditorBox
         id = {code.id}
         title = {code.title}
         htmlCode = {code.htmlCode}
         cssCode = {code.cssCode}
         jsCode = {code.jsCode}
         expandDesign = {this.expandDesign}
         expandDesignTitle = {this.state.expandDesignTitle}
         handleEdit = {this.props.handleEdit}
       />
         </div>
       
     ))}
     </div>
    </div>
  </div>
</div>

      );
    }
  }

export default Designs;