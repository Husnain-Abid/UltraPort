import React, { useState } from 'react';
import "./Footer14.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer14() {

  const imgURL = ASSET_PATHS.IMG_URL;



  return (
    <>

      <div className='Footer14'>

          <div className='heading w-100 d-flex justify-content-center align-items-center py-5 '>

            <h1>Formulaire d'assistance technique</h1>


          </div>

        <div className='container '>



          <div className='content w-100 d-flex py-5 flex-column'>

            <h1>Veuillez utiliser notre formulaire d'assistance pour les retours de toutes sortes.</h1>

            <p>Cela accélérera le traitement de votre demande. Si vous annulez votre commande, rien ne vous oblige à nous fournir ce formulaire pour exercer votre droit de rétractation.
            </p>

            <p>Vous pouvez remplir le formulaire directement dans Adobe Acrobat Reader, l'imprimer et le joindre à votre envoi.
            </p>

            <a href="">Télécharger votre formulaire d'assistance</a>


            <p>Ce fichier est au format Adobe Acrobat Reader.
            </p>

            <p>
              Si vous n'avez pas installé ce programme sur votre ordinateur, vous pouvez le télécharger gratuitement : <a href=""> https://get.adobe.com/reader/ </a>

            </p>



          </div>


        </div>





      </div>



    </>
  );
}
