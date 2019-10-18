import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* action */
    const messageChange = texte => {
        return {
            type: 'MESSAGE_CHANGE',
            texte : texte
        }
    }

/* presentation */
    const MessageItem = ({ onChange, message }) => {
        const onChangeElement = (event) => onChange(event.target.value)
        return (
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <input defaultValue={message.texte} type='email' placeHolder='message' onBlur={onChangeElement} required />
            </div>
        )
    }
    MessageItem.propTypes = {
        onChange: PropTypes.func.isRequired,
        message: PropTypes.object.isRequired
    }

/* container */
    const mapStateToPropsMessage = (state) => {
        return { message: state.message }
    }

    const mapDispatchToPropsMessage = dispatch => {
        return {
            onChange: texte => {dispatch(messageChange(texte));}
        }
    }
     
/* connect */
export default connect(mapStateToPropsMessage,mapDispatchToPropsMessage)(MessageItem);