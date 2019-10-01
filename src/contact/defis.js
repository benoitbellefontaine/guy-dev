import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

/* action */
    const defiSelect = id => {
        return {
            type: 'DEFI_SELECT',
            id
        }
    }
/* action */

/* presentation */
    /* DEFI presentation */
        const DefiItem = ({ onClick, selected, text, id }) => (
            <li
                onClick={onClick}
                style={ {
                    fontWeight: 500,
                    listStyleType: 'none',
                    padding: 10,
                    margin: 3,
                    borderRadius: 10,
                    color: selected ? 'white' : 'rgba(0,0,0,0.7)',
                    backgroundColor: selected ? '#262' : 'rgba(255,255,255,0.8)', //vert:rgb(116,184,33)
                    fontSize: '100%',
                    fontWeight: 600,
                    flexGrow: 1
                }}
                >
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div><i className={selected ? `fas fa-check-square fa-2x` : `far fa-square fa-2x`}></i></div>
                    <span style={{width:'90%',margin:'0 auto',padding:'0 5px 0 5px',textAlign:'center'}}>{text}</span>
                </div>
            </li>
        )
        DefiItem.propTypes = {
            onClick: PropTypes.func.isRequired,
            selected: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }

        const DList = ({ defis, onTodoClick }) => (
            <div style={{height:'100%'}}>
                {/*<h3>
                   Quels sont vos plus grands défis ?
                </h3>*/}
                <ul style={{margin:'0',width:'100%',boxSizing:'border-box',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',padding:0}}>
                    {defis.map(defi => (
                        <DefiItem key={defi.id} {...defi} onClick={() => onTodoClick(defi.id)} />
                    ))}
                </ul>
            </div>
        )
        DList.propTypes = {
            //questionId: PropTypes.number,
            defis: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    selected: PropTypes.bool.isRequired,
                    text: PropTypes.string.isRequired
                }).isRequired
            ).isRequired,
            onTodoClick: PropTypes.func.isRequired
        }
    /* DEFI presentation */
/* end presentation */

/* container 3 : DefiList */
    const getVisibleTodosDefi = (defis, filter) => {
        switch (filter) {
        case 'SHOW_SELECTED':
            return defis.filter(t => t.selected)
        case 'SHOW_ALL':
        default:
            return defis
        }
    }
     
    const mapStateToPropsDefi = (state, ownProps) => {
        return {
            defis: getVisibleTodosDefi(state.defis, ownProps.filter)
        }
    }
     
    const mapDispatchToPropsDefi = dispatch => {
        return {
        onTodoClick: id => {
            dispatch(defiSelect(id));
        }
        }
    }
    
    const DefiList = connect(mapStateToPropsDefi,mapDispatchToPropsDefi)(DList)

    export default DefiList;

/* container 3 : DefiList */