import React, { useState } from 'react';
import "./Footer12.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer12() {

  const imgURL = ASSET_PATHS.IMG_URL;



  return (
    <>

      <div className='Footer12'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>


            <h5>Mentions légales            </h5>

            <h6>  Indicateur légal d'éditeur </h6>
            <h6>Megaport GmbH</h6>

            <h6>représenté par le directeur : Vladislav Taranov
            </h6>

            <h6>Heiterblickstr. 33</h6>

            <h6> 04347 Leipzig</h6>

            <h6>Allemagne</h6>

            <h6>Téléphone: 02 49 88 06 17
            </h6>

            <h6>E-Mail: support@megaport.de
            </h6>

            <h6>N° d'identification TVA: FR67803555358
            </h6>

            <h6>Inscrit au registre de commerce du tribunal de commerce Leipzig
            </h6>

            <h6>Numéro de registre de commerce HRB 27825</h6>


            <h6 className='mt-3'> Service des réclamations de la société:</h6>

            <p>support@megaport.fr</p>


            <p>
              La Commission européenne fournit une plateforme pour la résolution extrajudiciaire des litiges qui est accessible sur le site <a href=""> http://ec.europa.eu/odr. </a></p>


<h6>Nous sommes membres de l’initiative "FairCommerce" depuis 13.01.2016.
</h6>

<p>Pour plus d’informations, consultez: www.faircommerce.de</p>

<h6> Hébergeur :</h6>


<p>Hetzner Online GmbH
</p>

<p>Industriestr. 25</p>

<p>91710 Gunzenhausen, Deutschland</p>

<p>Tel.: +49 (0)9831 505-0*</p>


          </div>


        </div>





      </div>



    </>
  );
}
