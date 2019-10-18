import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SELECTED: 'SHOW_SELECTED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const initialstate = [
    // DEMARRAGE
    { id:6,     name: "structure d'entreprise",         type: "demarrage",       selected:false, color:'rgb(255,127,14)' },
    { id:7,     name: "incorporation",                  type: "demarrage",       selected:false, color:'rgb(255,127,14)' },
    { id:8,     name: "plan d'affaire",                 type: "demarrage",       selected:false, color:'rgb(255,127,14)' },
    { id:9,     name: "plan comptable",                 type: "demarrage",       selected:false, color:'rgb(255,127,14)' },
    { id:10,    name: "prévisions budgétaires",         type: "demarrage",       selected:false, color:'rgb(255,127,14)' },
    { id:11,    name: "recherche subventions",          type: "demarrage",       selected:false, color:'rgb(255,127,14)' },
    { id:12,    name: "financement",                    type: "demarrage",       selected:false, color:'rgb(255,127,14)' },
    { id:13,    name: "plan de commercialisation",      type: "demarrage",       selected:false, color:'rgb(255,127,14)' },
    // COURT TERME
    { id:14,    name: "procédures de fin de mois",          type: "court terme",     selected:false, color:'rgb(44,160,44)' },
    { id:15,    name: "gestion des RH",                     type: "court terme",     selected:false, color:'rgb(44,160,44)' },
    { id:16,    name: "comparables budget vs réel",         type: "court terme",     selected:false, color:'rgb(44,160,44)' },
    { id:17,    name: "analyse des ratios financiers",      type: "court terme",     selected:false, color:'rgb(44,160,44)' },
    { id:18,    name: "préparation des budgets annuels",    type: "court terme",     selected:false, color:'rgb(44,160,44)' },
    // MOYEN TERME
    { id: 19,   "name": "révision structure financière",    type: "moyen terme",     selected:false, color:'rgb(214,39,40)' },
    { id: 20,   "name": "analyse stratégique",              type: "moyen terme",     selected:false, color:'rgb(214,39,40)' },
    { id: 21,   "name": "programme réduction des coûts",    type: "moyen terme",     selected:false, color:'rgb(214,39,40)' },
    { id: 22,   "name": "analyse rentabilité & efficacité", type: "moyen terme",     selected:false, color:'rgb(214,39,40)' },
    { id: 23,   "name": "révision de la structure d'entreprise",     type: "moyen terme",     selected:false, color:'rgb(214,39,40)' },
    { id: 24,   "name": "amélioration des processus continues",      type: "moyen terme",     selected:false, color:'rgb(214,39,40)' },
    { id: 25,   "name": "contrôles internes",               type: "moyen terme",     selected:false, color:'rgb(214,39,40)' },
    { id: 26,   "name": "prix de revient",                  type: "moyen terme",     selected:false, color:'rgb(214,39,40)' },
    // EXCELLENCE
    { id:27,    name: "planification stratégique",          type: "excellence",      selected:false, color:'rgb(148,103,189)' },
    { id:28,    name: "plan de relève",                     type: "excellence",      selected:false, color:'rgb(148,103,189)' },
    { id:29,    name: "tableau de bord (scorecard)",        type: "excellence",      selected:false, color:'rgb(148,103,189)' },
    { id:30,    name: "analyse de la chaine des valeurs",   type: "excellence",      selected:false, color:'rgb(148,103,189)' },
    { id:31,    name: "rigueur & discipline",               type: "excellence",      selected:false, color:'rgb(148,103,189)' },
    { id:32,    name: "plans quinquennaux",                 type: "excellence",      selected:false, color:'rgb(148,103,189)' },
    // REDRESSEMENT
    { id:33,    name: "respirateur artificiel",            type: "redressement",      selected:false, color:'rgb(140,86,75)' },
    { id:34,    name: "consolidation de dettes",           type: "redressement",      selected:false, color:'rgb(140,86,75)' },
    { id:35,    name: "recherche de nouveaux investisseurs", type: "redressement",    selected:false, color:'rgb(140,86,75)' },
    { id:36,    name: "réingénierie",                      type: "redressement",      selected:false, color:'rgb(140,86,75)' },
    { id:37,    name: "plan de revitalisation",            type: "redressement",      selected:false, color:'rgb(140,86,75)' },
    { id:38,    name: "refinancement",                     type: "redressement",      selected:false, color:'rgb(140,86,75)' },

];

function serviceApp( state = initialstate, action ) {
    switch (action.type) {
        /*case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
        })*/
        case 'TOGGLE_SERVICE':
            return state.map(service =>
                (service.id === action.id)
                ? {...service, selected: !service.selected}
                : service
            )
        default:
            return state
    }
}

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    cpo: {
        "name": "CPO",
        "id": 0,
        "desc": "CPO description",
        "children": [
            { 
                "name": "Démarrage",
                "id": 1,
                "desc": "Démarrage description",
                "children": [
                    {   "id": 3, "name": "structure d'entreprise tree", "desc": "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin." },
                    {   "id": 4, "name": "incorporation", "desc": "He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections." },                    
                ]
            },
            { 
                "name": "Court terme",
                "id": 2,
                "desc": "Court terme description",
                "children": [
                    { "id": 5, "name": "procédures de fin de mois", "desc": "procédures de fin de mois description"},
                    { "id": 6, "name": "gestion des RH", "desc": "gestion RH description"},
                ]
            }
        ]
    },
    name: {texte:''},
    address: {texte:''},
    message: {texte:''},
    services: [
        // DEMARRAGE
        { id:1, text: "structure d'entreprise",                cycles: ["demarrage"], completed:true },
        { id:2, text: "incorporation",                         cycles: ["demarrage"], completed:false },
        { id:3, text: "plan d'affaire",                        cycles: ["demarrage"], completed:false },
        { id:4, text: "plan comptable",                        cycles: ["demarrage"], completed:false },
        { id:5, text: "prévisions budgétaires",                cycles: ["demarrage"], completed:false },
        { id:6, text: "recherche subventions",                 cycles: ["demarrage"], completed:false },
        { id:7, text: "financement",                           cycles: ["demarrage"], completed:false },
        { id:8, text: "plan de commercialisation",             cycles: ["demarrage"], completed:false },

        // COURT TERME
        { id:9,  text: "procédures de fin de mois",             cycles: ["court terme"], completed:false },
        { id:10, text: "gestion des RH",                        cycles: ["court terme"], completed:false },
        { id:11, text: "comparables budget vs réel",            cycles: ["court terme"], completed:false },
        { id:12, text: "analyse des ratios financiers",        cycles: ["court terme"], completed:false },
        { id:13, text: "préparation des budgets annuels",       cycles: ["court terme"], completed:false },
        //{ id:14, text: "CT14",                                  cycles: ["court terme"], completed:false },

        // MOYEN TERME
        { id:15, text: "révision structure financière",         cycles: ["moyen terme"], completed:false },
        { id:16, text: "analyse stratégique",                   cycles: ["moyen terme"], completed:false },
        { id:17, text: "programme réduction des coûts",         cycles: ["moyen terme"], completed:false },
        { id:18, text: "analyse rentabilité & efficacité",      cycles: ["moyen terme"], completed:false },
        { id:19, text: "révision de la structure d'entreprise", cycles: ["moyen terme"], completed:false },
        { id:20, text: "amélioration des processus continues",  cycles: ["moyen terme"], completed:false },
        { id:21, text: "contrôles internes",                    cycles: ["moyen terme"], completed:false },
        { id:22, text: "prix de revient",                       cycles: ["moyen terme"], completed:false },

        // EXCELLENCE
        { id:23, text: "planification stratégique",         cycles: ["excellence"], completed:false },
        { id:24, text: "plan de relève",                    cycles: ["excellence"], completed:false },
        { id:25, text: "tableau de bord (scorecard)",       cycles: ["excellence"], completed:false },
        { id:26, text: "analyse de la chaine des valeurs",  cycles: ["excellence"], completed:false },
        { id:27, text: "rigueur & discipline",              cycles: ["excellence"], completed:false },
        { id:28, text: "plans quinquennaux",                cycles: ["excellence"], completed:false },
        
        // REDRESSEMENT
        { id:29, text: "respirateur artificiel",            cycles: ["redressement"], completed:false,   tooltip: "accompagnement chez notre syndic de faillite et proposition aux créanciers"},
        { id:30, text: "consolidation de dettes",           cycles: ["redressement"], completed:false,   tooltip: "évaluation et maximsation des actifs" },
        { id:31, text: "recherche de nouveaux investisseurs", cycles: ["redressement"], completed:false, tooltip: "investisseurs privés, associés" },
        { id:32, text: "réingénierie",                      cycles: ["redressement"], completed:false },
        { id:34, text: "plan de revitalisation",            cycles: ["redressement"], completed:false },
        { id:35, text: "refinancement",                     cycles: ["redressement"], completed:false },

        //{ id:37, text: "R & D",                             cycles: ["demarrage","redressement"], completed:false },
    ],
    team: [
        { 
            id:0,
            text: "Pierre Richer",
            desc : "Pierre est le président de notre entreprise. Ceux qui le connaissent vous diront sans hésiter qu'il est un banquier hors-pair et un investisseur aguerri. Pierre a oeuvré dans le domaine bancaire pendant 20 ans et y a gravi les échelons jusqu'à un poste de direction. Il a ensuite occupé un poste de directeur chez Investissement Québec. Ses objectifs et vos objectifs sont les mêmes : atteindre des résultats supérieurs !",
            selected: false 
        },
        { 
            id:1, 
            text: "Guy Boucher",
            desc : "Guy est le vice-président de notre entreprise. Il est surtout reconnu pour ses qualités d'analyste en rendement & redressement et de fiscaliste. Il a acquis beaucoup d'expérience en oeuvrant pour de nombreuses compagnies mais rien n'égale l'expérience acquise en tant que propriétaire-fondateur de sa propre compagnie. Ses objectifs sont de mettre ses qualités et son expérience à votre disposition !",
            selected: false 
        },
    ],
    secteurs: [
        {   id:1, texte: "Administrations publiques",text: "Public administration",selected: true},
        {   id:2, texte: "Agriculture, foresterie, pêche et chasse", text: "Agriculture, forestry, fishing and hunting", selected: false },
        {   id:3, texte: "Arts, spectacles et loisirs", text: "Arts, entertainment and recreation", selected: false },
        {   id:4, texte: "Autres services (sauf les administrations publiques)", text: "Other services (except public administration)", selected: false },
        {   id:5, texte: "Commerce de détail", text: "Retail trade", selected: false },
        {   id:6, texte: "Commerce de gros",  text: "Wholesale trade", selected: false },
        {   id:7, texte: "Construction",  text: "Construction", selected: false },
        {   id:8, texte: "Extraction minière, exploitation en carrière, et extraction de pétrole et de gaz", text: "Mining, quarrying, and oil and gas extraction", selected: false },
        {   id:9, texte: "Fabrication", text: "Manufacturing", selected: false },
        {   id:10,texte: "Finance et assurances", text: "Finance and insurance", selected: false },
        {   id:11,texte: "Gestion de sociétés et d’entreprises", text: "Management of companies and enterprises", selected: false },
        {   id:12,texte: "Hébergement et services de restauration", text: "Accommodation and food services", selected: false },
        {   id:13,texte: "Industrie de l’information et industrie culturelle", text: "Information and cultural industries", selected: false},
        {   id:14,texte: "Services administratifs, services de soutien, services de gestion des déchets et services d’assainissement", text: "Administrative and support services, waste management and remediation services", selected: false},
        {   id:15, texte: "Services d’enseignement", text: "Educational services", selected: false},
        {   id:16, texte: "Services de restauration et débit de boisson", text: "Food and beverage services and pubs", selected: false },
        {   id:17, texte: "Services immobiliers et services de location et de location à bail", text: "Real estate and rental and leasing services", selected: false },
        {   id:18, texte: "Services professionnels, scientifiques et techniques", text: "Professional, scientific and technical services", selected: false },
        {   id:19, texte: "Services publics", text: "Public services", selected: false },
        {   id:20, texte: "Soins de santé et assistance sociale", text: "Health care and social assistance", selected: false },
        {   id:21, texte: "Transport et entreposage, transport par camion", text: "Transport and storage, truck transport", selected: false },
    ],
    cycles: [
        {   id:1, texte: "Démarrage",text: "Startup",selected: true},
        {   id:2, texte: "Court terme",text: "Short Term", selected: false },
        {   id:3, texte: "Moyen terme",text: "Middle Term", selected: false },
        {   id:4, texte: "Excellence",text: "Excellence", selected: false },
        {   id:5, texte: "Redressement",text: "Re-engineering", selected: false },
    ],
    qualites: [
        {   id:1, texte: "Expérience - le consultant externe ajoute sa vaste expérience à notre équipe", text: "Experience - the external consultant adds his or her extensive experience to our team",selected: false},
        {   id:2, texte: "Impartialité - le consultant externe apporte une vue non-biaisée de la situation", text: "Impartiality - the external consultant provides an unbiased view of the situation", selected: false },
        {   id:3, texte: "Compétence - le consultant externe possède une expertise que notre entreprise a besoin", text: "Competence - the external consultant has the expertise that our company needs", selected: false },
        {   id:4, texte: "Réseau - mise à profit du réseau de contact du consultant externe", text: "Network - leveraging the external consultant's contact network", selected: false },
        {   id:5, texte: "Confiance - inspirer, insuffler une plus grande confiance à notre équipe", text: "Trust - inspire, instill greater trust in our team", selected: false },
        {   id:6, texte: "Confirmation - le consultant externe nous aide à confirmer notre démarche et nos objectifs", text: "Confirmation - the external consultant helps us to confirm our approach and objectivess", selected: false },
        {   id:7, texte: "Proximité culturelle et géographique - le consultant externe est conscient de la réalité et des problèmes que nous rencontrons", text: "Cultural and geographical proximity - the external consultant is aware of the reality and problems we face", selected: false },
    ],
    chiffres: [
        { id:1, texte: "moins de $100000", text: "less than $100000", selected: false },
        { id:2, texte: "entre $100000 et $500000", text: "between $100000 and $500000", selected: false },
        { id:3, texte: "entre $500000 et $1000000", text: "between $500000 and $1000000", selected: false },
        { id:4, texte: "entre $1,000,000 et $10,000,000", text: "between $1,000,000 and $10,000,000", selected: false },
        { id:5, texte: "plus de $10,000,000",text: "more than $10,000,000", selected: false },
    ],
    defis: [
        { id:1, texte: "augmenter nos ventes", text: "increase our sales", selected: false },
        { id:2, texte: "réduire nos coûts", text: "reduce our costs", selected: false },
        { id:3, texte: "manque de structure", text: "lack of structure", selected: false },
        { id:4, texte: "gestion des ressources humaines", text: "human resources management", selected: false },
        { id:5, texte: "manque de planification", text: "lack of planning", selected: false },
        { id:6, texte: "manque d'outils et d'expertise", text: "lack of tools and expertise", selected: false },
        { id:7, texte: "manque de financement", text: "lack of funding", selected: false },
        { id:8, texte: "manque de rentabilité et d'efficacité", text: "lack of profitability and efficiency", selected: false },
        { id:9, texte: "acquérir des outils d'analyse", text: "acquire analytical tools", selected: false },
        { id:10, texte: "acquérir une vision à long terme", text: "acquire a long-term vision", selected: false },
        { id:11, texte: "procéder à un redressement", text: "reengineer", selected: false },
    ]
}

const services = ( state = initialstate, action ) => {
    switch (action.type) {
        case 'ADD_TODO':    
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
        case 'TOGGLE_SERVICE':
        return state.map(todo =>
            (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
        default:
        return state
    }
}

const cpo = ( state = initialState.cpo, action ) => {
    switch (action.type) {
        case 'TOGGLE_SERVICE':
            return state.map(todo =>
                (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state
    }
}

const name = ( state = initialState.name, action ) => {
    switch (action.type) {
        case 'NAME_CHANGE':
            return {
                ...state,
                texte: action.texte,
            };
        default:
            return state
    }
}

const address = ( state = initialState.address, action ) => {
    switch (action.type) {
        case 'ADDRESS_CHANGE':
            return {
                ...state,
                texte: action.texte,
            };
        default:
            return state
    }
}

const message = ( state = initialState.message, action ) => {
    switch (action.type) {
        case 'MESSAGE_CHANGE':
            return {
                ...state,
                texte: action.texte,
            };
        default:
            return state
    }
}

const team = ( state = initialState.team, action ) => {
    switch (action.type) {
        case 'SELECT':
        return state.map(person =>
            (person.id === action.id)
            ? {...person, selected: !person.selected}
            : person
        )
        case 'CLICK':
        return state.map(person =>
            (
                person.id === action.id)
                    ? {...person, selected: !person.selected}
                    : {...person, selected: false} //person
            )
        default:
        return state
    }
}

const cycles = ( state = initialState.cycles, action ) => {
    switch (action.type) {
        case 'CYCLE_SELECT':
        return state.map(c =>
            (
                c.id === action.id)
                    ? {...c, selected: !c.selected}
                    : {...c, selected: false} //situation
            )
        default:
        return state
    }
}

const secteurs = ( state = initialState.secteurs, action ) => {
    switch (action.type) {
        case 'SECTEUR_SELECT':
        return state.map(secteur =>
            (secteur.id === action.id)
            ? {...secteur, selected: !secteur.selected}
            : secteur
        )
        case 'GET_COUNT':
        return state.map(secteur =>
            (secteur.id === action.id)
            ? {...secteur, selected: !secteur.selected}
            : secteur
        ).length
        default:
        return state
    }
}

const qualites = ( state = initialState.qualites, action ) => {
    switch (action.type) {
        case 'QUALITE_SELECT':
        return state.map(qualite =>
            (qualite.id === action.id)
            ? {...qualite, selected: !qualite.selected}
            : qualite
        )
        default:
        return state
    }
}

const chiffres = ( state = initialState.chiffres, action ) => {
    switch (action.type) {
        case 'CHIFFRE_SELECT':
        return state.map(ca =>
            (
                ca.id === action.id)
                    ? {...ca, selected: !ca.selected}
                    : {...ca, selected: false} //chiffre d'affaire
            )
        default:
        return state
    }
}

const defis = ( state = initialState.defis, action ) => {
    switch (action.type) {
        case 'DEFI_SELECT':
        return state.map(defi =>
            (defi.id === action.id)
            ? {...defi, selected: !defi.selected}
            : defi
        )
        default:
        return state
    }
}

const visibilityFilter = (state = 'SHOW_NONE', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const reducers = combineReducers({
    services,
    visibilityFilter,
    team,
    secteurs,
    cycles,
    qualites,
    chiffres,
    defis,
    serviceApp,
    //form elements
    name,
    address,
    message,
})

export default reducers;