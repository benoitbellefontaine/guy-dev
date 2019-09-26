
import glass from '../assets/joel-filipe-jU9VAZDGMzs-unsplash.jpg';
//import eiffel from '../assets/malgorzata-frej-EQhpvZWdr5s-unsplash.jpg';
//import bridge from '../assets/cole-patrick-dp5wkuTwob8-unsplash.jpg';
import wave from '../assets/luca-bravo-SRjZtxsK3Os-unsplash.jpg';
import sky from '../assets/sweet-ice-cream-photography-QotTbY0b4YM-unsplash.jpg';
import khalifa from '../assets/rktkn-J7clI8qJ0xA-unsplash.jpg';
import glass2 from '../assets/scott-webb-M5PYMJ83OfE-unsplash.jpg';


// data.js
export default {
    name:'Services', type:'root', parent:null, 
        ftext:"pour construire et rénover des entreprises",
    children: [ 
        { name:'démarrage', type:'switch', 
            parent:'racines', 
            pos:[-50,0,-10], dim:[3,1,3], 
            color:'url('+wave+')',
            textcolor:'rgb(255,127,14)',
            //color:'linear-gradient(to right, rgb(255,127,14), rgb(200,77,7))',
            ftext:"Votre entreprise est sur le point d'éclore et vous être maintenant prêt à l'introduire au monde entier. Mais maîtrisez-vous les outils essentiels à un bon démarrage? Voici quelques outils et services mis à votre disposition pour assurer un démarrage réussi : incorporation, plan d'affaire, plan comptable, etc...",
            //children: [
                //{ name: "Votre entreprise est sur le point d'éclore et vous être maintenant prêt à l'introduire au monde entier. Mais maîtrisez-vous les outils essentiels à un bon démarrage? Voici quelques outils et services mis à votre disposition pour assurer un démarrage réussi : incorporation, plan d'affaire, plan comptable, etc...",
                    //color:'linear-gradient(to right, rgb(255,127,14), rgb(200,77,7))',
                    //fontsize:'calc(10px + 2vmin)',
                    children: [
                        { name: 'structure d\'entreprise', type:'hotspot', pos:[-50,0,0], dim:[1,32,32], color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60)',
                            children: [
                                { 
                                    name: 'la structure d\'entreprise est une étape importante', 
                                    type:'hotspot',
                                    color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60)'
                                },
                            ] 
                        },             
                        { name: 'incorporation', type:'link', start:[-50,0,-10], end:[-50,0,0], color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60))',
                            children: [
                                { name: 'l\'incorporation est une étape importante', 
                                type:'hotspot', color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60))' },
                            ]  
                        },
                        { name: 'plan d\'affaire', type:'hotspot', pos:[-40,0,-10], dim:[1,32,32], color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60))',
                            children: [
                                { name: 'plan d\'affaire', 
                                type:'hotspot', color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60))' },
                            ]  
                        },
                        { name: 'plan comptable', type:'link', start:[-50,0,-10], end:[-40,0,-10], color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60))',
                            children: [
                                { name: 'plan comptable', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                            ]  
                        },
                        { name: 'prévisions budgétaires', type:'hotspot', pos:[-50,10,-10], dim:[1,32,32], color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60))',
                            children: [
                                { name: 'prévisions budgétaires', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                            ]  
                        },
                        { name: 'recherche subventions', type:'link', start:[-50,0,-10], end:[-50,10,-10], color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60))',
                            children: [
                                { name: 'recherche subventions', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                            ]  
                        },
                        { name: 'financement', type:'hotspot', pos:[-50,10,-10], dim:[1,32,32], color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60))',
                            children: [
                                { name: 'financement', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                            ]  
                        },
                        { name: 'plan de commercialisation', type:'link', start:[-50,0,-10], end:[-50,10,-10], color:'linear-gradient(to right, rgb(255,127,14), rgb(255,192,60))',
                            children: [
                                { name: 'plan de commercialisation', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                            ]  
                        },
                    ]
                //},
            //]
        }, 
        { name: 'court terme', type:'link', 
            color:'url('+glass+')',
            textcolor:'rgb(64,160,64)',
            ftext: "Votre entreprise a le vent dans les voiles mais sa vitesse de croisière n'est pas au niveau de vos espérances (les problèmes sont difficilement identifiables et une consultation externe est requise). Les services que nous offront pour ce cycle pourront faire la différence entre la vitesse actuelle et une meilleure vitesse de croisiêre.",
            children: [
                { name: 'procédures de fin de mois', type:'hotspot', color:'linear-gradient(to right, rgb(64,160,64), rgb(34,120,34))',
                    children: [
                        { name: 'procédures de fin de mois', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                    ]  
                },
                { name: 'gestion des RH', type:'link', color:'linear-gradient(to right, rgb(64,160,64), rgb(34,120,34))',
                    children: [
                        { name: 'gestion des RH', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                    ]
                },
                { name: 'comparables budget vs réel', type:'hotspot', color:'linear-gradient(to right, rgb(64,160,64), rgb(34,120,34))',
                    children: [
                        { name: 'comparables budget vs réel', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                    ]  },
                { name: 'analyse des ratios financiers', type:'link', color:'linear-gradient(to right, rgb(64,160,64), rgb(34,120,34))',
                    children: [
                        { name: 'analyse des ratios financiers', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                    ]  },
                { name: 'préparation des budgets annuels', type:'hotspot', color:'linear-gradient(to right, rgb(64,160,64), rgb(34,120,34))',
                    children: [
                        { name: 'préparation des budgets annuels', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                    ]  },
            ]
    
        },
        { name:'moyen terme', type:'switch', pos:[0,30,0], dim:[3,1,3], 
            textcolor:'rgb(214,69,70)',
            color:'url('+glass2+')',
            ftext: "Une vision à long terme est maintenant nécessaire pour votre entreprise pour emprunter la voie de la pérennité. Que ce soit pour parer à un changement de garde soudain (plan de relève), vérifier l'état actuel de la situation (analyse des états financiers) ou améliorer les méthodes actuelles (analyse du prix de revient), nous proposons maintenant des outils spécialisés pour assurer la pérennité de votre entreprise.",
            //color:'linear-gradient(to right, rgb(214,69,70), rgb(164,19,20), rgb(214,69,70))',
            children: [
                { name: 'révision structure financière', type:'hotspot', color:'linear-gradient(to right, rgb(214,69,70), rgb(164,19,20), rgb(214,69,70))',
                    children: [
                        { name: 'préparation des budgets annuels', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] },
                    ]  },
                { name: 'analyse stratégique', type:'link', color:'linear-gradient(to right, rgb(214,69,70), rgb(164,19,20), rgb(214,69,70))', },
                { name: 'programme réduction des coûts', type:'hotspot', color:'linear-gradient(to right, rgb(214,69,70), rgb(164,19,20), rgb(214,69,70))', },
                { name: 'analyse rentabilité & efficacité', type:'link', color:'linear-gradient(to right, rgb(214,69,70), rgb(164,19,20), rgb(214,69,70))', },
                { name: 'révision de la structure d\'entreprise', type:'hotspot', color:'linear-gradient(to right, rgb(214,69,70), rgb(164,19,20), rgb(214,69,70))', },
                { name: 'amélioration des processus continues', type:'link', color:'linear-gradient(to right, rgb(214,69,70), rgb(164,19,20), rgb(214,69,70))', },
                { name: 'contrôles internes', type:'hotspot', color:'linear-gradient(to right, rgb(214,69,70), rgb(164,19,20), rgb(214,69,70))', },
                { name: 'prix de revient', type:'link', color:'linear-gradient(to right, rgb(214,69,70), rgb(164,19,20), rgb(214,69,70))', },
            ]
        },
        { name: 'excellence', type:'switch',
            textcolor:'rgb(148,103,189)',
            color:'url('+glass2+')',
            ftext: "Tout semble bien aller, mais ... Un survol rapide par notre équipe sur les chiffres et les méthodes de votre entreprise nous permettront de trouver les failles existentes et optimer votre rendement. Une simple analyse des états financiers peut parfois révéler d'importantes lacunes au niveau des méthodes et des opérations.", 
            //color:'linear-gradient(to right, rgb(148,103,189), rgb(98,73,139), rgb(148,103,189))',
            children: [
                { name: 'planification stratégique', type:'hotspot', color:'linear-gradient(to right, rgb(148,103,189), rgb(98,73,139), rgb(148,103,189))' },
                { name: 'plan de relève', type:'link', start:[-50,0,-10], end:[-50,0,0] },
                { name: 'tableau de bord (scorecard)', type:'hotspot', pos:[-40,0,-10], dim:[1,32,32] },
                { name: 'analyse de la chaine des valeurs', type:'link', start:[-50,0,-10], end:[-40,0,-10] },
                { name: 'rigueur & discipline', type:'hotspot', pos:[-50,10,-10], dim:[1,32,32] },
                { name: 'plans quinquennaux', type:'link', start:[-50,0,-10], end:[-50,10,-10] },
            ]   
        },
        { name: 'redressement', type:'switch', pos:[-40,0,-10], dim:[1,32,32], 
            textcolor:'rgb(140,86,75)',
            color:'url('+khalifa+')',
            //color:'linear-gradient(to right, rgb(140,86,75), rgb(90,36,25))',
            ftext: "Votre entreprise est en déclin et doit subir un redressement (problèmes fondamentaux liés à la structure de l'entreprise et les méthodes employées). Une application des services ci-dessous nous permettront de vous aider à redresser et remettre votre entreprise rapidement sur la voie du succès.", 
            children: [
                { name: 'respirateur artificiel', type:'hotspot', pos:[-50,0,0], dim:[1,32,32],
                    children: [
                        { name: 'respirateur artificiel', type:'hotspot', pos:[-50,0,0], dim:[1,32,32] }
                    ]
                },
                { name: 'consolidation de dettes', type:'link', start:[-50,0,-10], end:[-50,0,0] },
                { name: 'recherche de nouveaux investisseurs', type:'hotspot', pos:[-40,0,-10], dim:[1,32,32] },
                { name: 'réingénierie', type:'link', start:[-50,0,-10], end:[-40,0,-10] },
                { name: 'plan de revitalisation', type:'hotspot', pos:[-50,10,-10], dim:[1,32,32] },
                { name: 'refinancement', type:'link', start:[-50,0,-10], end:[-50,10,-10] },
            ]     
        }
    ]
}