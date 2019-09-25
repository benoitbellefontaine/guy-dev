import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* action */
    const secteurSelect = id => {
        return {
            type: 'SECTEUR_SELECT',
            id
        }
    }
/* action */

/* presentation */
    /* SECTEUR presentation */
        const SecteurItem = ({ onClick, selected, text, id }) => (
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
                    <div><i className={selected ? `fas fa-check-square fa-2x` : `far fa-square fa-2x`}></i></div>
                    <span style={{width:'90%',margin:'0 auto',textAlign:'center'}}>{text}</span>
                    <span> </span>
                </div>
            </li>
        )
        SecteurItem.propTypes = {
            onClick: PropTypes.func.isRequired,
            selected: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }

        const SList = ({ secteurs, onTodoClick /*, questionId*/ }) => (
            <div style={{height:'100%'}}>
                {/*<h3>
                    Indiquez le ou les secteurs d'activité de votre entreprise
                </h3>*/}
                <ul style={{margin:'0',width:'100%',boxSizing:'border-box',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',padding:0}}>
                    {secteurs.map(secteur => (
                        <SecteurItem key={secteur.id} {...secteur} onClick={() => onTodoClick(secteur.id)} />
                    ))}
                </ul>
            </div>
        )
        SList.propTypes = {
            //questionId: PropTypes.number,
            secteurs: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    selected: PropTypes.bool.isRequired,
                    text: PropTypes.string.isRequired
                }).isRequired
            ).isRequired,
            onTodoClick: PropTypes.func.isRequired
        }
    /* SECTEUR presentation */
/* end presentation */
/* container 3 : ListeDeSecteurs */
    const getVisibleSecteurs = (secteurs, filter) => {
        switch (filter) {
        case 'SHOW_SELECTED':
            return secteurs.filter(t => t.selected)
        case 'SHOW_ALL':
        default:
            return secteurs
        }
    }
    
    const mapStateToPropsSecteur = (state, ownProps) => {
        return {
            secteurs: getVisibleSecteurs(state.secteurs, ownProps.filter)
        }
    }
     
    const mapDispatchToPropsSecteur = dispatch => {
        return {
        onTodoClick: id => {
            dispatch(secteurSelect(id));
        }
        }
    }
    
    const ListeDeSecteurs = connect(mapStateToPropsSecteur,mapDispatchToPropsSecteur)(SList)
    export default ListeDeSecteurs;
/* container 3 : ListeDeSecteurs */