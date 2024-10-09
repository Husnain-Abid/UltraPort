import React, { useState } from 'react'
import "./Footer18.css";
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer18() {

    const imgURL = ASSET_PATHS.IMG_URL;


    // Sample FAQ data
    const faqData = [
        {
            question: "",
            answer: ``,
        },
        {
            question: "",
            answer: ``,
        },
        {
            question: "",
            answer: ``,
        },

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
    const FAQ = () => {
        return (
            <div className="container faq-container mt-5">
                <h2 className="green mb-4">FAQ</h2>
                {faqData.map((faq, index) => (
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
                    <FAQ />
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
                    <FAQ />
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









            </div>

        </>
    )
}
