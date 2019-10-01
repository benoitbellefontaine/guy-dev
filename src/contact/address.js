import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* action */
    const addressChange = texte => {
        return {
            type: 'ADDRESS_CHANGE',
            texte : texte
        }
    }

/* presentation */
    const AddressItem = ({ onChange, address }) => {
        const onChangeElement = (event) => onChange(event.target.value)
        return (
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <input defaultValue={address.texte} type='email' placeHolder='@' onBlur={onChangeElement} required />
            </div>
        )
    }
    AddressItem.propTypes = {
        onChange: PropTypes.func.isRequired,
        address: PropTypes.object.isRequired
    }

/* container */
    const mapStateToPropsAddress = (state) => {
        return { address: state.address }
    }

    const mapDispatchToPropsAddress = dispatch => {
        return {
            onChange: texte => {dispatch(addressChange(texte));}
        }
    }
     
/* connect */
export default connect(mapStateToPropsAddress,mapDispatchToPropsAddress)(AddressItem);