import React, { useState } from 'react';
import "./Footer11.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer11() {

  const imgURL = ASSET_PATHS.IMG_URL;




  return (
    <>

      <div className='Footer11'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>


            <h4> Droit de révocation pour le consommateur            </h4>

            <p>(un consommateur est une personne physique, qui effectue une transaction dans un but qui n'est ni commercial, ni dans le cadre de son activité professionnelle indépendante).</p>


            <h4>Droit de rétractation</h4>


            <h5>Droit de rétractation            </h5>
            <p>Vous disposez d'un droit de rétractation de 14 jours pour révoquer le contrat sans avoir à le justifier.
              Le délai de rétractation est de 2 semaines à partir du jour,
            </p>

            <p>- après la date à laquelle vous, ou un tiers désigné par vous, autre que le transporteur, prenez ou prend physiquement possession des articles ou, dans le cas d'une commande unique portant sur un ou plusieurs articles et si ce ou ces derniers est ou sont livrés uniformément;</p>

            <p>- après la date à laquelle vous, ou un tiers désigné par vous, autre que le transporteur, prenez ou prend physiquement possession du dernier article ou, dans le cas d'une commande unique portant sur plusieurs articles et si ces derniers sont livrés séparément;</p>

            <p>Pour exercer votre droit de révocation, vous devez nous (Megaport GmbH, Heiterblickstraße 33, 04347 Leipzig, Numéro de téléphone: 02 49 88 06 17, E-Mail: support@megaport.fr) informer de votre décision de rétractation du contrat concerné par une déclaration non équivoque (par ex. lettre envoyée par poste, téléfax ou email). Vous pouvez utiliser le modèle de formulaire de révocation joint, néanmoins ce n'est pas une obligation.
            </p>

            <p>Pour la préservation du délai de révocation suffit si la notification relative à l'exercice du droit de rétractation est transmise par le consommateur avant l'expiration dudit délai.
            </p>

            <p><b>Conséquences de la révocation</b></p>


            <p>
              Si vous révoquez le présent contrat, nous vous rembourserons tous les paiements que nous avons encaissés, y compris les frais de livraison (à l'exception des frais supplémentaires découlant d'un autre mode de livraison que la livraison standard plus économique que nous proposons) sans délai au plus tard dans un délai de 14 jours à compter du jour où nous avons reçu la notification relative à la révocation du présent contrat. Pour le remboursement, nous utilisons le même moyen de paiement que vous avez utilisé pour votre transaction sauf stipulation expresse contraire convenue avec vous ; en aucun cas, nous ne facturerons pas de suppléments pour le remboursement des sommes.
            </p>

            <p>Nous pouvons refuser le remboursement jusqu'à ce que nous ayons récupéré les articles ou jusqu'à ce que vous ayez apporté la preuve que vous avez renvoyé les articles en fonction du délai le plus proche.</p>

            <p>Vous devez nous renvoyer ou céder les articles sans délai et en tous les cas au plus tard dans un délai de 2 semaines à partir du jour où vous nous avez informés de la révocation du présent contrat. Le délai est respecté si vous renvoyez les articles avant l'expiration du délai de 2 semaines.</p>


            <p>Les coûts de retour des marchandises sont à notre charge.
            </p>

            <p>Votre responsabilité n'est engagée qu'à l'égard de la dépréciation de biens résultant de manipulations autres que celles nécessaires pour s'assurer de la qualité, de la nature et du bon fonctionnement de ces biens.</p>

            <p><b> Motifs d'exclusion ou d'extinction</b></p>

            <p>Le droit de révocation n'existe pas pour les contrats</p>

            <ul>
              <li>de livraison des marchandises qui ne sont pas produites au préalable et pour lesquelles un choix ou une sélection par le consommateur est déterminant pour leur production ou qui sont clairement adaptées aux besoins spécifiques du consommateur;</li>
              <li>de livraison des marchandises qui peuvent rapidement s'abîmer ou dont la date de péremption serait rapidement dépassée;
              </li>
              <li>de livraison de boisons alcoolisées dont le prix a été convenu lors de la conclusion du contrat, mais qui peuvent être livrées au plus tôt 30 jours après la conclusion du contrat et dont la valeur actuelle dépend des variations du marché sur lesquelles l'entrepreneur n'a aucune emprise;
              </li>
              <li>de livraison des journaux, périodiques ou magazines excepté les contrats d'abonnement.
              </li>
            </ul>




            <div>
              <hr />
            </div>



            <h5>Modèle de formulaire de révocation</h5>
            <p>(si vous souhaitez révoquer le contrat, veuillez remplir ce formulaire et nous le renvoyer.)
            </p>

            <p> -À Megaport GmbH, Heiterblickstraße 33, 04347 Leipzig, Indirizzo e-mail: support@megaport.fr :
            </p>

            <p>- Par la présente, je/nous révoque(ons) le contrat que j'ai / nous avons conclu pour l'achat des marchandises c-après (*)/
              La fourniture de la prestation suivante(*)</p>

            <p>- Commandé le (*)/ Reçu le (*)
            </p>

            <p>- Nom du/des consommateur(s)
            </p>
            <p>- Adresse du/des consommateur(s)
            </p>
            <p>- Signature du/des consommateur(s) (seulement pour un message sur papier)
            </p>
            <p>- Date
            </p>

            <p>(*) Barrer les mentions inutiles
            </p>












          </div>


        </div>





      </div>



    </>
  );
}
