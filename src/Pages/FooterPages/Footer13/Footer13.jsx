import React, { useState } from 'react';
import "./Footer13.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer13() {

  const imgURL = ASSET_PATHS.IMG_URL;



  return (
    <>

      <div className='Footer13'>

        <div className='container '>

          <div className='content w-100 d-flex py-5 flex-column'>

            <h4>Déclaration de protection des données</h4>

            <p>Sauf indication contraire fournie ci-dessous, la mise à disposition de vos données à caractère personnel n’est ni prescrite par la loi ou le contrat, ni nécessaire pour la conclusion d’un contrat. Vous n’êtes pas obligé(e) de mettre vos données à disposition. Un refus de votre part n’aura aucune conséquence. Cela s’applique uniquement dans la mesure où aucune indication contraire n’est fournie pour les opérations de traitement ci-dessous.
            </p>

            <p>Les «données à caractère personnel» correspondent à toutes les informations se rapportant à une personne physique identifiée ou identifiable.
            </p>


            <h5>Fichiers journaux du serveur
            </h5>

            <p>Vous pouvez visiter notre site sans fournir des informations personnelles.
            </p>

            <p>À chaque accès à notre site Internet, votre navigateur Internet nous transmet, à nous ou à notre hébergeur web / prestataire de service informatique, des données d'utilisation qui sont enregistrées dans des données de protocoles (ce que l’on appelle des fichiers journaux du serveur). On retrouve parmi ses données enregistrées par ex. le nom de la page consultée, la date et l’heure de la consultation, l’adresse IP, le volume de données transférées et le fournisseur de consultation. Le traitement se fait sur la base de l’art. 6 alinéa 1 lettre f RGPD au titre d’un intérêt légitime quant à la garantie d’une exploitation sans faille de notre site Internet et de l’amélioration de notre offre.
            </p>

            <h4>Contact</h4>


            <h5>Responsable/Commissaire à la protection des données</h5>

            <p>N’hésitez pas à nous contacter. Les coordonnées du responsable du traitement des données se trouvent dans nos mentions légales.
            </p>

            <p>Contactez directement nos commissaires à la protection des données à: Daniel Baumgärtner
            </p>

            <p>info@datenschuetzer-leipzig.de</p>

            <h5>Prise de contact spontanée du client par e-mail
            </h5>

            <p>Si vous nous contactez par e-mail de votre propre initiative, nous ne collecterons vos données à caractère personnel (nom, adresse e-mail, texte du message) que dans la mesure où vous les fournissez. Le traitement des données sert à traiter et à répondre à votre demande de contact.
            </p>

            <p>
              Si la finalité du contact est d'effectuer des démarches précontractuelles (par exemple, conseils en cas d'intérêt d'achat, préparation d'offres) ou s'il s'agit d'un contrat déjà conclu entre vous et nous, ce traitement de données est basé sur l'art. 6 alinéa 1 lettre b RGPD.
            </p>

            <p>
              Si le contact est pris pour d'autres raisons, ce traitement de données est effectué sur la base de l'art. 6 alinéa 1 lettre f RGPD, dans notre intérêt très largement justifié de traiter et de répondre à votre demande. Dans ce cas, pour des raisons tenant à votre situation particulière, vous avez le droit de vous opposer à tout moment aux traitements de vos données à caractère personnel, lequel est effectué sur la base de l’art. 6 alinéa 1, lettre f du RGPD.
            </p>

            <p>Nous utilisons votre adresse e-mail uniquement afin de traiter votre demande. Vos données seront ensuite supprimées dans le respect des délais de conservation légaux, sauf si vous avez accepté un traitement et une utilisation ultérieurs.
            </p>

            <h5>Collecte et traitement des données lors de l’utilisation du formulaire de contact
            </h5>


            <p>En cas d’utilisation du formulaire de contact, nous collectons uniquement les données à caractère personnel (nom, adresse e-mail, corps du message) que vous nous fournissez. L’objectif du traitement des données consiste à prendre contact.
            </p>


            <p>Si la finalité du contact est d'effectuer des démarches précontractuelles (par exemple, conseils en cas d'intérêt d'achat, préparation d'offres) ou s'il s'agit d'un contrat déjà conclu entre vous et nous, ce traitement de données est basé sur l'art. 6 alinéa 1 lettre b RGPD.
            </p>

            <p>Si le contact est pris pour d'autres raisons, ce traitement de données est effectué sur la base de l'art. 6 alinéa 1 lettre f RGPD, dans notre intérêt très largement justifié de traiter et de répondre à votre demande. Dans ce cas, pour des raisons tenant à votre situation particulière, vous avez le droit de vous opposer à tout moment aux traitements de vos données à caractère personnel, lequel est effectué sur la base de l’art. 6 alinéa 1, lettre f du RGPD.
            </p>

            <p>Nous utilisons votre adresse e-mail uniquement afin de traiter votre demande. Vos données sont ensuite supprimées, dans la mesure où vous n’avez pas consenti à ce qu’elles soient traitées et utilisées ultérieurement.
            </p>


            <h4> Compte client      Commandes </h4>

            <h5>Compte client</h5>
            <p>Lors de l’ouverture d'un compte client, nous collectons vos données à caractère personnel dans la limite qui y est précisée. Le traitement des données permet d’améliorer votre expérience d’achat et de simplifier le traitement de la commande. Ce traitement est effectué avec votre accord sur la base de l’art. 6 (1) lettre a du RGPD. Vous pouvez révoquer à tout moment votre consentement en nous en informant, sans que la licéité du traitement ayant eu lieu depuis votre consentement jusqu’à votre révocation ne soit affectée. Votre compte client est ensuite supprimé</p>

            <h5>Collecte, traitement et transmission de données personnelles lors de commandes
            </h5>
            <p>Lors de la commande, nous collectons et traitons vos données personnelles uniquement si cela est nécessaire pour l’exécution et le traitement de votre commande ainsi que pour traiter vos demandes. La mise à disposition des données est nécessaire pour la conclusion du contrat. Une non-mise à disposition a pour conséquence qu’aucun contrat ne peut être conclu. Le traitement se fait sur la base de l’art. 6 alinéa 1 lettre b RGPD et est nécessaire pour l’exécution d’un contrat avec vous.
            </p>

            <p>Dans ce cadre, vos données sont par exemple transmises aux entreprises d’expédition que vous avez choisies et aux fournisseurs de droshipping, aux prestataires de paiement, aux prestataires de service pour l’exécution de la commande et aux prestataires informatiques. Dans tous les cas, nous respectons les directives légales à la lettre. L'étendue de la transmission de données est limitée au minimum.
            </p>



            <h4> Contact       Évaluations      </h4>

            <h5>Collecte des données lors de la rédaction d’un commentaire
            </h5>
            <p>
              Si vous commentez un article ou une contribution, nous collectons uniquement les données à caractère personnel (nom, adresse e-mail, corps du commentaire) que vous nous fournissez. Le traitement des données permet d’autoriser et d’afficher les commentaires. En envoyant le commentaire, vous consentez au traitement des données transmises. Ce traitement est effectué avec votre accord sur la base de l’art. 6 (1) lettre a du RGPD. Vous pouvez révoquer à tout moment votre consentement en nous en informant, sans que la licéité du traitement ayant eu lieu depuis votre consentement jusqu’à votre révocation ne soit affectée. Vos données à caractère personnel sont ensuite supprimées.
            </p>

            <p>Lors de la publication de votre commentaire, seul le nom que vous avez indiqué sera publié. sera publiée.

            </p>


            <h4>Gestion des marchandises </h4>

            <h5>Utilisation d’un système de gestion des marchandises externe</h5>

            <p>Afin d’exécuter le contrat, nous utilisons un système de gestion des marchandises dans le cadre du traitement de la commande. Pour ce faire, les données à caractère personnel recueillies dans le cadre de la commande sont transmises à
            </p>

            <p>Amicron Software, Stedener Feld 4, 33104 Paderborn
            </p>


            <h4>Prestataires de paiement</h4>

            <h5>Utilisation de PayPal</h5>

            <p>Toutes les transactions PayPal sont soumises à la politique de confidentialité de PayPal. Vous pouvez la consulter à l’adresse: <a href=""> https://www.paypal.com/fr/webapps/mpp/ua/privacy-full?locale.x=fr_FR </a> </p>

            <h5>Utilisation de PayPal Express</h5>

            <p> Nous utilisons le service de paiement PayPal Express de PayPal (Europe) S.à.r.l. et Cie, S.C.A. sur notre site web. (22-24 Boulevard Royal, L-2449 Luxembourg ; « PayPal »).
            </p>
            <p>Le traitement des données a pour but de pouvoir vous proposer le paiement via le service de paiement PayPal.
            </p>

            <p> Pour intégrer ce service de paiement, PayPal doit collecter, stocker et analyser des données (par ex. adresse IP, type d'appareil, système d'exploitation, type de navigateur, emplacement de votre appareil) lorsque vous visitez le site Web. Des cookies peuvent également être utilisés à cet effet. Les cookies permettent de reconnaître votre navigateur.
            </p>

            <p> L'utilisation de cookies ou de technologies comparables est basée sur le § 15 paragraphe 3 phrase 1 TMG. Vos données à caractère personnel sont traitées sur la base de l'art. 6 alinéa 1 lettre f RGPD, dans notre intérêt légitime prédominant à disposer d'une gamme de moyens de paiement adaptés aux besoins des clients. Vous avez le droit de vous opposer à tout moment, pour des raisons tenant à votre situation particulière, au traitement des données à caractère personnel vous concernant.
            </p>

            <p>
              En sélectionnant et en utilisant PayPal Express, les données nécessaires au traitement du paiement sont transmises à PayPal afin de remplir le contrat avec vous avec le mode de paiement choisi. Ce traitement est effectué sur la base de l'art. 6, alinéa 1 lettre b RGPD.
              Vous trouverez de plus amples informations sur le traitement des données lors de l'utilisation du service de paiement PayPal dans la déclaration de confidentialité correspondante ici.</p>

            <h5>Utilisation d’Amazon Payments
            </h5>

            <p>Nous utilisons le service Amazon Payments d'Amazon Payments Europe s.c.a. sur notre site Web (38 avenue John F. Kennedy, L-1855 Luxembourg ; « Amazon Payments »).
            </p>

            <p>Le traitement des données a pour but de pouvoir vous proposer le paiement via le service de paiement Amazon Payments.
            </p>

            <p> Pour intégrer ce service de paiement, Amazon Payments doit collecter, stocker et analyser des données (par ex. adresse IP, type d'appareil, système d'exploitation, type de navigateur, emplacement de votre appareil) lorsque vous visitez le site Web. Des cookies peuvent également être utilisés à cet effet. Les cookies permettent de reconnaître votre navigateur.
            </p>

            <p> L'utilisation de cookies ou de technologies comparables est basée sur le § 15 paragraphe 3 phrase 1 TMG. Vos données à caractère personnel sont traitées sur la base de l'art. 6 alinéa 1 lettre f RGPD, dans notre intérêt légitime prédominant à disposer d'une gamme de moyens de paiement adaptés aux besoins des clients. Vous avez le droit de vous opposer à tout moment, pour des raisons tenant à votre situation particulière, au traitement des données à caractère personnel vous concernant.
            </p>

            <p> En sélectionnant et en utilisant « Amazon Payments », les données nécessaires au traitement du paiement sont transmises à Amazon Payments afin de remplir le contrat avec vous avec le mode de paiement choisi. Ce traitement est effectué sur la base de l'art. 6, alinéa 1 lettre b RGPD.
              Vous trouverez de plus amples informations sur le traitement des données lors de l'utilisation du service de paiement Amazon Payments dans la déclaration de confidentialité correspondante ici : https://pay.amazon.com/de/help/201212490 </p>


            <h4>Cookies </h4>

            <p>Notre site Web utilise des cookies. Les cookies correspondent à de petits fichiers texte enregistrés dans votre navigateur Web ou par votre navigateur Web dans le système informatique d’un utilisateur. Si un utilisateur se rend sur un site Web, alors un cookie est susceptible d’être enregistré sur le système d’exploitation de l’utilisateur. Ce cookie contient une chaîne de caractères spécifique permettant une identification univoque du navigateur lors de la prochaine visite du site Web.
            </p>

            <p>Les cookies sont enregistrés sur votre ordinateur. Par conséquent, vous contrôlez entièrement l’utilisation des cookies. En sélectionnant les paramètres techniques correspondants dans votre navigateur Internet, vous pouvez être informé avant l’activation de cookies et décider de les accepter au cas par cas ainsi qu’empêcher l’enregistrement des cookies et la transmission des données qu’ils contiennent. Les cookies déjà enregistrés peuvent être supprimés à tout moment. Nous attirons cependant votre attention sur le fait que vous ne pourrez alors pas utiliser pleinement l’ensemble des fonctionnalités de ce site Web.
            </p>

            <p>En cliquant sur les liens ci-dessous, vous trouverez toutes les informations concernant la gestion (entre autres la désactivation) des cookies sur les principaux navigateurs :
            </p>


            <p> Navigateur Chrome : <a href=""> https://support.google.com/accounts/answer/61416?hl=fr </a>
            </p>

            <p> Internet Explorer  : <a href=""> https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies </a>
            </p>

            <p> Mozilla Firefox : <a href=""> https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen
            </a>
            </p>

            <p> Safari   : <a href="">  https://support.apple.com/de-de/guide/safari/manage-cookies-and-website-data-sfri11471/mac </a>
            </p>

            <h5>Cookies techniquement nécessaires</h5>
            <p>Sauf indication contraire dans la déclaration de protection des données ci-dessous, nous utilisons seulement ces cookies afin de rendre nos contenus plus conviviaux, plus efficaces et plus sûrs. Par ailleurs, les cookies permettent à nos systèmes de reconnaître votre navigateur, même après un changement de page, et de vous proposer des services. Certaines fonctionnalités de notre site Internet ne pourraient pas être proposées sans l’utilisation de cookies. Pour qu’elles fonctionnent, il est nécessaire que le navigateur soit reconnu même après un changement de page.
            </p>

            <p>Le traitement se fait sur la base de l’art. 6 alinéa 1 lettre f RGPD au titre d’un intérêt légitime prédominant quant à la garantie d’une fonctionnalité optimale du site Internet et d’une présentation conviviale et efficace de notre offre.
            </p>

            <p>Pour des raisons tenant à votre situation particulière, vous avez le droit de vous opposer à tout moment au traitement de vos données à caractère personnel, lequel est effectué sur la base de l’art. 6 (1) lettre f du RGPD.
            </p>

            <h4>Analyse</h4>

            <h5>Utilisation de Google Tag Analytics
            </h5>

            <p> Nous utilisons sur notre site Web le service d’analyse Web Google Analytics de Google LLC. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ; « Google »). Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irlande) est le responsable du traitement de vos données si vous avez votre résidence habituelle dans l'Espace économique européen ou en Suisse. Google Ireland Limited est donc la société affiliée à Google qui est responsable du traitement de vos données et du respect des lois applicables en matière de protection des données.
            </p>


            <p>Le traitement des données permet d’analyser ce site Web et le comportement de ses visiteurs et sert également à des fins marketing et publicitaires. Sur demande de l’exploitant de ce site, Google utilisera pour ce faire les informations collectées afin d’évaluer l’utilisation du site Web, d’élaborer des rapports sur les activités du site et d’apporter à l’exploitant du site d’autres prestations de services liées à l’utilisation du site et d’Internet. Entre autres choses, les renseignements suivants peuvent être recueillis: Adresse IP, date et heure de la consultation de la page, chemin d'accès, informations sur le navigateur que vous avez utilisé et l'appareil que vous avez utilisé, pages visitées, URL de référence (site Web à partir duquel vous avez accédé à notre site Web), données de localisation, activités d'achat. l'adresse IP transmise par votre navigateur dans le cadre de Google Analytics ne sera pas fusionnée avec d'autres données Google. Google Analytics utilise des technologies telles que les cookies, la mémoire Web du navigateur et les pixels de suivi pour aider le site Web à analyser l'utilisation du site par les utilisateurs. Les informations ainsi générées sur votre utilisation du site sont transmises à un serveur de Google aux États-Unis et y sont enregistrées L’anonymat IP est activé sur ce site Web. Ainsi, votre adresse IP est au préalable tronquée par Google au sein des États membres de l’Union européenne ou dans d’autres pays signataires de l’accord sur l’Espace économique européen. Dans des cas exceptionnels seulement, l’adresse IP complète est transmise et tronquée sur un serveur de Google situé aux États-Unis.
            </p>

            <p>Le traitement des données, en particulier l’activation de cookies, s'effectue sur la base de l'art. 6 alinéa 1 lettre f RGPD en raison de notre intérêt légitime prédominant quant à la conception du site Web en fonction des besoins et ciblée. Pour des raisons tenant à votre situation particulière, vous avez le droit de vous opposer à tout moment aux traitements de vos données à caractère personnel, lequel est effectué sur la base de l’art. 6 (alinéa 1) lettre f du RGPD.
            </p>

            <p>

              Vous pouvez empêcher que Google Analytics n’enregistre et ne traite les données générées par les cookies ainsi que celles concernant votre utilisation du site Web (y compris votre adresse IP), en téléchargeant et en installant le plug-in de navigateur disponible en cliquant sur le lien suivant <a href=""> [https://tools.google.com/dlpage/gaoptout?hl=fr] </a>. Afin d'empêcher la collecte et le stockage de données par Google Analytics sur tous les appareils, vous pouvez configurer un cookie opt-out. Les cookies opt-out empêchent la saisie future de vos données lors de l’utilisation de ce site Internet. Vous devez effectuer l'opt-out sur tous les systèmes et dispositifs utilisés pour que cela soit pleinement efficace. Si vous supprimez le cookie « opt-out », les requêtes seront de nouveau transmises à Google. Si vous cliquez ici, le cookie d’opt-out est activé: Désactiver Google Analytics. Pour plus d’informations sur les conditions d’utilisation et la protection des données, consultez les liens suivants: https://www.google.com/analytics/terms/de.html et <a href=""> https://www.google.de/intl/de/policies/  </a> et <a href=""> https://policies.google.com/technologies/cookies?hl=de. </a>


            </p>


            <h4>Plug-ins et autres</h4>

            <h5>Utilisation de YouTube</h5>

            <p>Nous utilisons la fonction d'intégration vidéo YouTube de Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irlande ; « YouTube ») sur notre site Web. YouTube est une filiale de Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ; « Google »).
            </p>
            <p>Cette fonctionnalité permet d’afficher sur le site Web les vidéos YouTube dans un iFrame. Ainsi, l’option « mode de protection des données avancé » est activée. De cette manière, YouTube n’enregistre aucune information sur les visiteurs du site Web. Ce n’est que lorsque vous visionnez une vidéo que les informations sont transmises à YouTube, qui les enregistre alors. Le cas échéant, vos données seront transmises aux États-Unis.
            </p>
            <p>Le traitement des données est effectué sur la base de l’art. 6 alinéa 1 lettre f du RGPD et a pour intérêt légitime d’aménager le site Web en fonction des besoins et de façon ciblée. Pour des raisons tenant à votre situation particulière, vous avez le droit de vous opposer à tout moment aux traitements de vos données à caractère personnel, lequel est effectué sur la base de l’art. 6 (alinéa 1) lettre f du RGPD.
            </p>

            <p> Pour toute information complémentaire sur la collecte et l’utilisation des données par YouTube et Google, ainsi que sur vos droits y afférents et options disponibles pour la protection de votre confidentialité, veuillez consulter les informations sur la protection des données de YouTube <a href=""> (https://www.youtube.com/t/privacy) </a>.
            </p>

            <h4>Droits des personnes concernées et durée d’enregistrement</h4>

            <h5>Durée de l’enregistrement</h5>

            <p> Après conclusion du contrat, les données sont enregistrées dans un premier temps pour la durée de la période de garantie, puis dans le respect du délai de conservation légal, notamment selon le droit fiscal et du commerce, pour ensuite être supprimées une fois ce délai expiré, dans la mesure où vous n’avez pas consenti à ce qu’elles soient traitées et utilisées ultérieurement.
            </p>

            <h5>Droits de la personne concernée
            </h5>

            <p>Si les conditions légales sont remplies, vous bénéficiez des droits suivants conformément aux art. 15 à 20 du RGPD: droit d’obtenir des informations, droit de correction, droit de suppression, droit de limiter le traitement, droit à la portabilité des données.
            </p>

            <p>Par ailleurs et conformément à l’art. 21 (1) du RGPD, vous bénéficiez d’un droit d’opposition aux traitements effectués sur la base de l’art. 6 (1) f du RGPD ainsi qu’au traitement à des fins de publipostage.
            </p>

            <h5>Droit de recours auprès des autorités de contrôle</h5>

            <p>Conformément à l’art. 77 du RGPD, vous avez le droit de vous plaindre auprès des autorités de contrôle si vous estimez que le traitement de vos données à caractère personnel ne respecte pas la législation.
            </p>


            <h5>Droit à l’opposition</h5>

            <p>Si les traitements des données personnelles indiqués ici reposent sur notre intérêt légitime selon l’art. 6 alinéa 1 lettre f RGPD, vous avez le droit, pour des raisons émanant de votre situation spécifique, de vous opposer à ces traitements à tout moment avec effet pour l’avenir.
            </p>

            <p>Après votre opposition, le traitement des données concernées prendra fin à moins que nous puissions prouver qu’il existe des raisons impératives pour le traitement qui prévalent sur vos intérêts , droits et libertés ou si le traitement sert à revendiquer, exercer ou défendre des prétentions légales.
            </p>

            <p>Dernière mise à jour: 27.10.2020

            </p>



          </div>


        </div>





      </div>



    </>
  );
}
