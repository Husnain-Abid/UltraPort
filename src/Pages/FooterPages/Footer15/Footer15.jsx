import React, { useState } from 'react';
import "./Footer15.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer15() {

  const imgURL = ASSET_PATHS.IMG_URL;



  return (
    <>

      <div className='Footer15'>


        <div className='container '>



          <div className='content w-100 d-flex py-5 flex-column'>

            <h5>Remarque sur l'élimination des piles</h5>

            <p>
              Dans le cadre de la vente de batteries ou de la livraison d'appareils contenant des batteries, nous sommes tenus d'attirer votre attention sur les points suivants :
            </p>


            <p>

              La loi vous oblige, en tant qu’utilisateur final, à restituer les batteries ou piles usagées. Vous pouvez retourner gratuitement à notre entrepôt d'expédition (adresse d'expédition) les batteries usagées que nous vendons ou avons vendues en tant que batteries neuves. Les symboles figurant sur les batteries ont la signification suivante :
            </p>



            <p>Le symbole de la poubelle barrée signifie que la batterie ne doit pas être jetée avec les ordures ménagères.

            </p>

            <p>
              Pb = la pile contient plus de 0,004 de masse de plomb <br />
              Cd = la pile contient plus de 0,002 de masse de cadmium <br />
              Hg = la pile contient plus de 0,0005 de masse de mercure.


            </p>


            <p>Merci de bien prendre en compte les informations ci-dessus.
            </p>


          </div>


        </div>





      </div>



    </>
  );
}
