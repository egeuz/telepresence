import React,{Component} from 'react';

class PopupModal extends Component{
    closeModal = ()=>{
        this.props.closeModal();
      }

   render(){
       if(!this.props.show){
           return null;
       }
    return(
        <div className="Modal">
            <div className='container'>
              
           
             <div><span id='close' onClick={()=>{this.closeModal();}}>&#10005;</span></div>

            </div>
        </div>
    );
   }

}


export default PopupModal;

