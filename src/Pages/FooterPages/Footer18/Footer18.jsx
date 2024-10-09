import React, { useState } from 'react'
import "./Footer18.css";
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer18() {

    const imgURL = ASSET_PATHS.IMG_URL;


    // Sample FAQ data
    const faqData1 = [
        {
            question: "Les PC Megaport sont-ils montés ?",
            answer: `Oui, tous les PC Megaport sont livrés montés. Que vous commandiez un PC gamer ou un PC configuré par vous même, vous recevrez une unité centrale montée et prête à l’emploi.`,
        },
        {
            question: "Les composants inclus sont-ils neufs ?",
            answer: `Oui, tous les composants de votre PC Megaport sont neufs.`,
        },
        {
            question: "Puis-je modifier la configuration de mon PC ?",
            answer: `Oui, vous pouvez modifier la majorité de nos PC Megaport dans la liste des composants, vous pouvez cliquer sur chacun d’entre eux. Le configurateur vous propose alors une sélection de composants compatibles avec le reste de votre matériel. Il vous est également possible de choisir vous même l’intégralité des composants en passant par notre configurateur en ligne.`,
        },
        {
            question: "Vais-je recevoir mon PC exactement comme je l’ai configuré ?",
            answer: `Oui, vous recevez un PC monté exactement selon la configuration souhaitée.`,
        },
        {
            question: "Windows est-il installé ?",
            answer: `La licence Windows n’est pas standard sur une tour PC. Vous devez vous assurer avant tout que la licence Windows est incluse sous “Système d’exploitation”. Si c’est bien le cas, nous installons Windows sur le disque principal de votre PC.`,
        },
        {
            question: "L’écran, le clavier et la souris sont-ils inclus ?",
            answer: `Ils sont bien inclus dans nos packs PC tout en un. Dans le cas d’un PC gamer ou d’un PC configuré par vous même, vous devrez rajouter vous même ces périphériques dans le configurateur.`,
        },
        {
            question: "Comment trouver le bonne carte graphique pour mon PC ?",
            answer: `Il vous suffit de vous rendre sur notre guide comparatif de cartes graphiques. Vous y trouverez toutes les infos sur les FPS, le raytracing, la VRAM et bien plus encore pour faire le bon choix pour votre PC gamer.`,
        },
        {
            question: "Mon jeu tourne-t-il sur ce PC ? A combien de FPS ?",
            answer: `Notre guide comparatif de cartes graphiques vous donne déjà de nombreuses informations à ce sujet.

Vous pouvez vérifier les performances en jeu sur YouTube en cherchant "Jeu X + Carte graphique Y". Cela vous donnera une idée des performances à attendre.

Vous pouvez également vous en assurer sur des sites comme Systemreqs.com : https://systemreqs.com/fr/
Ce site contient une base de données vous permettant de vérifier si votre configuration est suffisante pour le jeu auquel vous souhaitez jouer.
Nous attirons votre attention sur le fait que les performances visibles en ligne peuvent sensiblement varier selon les machines. Les performances dépendent de nombreux paramètres externes. Ces données ne sont à prendre qu’à titre indicatif.`,
        },
        {
            question: "Le PC peut-il se connecter par Wifi ?",
            answer: `La carte Wifi n’est pas standard dans une tour PC. Si vous souhaitez vous connecter par Wifi, vous devez rajouter une carte Wifi dans la liste des composants en cliquant sur “WIFI”. Dans tous les cas, le PC peut-être connecté par connexion filaire.`,
        },
        {
            question: "Comment puis-je payer ?",
            answer: `Vous trouverez tous les détails concernant les options  de paiement à cette adresse : https://www.megaport.fr/paiement.html`,
        },
        {
            question: "Puis je payer en plusieurs fois ?",
            answer: `Yes, Megaport.fr vous donne la posssibilité de payer votre PC en plusieurs fois avec alma.`,
        },
        {
            question: "Comment payer avec ALMA ?",
            answer: `Quelles sont les conditions pour payer en plusieurs fois ?

Le paiement en plusieurs fois est disponible pour les paniers allant de 50€ à 5000€
Alma accepte les cartes émises en France de type Visa, Mastercard et American Express.
Les cartes prépayées et virtuelles et à autorisation systématique ne sont pas acceptées
Je souhaite payer en plusieurs fois, comment faire ?

Lors du choix de la solution de paiement, sélectionnez “Payer en plusieurs fois avec Alma”. Vous serez alors redirigé vers une page de paiement sur laquelle vous devrez entrer vos coordonnées bancaires comme pour un paiement standard. Vous y trouverez le récapitulatif de vos échéances à venir. Vous recevrez ensuite un email récapitulatif avec le calendrier de vos échéances puis un email de rappel 3 jours avant chaque échéance.

Le paiement en plusieurs fois avec Alma est-il sécurisé ?

Alma effectue systématiquement une vérification 3D Secure pour confirmer que vous êtes bien le propriétaire de la carte utilisée. Votre banque vous adresse alors un SMS de confirmation ou une notification push dans votre application bancaire, afin de confirmer que vous êtes bien à l'initiative de cette opération et qu'elle n'est pas frauduleuse.

Le paiement en plusieurs fois est-il disponible dans vos boutiques ?

Le paiement en plusieurs fois est disponible dans toutes nos boutiques et les conditions d’éligibilité sont les mêmes que pour notre site internet. Il vous suffit de demander au vendeur de payer en plusieurs fois avec Alma et ce dernier vous guidera.

Je souhaite me faire rembourser mais j’ai payé en plusieurs fois avec Alma, que dois-je faire ?

Alma est notre partenaire de paiement mais il ne peut avoir accès à la gestion de nos commandes. Si vous souhaitez annuler votre commande, obtenir un remboursement ou un geste commercial, nous vous invitons à nous contacter à l’adresse suivante : support@getalma.eu`,
        },
        {
            question: "Ma commande est-elle validée ?",
            answer: `Veuillez svp vérifier le statut de votre commande dans votre compte client. Une commande confirmée affiche le statut COMPLETE.

Si votre commande affiche le statut PENDING, cela signifie que votre paiement par carte bancaire n'a pas pu aboutir. Aucun prélèvement ne pourra être effectué et votre commande ne pourra pas être validée. Nous vous conseillons dans ce cas de passer une nouvelle commande avec un autre moyen de paiement. Vous trouverez des informations concernant les modes de paiement disponibles à cette adresse : https://www.megaport.fr/paiement.html`,
        },
        {
            question: "Quand vais-je recevoir ma commande ?",
            answer: `Vous recevez votre commande sous 5 jours ouvrés. Vous trouverez les détails concernant les conditions de livraison à cette adresse : https://www.megaport.fr/les-frais-de-port.html`,
        },
        {
            question: "Comment puis-je suivre ma commande ?",
            answer: `Vous recevez un mail automatique comprenant votre lien de suivi. Selon les fournisseurs de messagerie, il arrive que ce type de mail soit filtré dans les courriers indésirables.`,
        },
        {
            question: "Quelles sont mes garanties lors d’une commande Megaport ?",
            answer: `Vous disposez d'une garantie de 2 ans sur le matériel d'origine. Cela signifie que nous pouvons procéder à tout type de réparation sur votre PC pendant cette période. Le retour et la réparation sont gratuits. Nous vous fournissons un bon de retour dont les frais sont déjà payés en cas de renvoi matériel.
Lors de tout achat sur notre site, vous disposez de 14 jours de rétractation à partir de la livraison. Durant ce délai vous pouvez nous retourner votre produit sans nous fournir de raison, et en obtenir le remboursement intégral.`,
        },
        {
            question: "Ai-je le droit d’ouvrir mon PC ?",
            answer: `Oui, vous avez le droit d’ouvrir votre PC, ne serait-ce que pour le nettoyer régulièrement. Cela n’invalide pas votre garantie. La garantie est valide dans le cadre d’une utilisation normale.`,
        },
        {
            question: "Ai-je le droit de remplacer / ajouter des composants ?",
            answer: `Oui, vous pouvez ajouter ou remplacer des composants dans votre PC. Tous vos composants achetés chez Megaport restent garantis par Megaport. Nous n’assurons cependant le suivi que sur le matériel acheté chez Megaport. Tous les coûts relatifs au nouveau matériel sont à votre charge.`,
        },
        {
            question: "Ai-je le droit d’overclocker mon PC ?",
            answer: `La pratique de l’overclocking tient de votre responsabilité, à vos risques et périls. Les réglages incorrects effectués de votre part dans le Bios, ainsi que les dommages qu’ils peuvent causer ne sont pas pris en charge par la garantie.`,
        },
        {
            question: "Les erreurs dues à des logiciels sont-elles prises en charge par la garantie ?",
            answer: `Vous êtes responsable de votre utilisation du PC. Nous ne prenons pas en charge les erreurs système dues à l’installation de logiciels tiers. Dans la majorité des cas, une réinstallation propre de Windows, sans conserver les fichiers, pourra résoudre votre problème. Vous trouverez les détails ci dessous dans les questions relatives à Windows.`,
        },
        {
            question: "Que faire une fois que j’ai reçu mon PC ?",
            answer: `Vous êtes libre d’utiliser votre PC comme bon vous semble. Votre PC Megaport n’est restreint par aucun code, vous êtes l’administrateur et pouvez installer tous vos logiciels. Vous trouverez tous les détails concernant la mise en route de votre PC dans la notice fournie avec celui-ci.`,
        },


    ];

    // Sample FAQ data
    const faqData2 = [
        {
            question: "Mon PC ne démarre pas (les lumières et ventilateurs ne se lancent pas)",
            answer: `Le cable d’alimentation est-il bien branché ?
L’interrupteur à l’arrière du PC est-il bien sur la position “I” ?
Appuyez-vous bien sur le bouton de démarrage du PC ?
Essayez de brancher votre PC sur une autre prise.
Essayez de brancher votre PC avec un autre cable d’alimentation (celui de votre écran par exemple)`,
        },
        {
            question: "Je n’ai pas d’affichage, rien n'apparaît à l’écran",
            answer: `Votre écran est-il bien allumé ?
Avez-vous bien branché votre écran sur la bonne prise ? Veuillez svp vérifier le schéma de cablage fourni avec votre PC.
Avez-vous essayé de brancher votre PC sur un autre écran ? Une TV avec un cable HDMI ?`,
        },
        {
            question: "Mon PC démarre mais Windows ne se lance pas, ou je reçois un message d’erreur.",
            answer: `Votre commande contient-elle bien une licence Windows ? Vous pourrez le vérifier sur votre facture.
Si oui, veuillez svp ouvrir votre PC et vérifier que les cables des disques dur ne se sont pas déplacés pendant le transport.
Si vous en êtes en mesure, essayez de réinstaller Windows, sans conserver les fichiers, et sans n° de licence, à partir par exemple d’une clé USB bootable. Vous trouverez les détails ci dessous dans les questions relatives à Windows.`,
        },
        {
            question: "Windows est affiché, mais aucune fenêtre ne s’ouvre lorsque je clique sur mes logiciels",
            answer: `Vous avez très probablement branché les 2 cables vidéo de votre écran. Comme indiqué dans la notice de cablage fournie avec votre PC, vous ne devez brancher qu’un seul cable par écran.
Veuillez donc svp débrancher l’un des cables vidéo (débranchez de préférence le VGA bleu et ne branchez que le DVI blanc).- Le cable d’alimentation est-il bien branché ?`,
        },
        {
            question: "Je n’ai pas de son sur mon PC",
            answer: `Avez-vous bien branché un casque ou des haut parleurs sur l’une des prises casques du PC ? Nos tours PC ne contiennent pas de haut parleurs intégrés.
Le volume sonore de Windows est-il au dessus de zéro ?
Les pilotes des périphériques audio sont-ils bien à jour dans le Gestionnaire de périphériques ?
Si Windows ne reconnait pas votre périphérique sonore malgré des branchements corrects, nous vous prions de bien vouloir procéder comme suit :
Faites un clic droit sur le logo Windows tout en bas à gauche de votre écran.
Cliquez sur "Gestionnaire de périphériques"
Dans la fenêtre du Gestionnaire de périphériques, faites svp un double-clic sur "Contrôleurs audio, vidéo et jeu"
Dans les options qui s'ouvrent dessous, faites un clic droit sur "Realtek High Definition Audio"
Choisissez alors l'option "Désinstaller l'appareil"
Redémarrez votre PC
Retournez dans le gestionnaire de périphériques
Faites un clic droit sur DESKTOP
Cliquez sur "Rechercher les modifications sur le matériel"
Windows télécharge alors automatiquement le pilote conforme pour votre carte audio.`,
        },
        {
            question: "Mon PC ne se connecte pas par Wifi",
            answer: `Votre commande contient-elle bien une carte Wifi ? La carte Wifi n’est pas standard sur une tour PC. Vous pourrez le vérifier sur votre facture.
Avez-vous bien branché l’antenne Wifi fournie dans la boite du PC ?
La carte Wifi est-elle bien présente dans le Gestionnaire de périphériques de Windows ?
Les pilotes sont-ils bien à jour ?
Avez-vous réinitialisé votre modem/routeur Internet ?
Avez-vous contacté votre FAI ? Certains FAI imposent des réglages incompatibles avec ce type de cartes`,
        },
        {
            question: "Les ventilateurs du boitier de mon PC ne tournent pas",
            answer: `Certains PC sont munis de ventilateurs RGB réglables par un bouton situé sur le boitier. Sur la plupart des modèles il s'agit du petit bouton rond situé à coté du bouton de mise en marche du PC.`,
        },
        {
            question: "Mon jeu est lent / ne démarre pas / subit du lag",
            answer: `Vous êtes-vous assuré que votre PC est assez puissant ? Vous pouvez vérifier les configurations recommandées sur le site du développeur du jeu.
Avez-vous modifié les paramètres graphiques ? Baisser la résolution, ainsi que les paramètres graphiques donne en général un gros gain de performances
Le problème survient-il dans tous vos jeux ? Si le problème ne survient que dans un jeu, il est probable que le jeu en question soit mal installé. Veuillez svp le désinstaller, redémarrer votre PC, puis réinstaller.
Le problème survient-il dans un jeu en ligne (ex: Fortnite) ? Les jeux en ligne dépendent de nombreux paramètres externes au PC lui-même (serveurs, connexion, encombrement et qualité de votre ligne, etc…). Le problème persiste-t-il sur un jeu ne nécessitant pas de connexion (ex: Witcher 3) ?
Avez-vous mis à jour vos pilotes graphiques ? Vous pouvez télécharger Nvidia GeForce Experience pour votre carte Nvidia, ou bien AMD Adrenalin pour votre carte graphique AMD.`,
        },

    ];

    // Sample FAQ data
    const faqData3 = [
        {
            question: "Comment créer une clé USB de réinstallation de Windows ?",
            answer: `Vous pourrez télécharger le logiciel Media Creation Tool de Microsoft à cette adresse : 

 Pour WINDOWS 10 : https://go.microsoft.com/fwlink/?LinkId=691209 
 Pour WINDOWS 11 : https://go.microsoft.com/fwlink/?linkid=2156295
Une fois Media Creation Tool téléchargé, éxécutez-le. (NE COPIEZ PAS SIMPLEMENT LE LOGICIEL SUR VOTRE CLE USB, cela ne fonctionnera pas !)

Lorsque la fenêtre du logiciel s'affiche, cliquez sur le bouton central "Accepter"

Sélectionnez "Créer un support d’installation" puis cliquez sur "Suivant".

Sélectionnez la langue de votre choix et votre version de Windows.

Sélectionnez "Disque mémoire flash USB" puis cliquez sur "Suivant". 

Sélectionnez votre clé USB dans la liste des lecteurs puis cliquez sur "Suivant". Media Creation Tool formate et prépare alors votre clé USB.

Patientez pendant la préparation des fichiers.

Une fois la mention "Votre disque mémoire flash USB est prêt" affichée, cliquez sur "Terminer". Votre clé USB Windows est prête !`,
        },
        {
            question: "Comment réinstaller Windows à partir d'une clé USB ?",
            answer: `Vous pouvez réinitialiser Windows à partir d'un support externe de réinitialisation (par ex. : une clé USB préparée par Media Creation Tool comme décrit ci-dessus)

Branchez votre clé USB sur votre PC

Démarrez votre PC. Si le PC ne se lance pas sur la clé USB, tapotez au démarrage sur la touche correspondant au Boot Menu de votre Bios (généralement F8, F11 ou F12 selon les modèles de cartes mères), puis sélectionnez votre clé USB.

Le menu d'installation de Windows va alors apparaitre.

Choisissez la langue et les options régionales de votre choix, puis cliquez sur "Suivant"

Cliquez sur "Installer maintenant"

A l'écran "Activer Windows", cliquez sur "Je n'ai pas de clé de produit" (Windows s'activera alors automatiquement dès la 1ere mise en route), puis cliquez sur "Suivant"

Choisissez ensuite la version de Windows installée sur votre PC (la plupart de nos PC sont activés avec Windows Home, sauf si vous avez choisi une autre version), puis cliquez sur "Suivant"

Acceptez les termes du contrat, puis cliquez sur "Suivant"

A l'écran "Quel type d'installation voulez-vous effectuer", cliquez sur "Personnalisé"

A l'écran "Où souhaitez-vous installer Windows", nous vous conseillons de supprimer les partitions de votre disque principal, puis de laisser Windows en créer de nouvelles, voici comment :

Cliquez sur chaque partition appartenant au "Lecteur 0", puis cliquez sur "Supprimez" et validez l'action avec le bouton"OK"

Une fois tous les partition du "Lecteur 0" supprimées, sélectionnez "Lecteur 0 Espace non alloué", puis cliquez sur "Nouveau", puis "Appliquer" et validez l'action avec le bouton "OK"

Sélectionnez la nouvelle partition du "Lecteur 0" dont le type est "Principal", puis cliquez sur "Suivant"

Patientez pendant la réinstallation, puis laissez-vous guider pour la configuration de base de Windows. Une fois l'installation terminée vous pouvez retirer votre clé USB.

Vous pourrez à nouveau utiliser votre PC dès que vous aurez à nouveau accès à Windows. Nous vous conseillons de laisser Windows procéder à toutes les mises à jour système avant de vous lancer dans vos installations de logiciels.`,
        }

    ];




    // FAQ Item component
    const FAQItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="faq-item mb-3">
                <div
                    className="faq-question d-flex justify-content-between align-items-center"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ cursor: "pointer" }}
                >
                    <h5 className="m-0 bold">{question}</h5>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                </div>
                {isOpen && <p className="faq-answer mt-2 gray">{answer}</p>}
                <hr />
            </div>
        );
    };


    // Main FAQ component
    const FAQ1 = () => {
        return (
            <div className="container faq-container mt-5">
                <h2 className="mb-4">Avant votre commande                </h2>
                {faqData1.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        );
    };

    // Main FAQ component
    const FAQ2 = () => {
        return (
            <div className="container faq-container mt-5">
                {faqData2.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        );
    };

    // Main FAQ component
    const FAQ3 = () => {
        return (
            <div className="container faq-container mt-5">
                {faqData3.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        );
    };





    return (
        <>
            <div className='Footer18 '>

                <div className=' container'>
                    <div className='heading'>
                        <h1>FAQ : Les questions fréquemment posées</h1>
                    </div>
                </div>


                <div className='container'>
                    <div className='row main '>

                        <div className='col-lg-6 col-sm-12'>

                            <div className='video-container'>

                                <iframe width="100%" height="413" src="https://www.youtube.com/embed/d0-UsEHbgO4" title="Nouveau PC gamer Megaport - Unboxing PC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                            </div>

                        </div>

                        <div className='col-lg-6 col-sm-12'>

                            <div className='video-container'>

                                <iframe width="100%" height="413" src="https://www.youtube.com/embed/klKyxN9zTCI" title="Votre PC Megaport a un problème ? Voici comment vous pouvez le réparer !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                            </div>

                        </div>

                    </div>

                </div>



                <div className='para'>

                    <div className='container'>
                        <p>Vous vous posez des questions concernant nos produits ? Vous avez besoin de renseignements concernant nos conditions de vente et de garantie ? Vous avez reçu votre commande et avez besoin d'assistance pour la mise en marche de votre PC ?</p>

                        <p>Pas de souci ! Nous avons ici rassemblé pour vous les questions les plus fréquemment posées concernant notre boutique, ainsi que des solutions faciles pouvant résoudre de nombreux problèmes sur votre PC Megaport.

                        </p>

                    </div>


                </div>






                <div className="container px-5 ">
                    <FAQ1 />
                </div>



                <div className='para'>

                    <div className='container'>

                        <h1>Problèmes techniques sur mon PC</h1>

                        <p>Voici quelques points à vérifier et des manipulations faciles à effectuer pour régler la plupart des problèmes courants.</p>

                        <p>Si aucun de ces points ne résout votre problème, veuillez svp nous contacter. Envoyez nous une description précise du problème, ainsi que votre n° de commande à support@megaport.fr
                        </p>

                        <p>Avant toute vérification matérielle, nous vous conseillons de poser votre PC à plat, vitre vers le haut, afin d'eviter toute chute de composant.

                        </p>


                    </div>
                </div>




                <div className="container px-5 ">
                    <FAQ2 />
                </div>



                <div className='para'>

                    <div className='container'>

                        <h1>Réinstallation de Windows</h1>

                        <p>Si votre PC subit un problème, cela ne signifie pas forcément qu'il subit une avarie matérielle. De nombreux problèmes sont dus à des mises à jour mal installées, ou des conflits de pilotes suite à des installations de logiciels tiers. Réinstaller Windows permet dans la grosse majorité des cas de résoudre les problèmes logiciels dans votre système.

                        </p>

                        <p> <span className='text-danger'> ATTENTION ! </span> Pensez toujours à sauvegarder vos fichiers personnels importants sur un support de sauvegarde externe avant de vous lancer dans ces procédures.</p>

                        <p>Si aucun de ces points ne résout votre problème, veuillez svp nous contacter. Envoyez nous une description précise du problème, ainsi que votre n° de commande à <a href=""> support@megaport.fr </a>
                        </p>


                    </div>


                </div>






                <div className="container px-5 ">
                    <FAQ3 />
                </div>



            </div>

        </>
    )
}
