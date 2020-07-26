
import { updateNewMessagetTextActionCreator, addMessageActionACreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
return {
dialogsPage: state.dialogsPage
}
}

let mapDispatchToProps = (dispatch) =>{
return{
    updateNewMessagetText: (text) =>{
        dispatch(updateNewMessagetTextActionCreator(text));
    },
    addMessage: ()=> {
        dispatch(addMessageActionACreator());
    },
}
}

const DialogsContainer = connect(mapStateToProps , mapDispatchToProps)(Dialogs);

export default DialogsContainer;