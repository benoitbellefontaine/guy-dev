import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* action */

    const cycleSelect = id => {
        return {
            type: 'CYCLE_SELECT',
            id
        }
    }

/* action */

/* presentation */
    /* CYCLE presentation */
        const CycleItem = ({ onClick, selected, texte, text, id }) => (
            <li
                onClick={onClick}
                style={ {
                    fontWeight: 500,
                    listStyleType: 'none',
                    padding: 10,
                    margin: 3,
                    borderRadius: 10,
                    color: selected ? 'white' : 'rgba(0,0,0,0.7)',
                    backgroundColor: selected ? 'rgb(116,184,33)' : 'rgba(255,255,255,0.3)',
                    //border: selected ? '2px solid rgb(116,184,33)' : '2px solid gray',
                    fontSize: '100%',
                    fontWeight: 600,
                    flexGrow: 1
                }}
                >
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div><i className={selected ? `fas fa-check-circle fa-2x` : `far fa-circle fa-2x`}></i></div>
                    <span style={{width:'90%',margin:'0 auto',textAlign:'center'}}>{texte}</span>
                    <span> </span>
                </div>
            </li>
        )
        CycleItem.propTypes = {
            onClick: PropTypes.func.isRequired,
            selected: PropTypes.bool.isRequired,
            texte: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }

        const CList = ({ cycles, onTodoClick }) => (
            <div>
                {/*<h3>
                   Choisir le cycle de vie de votre entreprise
                </h3>*/}
                <ul style={{margin:'0',width:'100%',boxSizing:'border-box',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',padding:0}}>
                    {cycles.map(cycle => (
                        <CycleItem key={cycle.id} {...cycle} onClick={() => onTodoClick(cycle.id)} />
                    ))}
                </ul>
            </div>
        )
        CList.propTypes = {
            cycles: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    selected: PropTypes.bool.isRequired,
                    text: PropTypes.string.isRequired,
                    texte: PropTypes.string.isRequired,
                }).isRequired
            ).isRequired,
            onTodoClick: PropTypes.func.isRequired
        }
    /* CYCLE presentation */
/* end presentation */

/* container 5 : cyclesList */
    const getVisibleTodosCycle = (cycles, filter) => {
        switch (filter) {
        case 'SHOW_SELECTED':
            return cycles.filter(t => t.selected)
        case 'SHOW_ALL':
        default:
            return cycles
        }
    }
     
    const mapStateToPropsCycle = (state, ownProps) => {
        return {
            cycles: getVisibleTodosCycle(state.cycles, ownProps.filter)
        }
    }
     
    const mapDispatchToPropsCycle = dispatch => {
        return {
        onTodoClick: id => {
            dispatch(cycleSelect(id));
        }
        }
    }
    
    const CycleList = connect(
        mapStateToPropsCycle,
        mapDispatchToPropsCycle
    )(CList)

    export default CycleList;

/* container 5 : CycleList */