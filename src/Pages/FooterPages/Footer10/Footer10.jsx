import React, { useState } from 'react';
import "./Footer10.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer10() {

  const imgURL = ASSET_PATHS.IMG_URL;




  return (
    <>

      <div className='Footer10'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>


            <h4> Conditions générales de vente et informations clients
            </h4>


            <h5>I. Conditions générales de vente</h5>

            <h5>§ 1 Dispositions fondamentales</h5>

            <p>(1) Les Conditions générales suivantes s'appliquent pour tous les contrats que vous concluez avec nous en tant que vendeur (Megaport GmbH) sur la page Internet www.megaport.fr. Sauf stipulation contraire, nous contestons l’intégration de vos propres conditions éventuelles.</p>

            <p>
              (2) Un consommateur au sens des présents règlements est toute personne physique, qui effectue une transaction dans un but qui n’est dans le cadre ni de son activité commerciale, ni de son activité professionnelle indépendante. Un entrepreneur est toute personne physique ou juridique ou une société de personnes ayant la capacité juridique qui agit dans l’exercice de son activité commerciale ou professionnelle indépendante.</p>


            <h5>§ 2 Aboutissement du contrat</h5>

            <p>(1) L'objet du contrat est la vente de marchandises .
            </p>

            <p>Nos offres en ligne sont sans engagement et ne sont pas une offre ferme en vue de la conclusion d'un contrat.
            </p>

            <p>(2)

              Vous pouvez faire une offre d'achat ferme (commande) via le système de « panier d'achat en ligne ».</p>


            <p>Les marchandises  que vous souhaitez acheter sont alors placées dans le « panier ». Le bouton correspondant dans la barre de navigation vous permet d'accéder au « panier » et d'y apporter des modifications à tout moment. Après avoir cliqué sur le bouton « Caisse » ou « Poursuivre la commande » (ou désignation similaire) et saisi les données personnelles ainsi que les conditions de paiement et d'envoi, les données de la commande s'affichent finalement sous forme d'aperçu de la commande.</p>


            <p>Avant d’envoyer la commande, vous avez la possibilité d’y vérifier à nouveau les détails de la commande, de les modifier (également via la fonction « Retour » du navigateur Internet) ou d’annuler la commande.En envoyant votre commande via le bouton correspondant (« commande avec obligation de paiement », « acheter » / « acheter maintenant », « commande payante » ou désignation similaire), vous nous faites parvenir une offre ferme.</p>


            <p>Vous recevez d’abord un email automatique concernant la réception de votre commande qui ne conduit pas encore à la conclusion du contrat.
            </p>

            <p>
              (3) La concrétisation du contrat s'effectue alors par une confirmation personnelle du vendeur. Elle peut également avoir lieu dans une déclaration implicite, comme la notification du traitement ou de l'expédition de la commande.
              Si vous ne recevez pas de confirmation personnelle dans un délai de 7 jours ouvrables, vous n'êtes plus lié par cette offre. Le cas échéant, les prestations versées seront dans ce cas immédiatement remboursées
            </p>

            <p>(4) Les questions relatives à l’établissement de l’offre que vous nous avez transmises sont sans engagement pour vous. Nous vous soumettons à ce propos une offre ferme sous forme de texte (par ex. par email) que vous pouvez accepter dans un délai de 5 jours.</p>

            <p>(5) Le déroulement de la commande et la transmission de toutes les informations nécessaires en rapport avec la conclusion du contrat s’effectue par email et est en partie automatisé. Vous devez donc vous assurez que l’adresse email que vous nous avez transmise est correcte, la réception des emails est garantie techniquement et qu’elle n’est pas bloquée notamment par un filtre anti-spam.</p>

            <h5>§ 3 Conception personnalisée des marchandises</h5>

            <p>(1) Pour la conception individuelle de la marchandise, vous devrez nous transmettre, au plus tard au moment de la conclusion du contrat, les informations, textes ou fichiers adaptés via le système de commande en ligne ou par courrier électronique. Nos spécifications éventuelles quant aux formats de fichiers doivent être prises en compte.</p>


            <p>
              (2) Vous vous engagez à ne transmettre aucunes données dont le contenu peut violer les droits de tiers (en particulier les droits d'auteur, les droits de noms, de marques) ou enfreindre des lois existantes. Vous nous libérez expressément de tous les droits de tiers revendiqués dans ce contexte. Cela concerne également les frais de la représentation juridique requise dans ce contexte.
            </p>


            <p>(3) Nous n'effectuons aucune vérification de l'exactitude du contenu des données transmises et n'assumons aucune responsabilité pour les erreurs en découlant.
            </p>

            <h5>§ 4 Droit de rétention, réserve de propriété</h5>
            <p>(1) Vous ne pouvez exercer un droit de rétention que si les prétentions résultent de la même relation contractuelle.
            </p>
            <p>(2) La marchandise reste notre propriété jusqu'au paiement intégral du prix de vente.
            </p>
            <p>(3) Si vous êtes un entrepreneur s'applique ce qui suit:
            </p>

            <p>a) Nous nous réservons le droit de propriété de la marchandise jusqu'à l'encaissement de toutes les créances liées à la relation commerciale en cours. Il est interdit de gager les marchandises ou d'en transférer la propriété à titre de sûreté avant le transfert de propriété de la marchandise sous réserve.</p>

            <p>b) Vous êtes autorisé à revendre la marchandise dans la marche ordinaire et régulière des affaires. Dans ce cas, vous cédez d'ores et déjà toutes les créances qui vous reviennent de la revente, à hauteur du montant de la facture. Nous acceptons la cession. Vous restez en droit de procéder au recouvrement de la créance cédée. Si vous ne répondez pas dans les règles à vos obligations de paiement, nous nous réservons le droit de procéder nous-mêmes au recouvrement de la créance.</p>

            <p>c) En cas d'association ou de combinaison de la marchandise sous réserve à d'autres marchandises, nous acquérons la copropriété sur le nouvel objet, à concurrence de la valeur de facturation de la marchandise sous réserve par rapport à valeur de facturation des autres objets transformés au moment de la transformation.</p>

            <p>d) Nous nous engageons à débloquer les garanties nous revenant sur votre demande, dans la mesure où la valeur réalisable de nos sûretés dépasse de plus de 10 % la créance à garantir. Le choix des garanties à libérer nous incombe.</p>

            <h5>§ 5 Garantie</h5>

            <p>(1) Les droits de garantie pour les défauts s'appliquent.
            </p>

            <p>(2) En tant que consommateur, vous êtes prié de vérifier sans délai l’exhaustivité, les vices apparents et les dommages dus au transport de la marchandise lors de sa livraison et de faire part des réclamations à notre entreprise et à l’expéditeur le plus rapidement possible. Si vous n’obtempérez pas, cela n’a aucun effet sur vos droits légaux de garantie.</p>

            <p>
              (3) Dans la mesure où une caractéristique de la marchandise ne correspond pas aux exigences objectives, l’écart n'est considéré comme convenu que si nous vous avons informé de cet écart avant la soumission de déclaration de contrat et si l'écart a été convenu expressément et séparément entre les parties contractantes.</p>

            <p>(4)

              Dans le cas où vous êtes entrepreneur, les dispositions suivantes s'appliquent en dérogation aux règles de garantie susmentionnées :</p>


            <p>a) Seules nos propres indications et la désignation du produit par le fabricant sont considérées comme convenues comme étant les caractéristiques de la marchandise, à l'exclusion de toute autre publicité, de tout éloge public et de toute déclaration du fabricant.</p>

            <p>b) En cas de défauts, nous garantissons, à notre choix, soit la réparation, soit la livraison ultérieure. Si la correction du défaut échoue, vous avez le choix entre demander une réduction du prix ou résilier le contrat. La rectification des défauts est considérée comme avoir échoué après une deuxième tentative infructueuse, à moins que quelque chose d'autre ne résulte, notamment du type de marchandises ou du défaut ou d'autres circonstances. En cas de réparation, nous n'avons pas à supporter les frais supplémentaires résultant de l'expédition de la marchandise à un endroit autre que le lieu d'exécution, à condition que l'expédition ne corresponde pas à l'utilisation prévue de la marchandise.</p>

            <p>c) La période de garantie est d'un an à compter de la date de livraison des marchandises. Le raccourcissement du délai ne s'applique pas :
            </p>

            <p>
              - les dommages qui nous sont imputables du fait d'atteintes à la vie, au corps ou à la santé et d'autres dommages causés intentionnellement ou par négligence grave ;
              - dans la mesure où nous avons frauduleusement dissimulé le défaut ou donné une garantie sur la qualité de l'article ;
              - dans le cas de choses qui ont été utilisées pour une construction conformément à leur mode d'utilisation habituel et qui ont causé la défectuosité de celle-ci ;
              - en cas de droits de recours légaux que vous avez contre nous en rapport avec des droits découlant de la constatation d'un vice.</p>

            <h5>§ 6 Choix juridique, lieu d'exécution, tribunal compétent
            </h5>

            <p>
              (1) Le droit allemand fait foi. Pour les consommateurs, ce choix juridique ne s’applique que s'il ne porte pas atteinte à la protection garantie par les lois impératives du pays dans lequel le consommateur réside de façon régulière (principe de faveur).
            </p>

            <p>(2) Le lieu d'exécution pour toutes les prestations issues des relations commerciales existantes avec nous et le tribunal compétent sont celui de notre siège, si vous n’êtes pas un consommateur, mais un commerçant, une personne juridique de droit public ou un établissement public ayant un budget spécial. Ceci est également valable si vous n’avez pas de lieu de juridiction général en Allemagne ou dans l’UE ou si le domicile ou le lieu de résidence habituel n’est pas connu au moment de l'introduction du recours. Le droit de saisir aussi le tribunal d’une autre juridiction légale reste intact.</p>

            <p>(3) L'application des dispositions de la Convention de Vienne est expressément exclue.
            </p>

            <div>
              <hr />
            </div>

            <h5>II. Informations clients
            </h5>

            <h5>1. Identité du vendeur
            </h5>

            <p>
              Megaport GmbH <br />
              Heiterblickstraße 33 <br />
              04347 Leipzig <br />
              Allemagne <br />
              Téléphone: 0341 22389050 <br />
              E-Mail: support@megaport.fr <br />
              <b> Service des réclamations de la société: </b><br />
              support@megaport.de
            </p>

            <h5>Mode alternatif de règlement des conflits:
            </h5>

            <p>
              La Commission européenne fournit une plateforme pour la résolution extrajudiciaire des litiges qui est accessible sur le site <a href=""> https://ec.europa.eu/odr.</a>
            </p>
            <p>
              Nous ne sommes pas disposés à prendre part à des procédures de règlement de litiges devant des organismes de médiation pour le consommateur.
            </p>


            <h5>2. Informations sur l’aboutissement du contrat
            </h5>

            <p>Les étapes techniques associées à la conclusion du contrat, la conclusion du contrat elle-même et les options de correction sont exécutés conformément à la réglementation 'Conclusion du contrat' dans nos termes commerciaux standards (partie I.).</p>

            <h5>3. Langue du contrat, enregistrement des textes du contrat
            </h5>

            <p>3.1 La langue du contrat est le français.
            </p>

            <p>3.2 Nous n’enregistrons pas le texte intégral du contrat. Avant l’envoi de la commande via la ligne - achats système de panier les données du contrat peuvent être imprimées ou sécurisées électroniquement par la fonction d’impression du navigateur. Dès la réception de la commande, nous vous envoyons de nouveau par email les données de la commande, les informations légales prescrites pour les contrats de vente à distance et les Conditions générales de vente.</p>

            <p>3.3 Pour toutes les demandes d’offres transmises sans passer par le système en ligne de panier, vous recevrez toutes les données contractuelles dans le cadre d’une offre ferme rédigée par écrit et transmise, par exemple, par e-mail. Vous pourrez l’imprimer ou l’enregistrer par voie électronique.</p>


            <h5>4. Codes de conduite</h5>

            <p>
              4.1 Nous sommes volontairement soumis aux critères de qualité Käufersiegel de Händlerbund Management AG, qui peuvent être trouvés à cette adresse web <a href=""> https://www.haendlerbund.de/de/downloads/kaeufersiegel/kaeufersiegel-zertifizierungskriterien.pdf.</a></p>

            <p>4.2 Nous sommes soumis aux critères de qualité de Trusted Shops GmbH, à consulter sur le lien suivant: <br />

              <a href="">http://www.trustedshops.com/tsdocument/TS_QUALITY_CRITERIA_de.pdf.</a>

            </p>

<h5>5. Caractéristiques essentielles de la marchandise ou de la prestation
</h5>

<p>Les caractéristiques essentielles de la marchandise et/ou de la prestation de service sont mentionnées dans l’offre respective.
</p>


<h5>6. Prix et modalités de paiement
</h5>

<p>
6.1 Les prix indiqués dans les offres respectives ainsi que les frais d’envoi constituent les prix globaux. Ils contiennent toutes les composantes de prix, y compris toutes les taxes exigibles.</p>

<p>6.2 Les frais de livraison nécessaires ne sont pas inclus dans le prix d'achat. Vous pouvez prendre connaissance des frais de livraison en cliquant sur un bouton désigné à cet effet et situé sur notre site Internet ou dans l’offre respective. Ils seront affichés séparément au cours de la commande et sont à votre charge, à moins qu’il ne soit convenu d’une livraison gratuite.</p>

<p>6.3 Vous devez endosser les frais échus du transfert d'argent également dans les cas où la livraison est effectuée dans un État membre de l'UE tandis que le paiement a été initié en dehors de l'Union Européenne.</p>

<p>6.4 Les options de paiement disponiblessont indiquées en cliquant sur un bouton désigné à cet effet et situé sur notre site Internet ou dans l’offre respective.</p>

<p>6.5 Sauf indications contraires sur les modes de paiements, les créances issues du contrat conclu sont exigibles immédiatement.
</p>


<h5>7. Conditions de livraison
</h5>

<p>
7.1 Les conditions de livraison, la date de livraison et les éventuelles restrictions en vigueur lors de la livraison sont indiquées en cliquant sur un bouton désigné à cet effet et situé sur notre site Internet ou dans l’offre respective.
</p>

<p>7.2 Si vous êtes un consommateur, il est stipulé par la loi que le risque de la disparition fortuite et de la détérioration fortuite pendant l’envoi de la marchandise vendue vous est transféré au moment où la marchandise vous est remise, peu importe que l’envoi soit assuré ou non. Cela ne s’applique pas si vous avez mandaté de manière autonome une entreprise de transport que nous avons nommée ou une personne désignée pour l’exécution de l’envoi.</p>



<p>Si vous êtes un entrepreneur, la livraison et l’envoi sont effectués à votre risque.
</p>


<h5>8. Droit de garantie pour les défauts
</h5>

<p>La responsabilité pour vices dépend de la disposition 'Garantie' dans nos Conditions Générales de Vente (Partie I). 
</p>


<p>Ces CGV et les informations clients ont été établies par des juristes spécialisés dans le droit de la technologie de l’information du Händlerbund (association de commerçants en ligne) et leur conformité juridique est contrôlée en permanence. La Händlerbund Management AG garantie la sécurité juridique des textes et se porte garante en cas de mises en demeure. Vous trouverez de plus amples informations sur la page Internet <a href=""> https://www.haendlerbund.de/de/leistungen/rechtssicherheit/agb-service. </a></p>


<p>Dernière mise à jour: 29.11.2022
</p>











          </div>


        </div>





      </div>



    </>
  );
}
