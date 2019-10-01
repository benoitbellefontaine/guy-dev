import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* action */
    const nameChange = texte => {
        return {
            type: 'NAME_CHANGE',
            texte : texte
        }
    }

/* presentation */
    const NameItem = ({ onChange, name }) => {
        const onChangeElement = (event) => //{
            onChange(event.target.value)
        //};
        return (
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <input defaultValue={name.texte} type='text' placeHolder='nom/name' onBlur={onChangeElement} required />
            </div>
        )
    }
    NameItem.propTypes = {
        onChange: PropTypes.func.isRequired,
        name: PropTypes.object.isRequired
    }

/* container */
    const mapStateToPropsName = (state) => {
        return { name: state.name }
    }

    const mapDispatchToPropsName = dispatch => {
        return {
            onChange: texte => {dispatch(nameChange(texte));}
        }
    }
     
/* connect */
export default connect(mapStateToPropsName,mapDispatchToPropsName)(NameItem);