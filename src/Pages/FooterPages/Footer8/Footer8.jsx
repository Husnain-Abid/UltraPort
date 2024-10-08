import React, { useState } from 'react';
import "./Footer8.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer8() {

  const imgURL = ASSET_PATHS.IMG_URL;


  const productCardData = [
    {
      id: 1,
      imgURL: 'card_1.jpg',
      hoverImgURL: 'card_1_hover.jpg',
      rating: 4.5,
      title: 'PC Premium gaming AMD Ryzen 9 7900X Super Nova',
      features: [
        'Windows 11 Home',
        'AMD Ryzen 9 7900X, 12x 4,70 GHz',
        'NVIDIA GeForce RTX 4080 Super 16 Go',
        '32Go Kingston 6000Mhz DDR5 RGB RAM',
        'Gigabyte X670 Aorus Elite',
        '1To Crucial T700 M.2 NVMe SSD'
      ],
      oldPrice: '3 074,00 €',
      newPrice: '2 999,00 €',
      deliveryTime: 'Délai de livraison 4-6 jours ouvrés'
    },
    {
      id: 2,
      imgURL: 'card_2.jpg',
      hoverImgURL: 'card_2_hover.jpg',
      rating: 3.5,
      title: 'PC Premium gaming AMD Ryzen 9 7900X Super Nova',
      features: [
        'Windows 11 Home',
        'AMD Ryzen 9 7900X, 12x 4,70 GHz',
        'NVIDIA GeForce RTX 4080 Super 16 Go',
        '32Go Kingston 6000Mhz DDR5 RGB RAM',
        'Gigabyte X670 Aorus Elite',
        '1To Crucial T700 M.2 NVMe SSD'
      ],
      oldPrice: '3 074,00 €',
      newPrice: '2 999,00 €',
      deliveryTime: 'Délai de livraison 4-6 jours ouvrés'
    }
  ];



  // Sample FAQ data
  const faqData = [

    {
      question: `Connexion`,
      answer: `En termes de connexion, la différence principale entre des HDD / SSD SATA et les SSD NVMe est la suivante :

Les disques internes SATA sont des disques reliés à la carte mère par un câble SATA. Il s’agit d’un câble de transfert que l’on reconnait immédiatement à sa forme aplatie.
Les disques SSD M.2 NVMe sont généralement branchés directement sur la carte mère et situés à proximité des bus PCI-Express.

Attention cependant ! Il existe également des SSD M.2 basés sur l’interface SATA. Bien que ceux-ci ressemblent aux disques M.2 NVMe, il n’en est rien. Les disques M.2 SATA ne bénéficient bien entendu pas des nombreux avantages de l’interface NVMe, comme leur vitesse de lecture quasi instantanée. Veillez donc bien à commander le disque SSD bénéficiant de l’interface souhaitée. Le format ne fait pas tout !

Les SSD disposent aussi de différents types de cache. Le cache est une sorte de salle d’attente des données dans laquelle celles-ci sont stockées en attente d’être utilisées. Il s’agit d’un espace réservé sur votre disque.`},
    {
      question: `Cache`,
      answer: `Selon les modèles, la méthode de cache peut varier pour soit assurer une vitesse à tout prix tout en mettant éventuellement en risque la qualité des données transmises, soit assurer qu’aucune donnée ne soit perdue, et ce, au détriment de la vitesse d’écriture.

Le SSD peut bénéficier de mises à jour du firmware, et certains logiciels peuvent même vous permettre de déterminer la méthode de cache souhaitée en fonction de votre utilisation. Ces logiciels sont souvent mis à disposition par le constructeur même du SSD.

Même les fabricants de processeur mettent à disposition de l’utilisateur des technologies appropriées dans le but d’optimiser le fonctionnement du SSD en fonction de l’architecture du processeur. Il s’agit par exemple d’Intel Smart Response Technology (SRT) ou bien encore d’AMD StoreMI.`},
    {
      question: `Différents types de NAND`,
      answer: `Sur le papier, le SSD devrait fonctionner comme de la RAM. C'est-à-dire que la mémoire flash digitale devrait être perdue dés que le PC n’est plus alimenté en électricité. La technologie NAND est le coup de baguette magique qui permet à la mémoire flash de votre SSD de conserver les données, et ce même lorsque vos composants ne sont pas alimentés.

On distingue 4 technologies NAND. Chaque type de mémoire a ses avantages et inconvénients :

SLC pour Single Level Cell. il s’agit de la mémoire NAND flash la plus simple et pourtant la plus onéreuse. On la trouve dans les meilleurs SSD dont la conservation des données est la priorité absolue. Chaque cellule de stockage ne stocke qu’un seul bit d’information, soit un 0 ou un 1.
MLC pour Multi Level Cell, stocke 2 bits par unité de stockage. Chaque unité peut donc contenir une des quatre informations digitales suivantes : 00, 01, 10, 11. Il s’agit ici du meilleur compromis entre vitesse et sécurité des données. Le NAND MLC est le meilleur rapport qualité–prix pour une utilisation standard. Son prix réduit en fait un favori du grand public.
TLC pour Triple Level Cell. La technologie NAND peut ici stocker 3 bits par cellule de stockage et donc contenir l’une des 8 informations suivantes : 000, 001, 010, 011, 100, 101, 110 and 111. La grande capacité de stockage de la mémoire TLC a pour inconvénient des performances, une durée de vie et une fiabilité plus faibles que les technologies énoncées ci-dessus.
QLC pour Quadruple Leve Cells. Il s’agit de la denrière évolution avec cette fois-ci 4 bits stockés par cellule. Sa capacité de stockage accrue et sa grande vitesse d’écriture sont contrecarrés par une durée de vie réduite. Les disques SSD QLC sont vendu au meilleur prix en comparaison aux autres technologies NAND.
Une toute nouvelle technologie est récemment apparue. Il s’agit de la mémoire 3D NAND ou V-NAND. Les cellules de stockage évoluent ici et peuvent à présent accepter plusieurs couches de stockage verticales. Les unités V-NAND peuvent donc avoir pour type de mémoire les formats flash vu précédemment : mémoire TLC, MLC ou QLC.`
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
        <h2 className=" mb-4">Disques durs SSD - différences en détail</h2>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };



  return (
    <>

      <div className='Footer8'>




        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>

            <div className='heading'>
              <h1> <span> Comparatif </span>
                SSD </h1>
              <p>Suivez ce guide d’achat afin de trouver vos marques parmi les différents types de disque dur SSD interne. Vous trouverez plus bas un comparatif des meilleurs disques disponibles dans notre boutique.</p>
            </div>



            <div className='content'>


              <h1>Un SSD, qu’est-ce que c’est ?</h1>

              <p>SSD est l’acronyme de Solid State Drive. Il s’agit d’une nouvelle technologie de stockage informatique. Traditionnellement, le marché du stockage informatique était principalement partagé entre les disquettes à surface souples (Floppy Disk) et les disques durs à surface fixe, plus communément appelés HDD pour Hard Disk Drive.
                Les HDD sont longtemps restés le standard incontournable en termes de stockage, grâce à leur fiabilité et leur généreux espace de stockage.</p>
              <p>La technologie High-Tech SSD, apparue il y a quelques années, a commencé à se démocratiser dans les années 2010. Contrairement aux HDD classiques, les SSD utilisent une technologie de mémoire flash, semblable à celle que l’on trouve dans les clés USB. Contrairement aux HDD, qui utilisaient encore une tête mécanique de lecture faisant des allers-retours constants entre les différents secteurs de données, les SSD permettent un accès immédiat aux données stockées dans les unités de mémoire flash. L’absence d’éléments mécaniques est un réel avantage lors de l’utilisation d’un SSD. Cela se traduit par un disque qui fatigue moins, à l’utilisation silencieuse et surtout, plus rapide. Même la consommation électrique est réduite en comparaison à un disque dur HDD classique.</p>
              <p> Par leurs nombreux avantages, leur gain de fiabilité au fur et à mesure de l’évolution de la technologie, et leurs prix toujours plus abordables, les SSD sont devenus un standard. Il parait aujourd’hui inconcevable de monter un PC sans un moins un SSD comme disque de base pour le système d’exploitation. Les PC qui bénéficient d’un disque SSD démarrent en seulement quelques secondes, contrairement aux minutes nécessaires sur les PC dotés uniquement de HDD. Les logiciels et jeux installés sur un SSD fonctionnent bien plus rapidement. Les textures en jeu se chargent plus vite. Baser son PC sur un SSD, c’est profiter d’une réactivité du système accrue. </p>
              <p>Même un PC vieillissant peut amplement profiter d’un SSD, et retrouver une nouvelle jeunesse grâce à cette technologie. Cela s’explique souvent par l’absence d’éléments mécaniques et de secteurs de stockage physiques. En effet, un PC qui ne disposait que d’un disque HDD voyait très rapidement ses fichiers stockés sur plusieurs secteurs différents du disque dur. Ce phénomène appelé fragmentation ralentissait énormément le système, car Windows cherchait constamment à optimiser la répartition des fichiers. Le disque dur HDD atteignait donc ainsi sa limite d’utilisation, ce qui se traduisait par des lenteurs système en général lors de l’utilisation.</p>

              <h4>Quels sont les différents types de SSD ?
              </h4>

              <p>La technologie SSD s’est développée, et on trouve actuellement plusieurs types et formats de disques SSD.
              </p>

              <p>Les SSD SATA 2.5 sont encore aujourd’hui le format le plus courant. Ils partagent l’interface SATA avec les HDD classiques. Ceci présente l’avantage de pouvoir remplacer facilement son ancien disque dur par un nouveau disque interne SSD SATA 2.5. Cet avantage présente cependant également un inconvénient : l’interface SATA commence à être vieillissante, et présente des limites en termes de bande passante, de vitesse de lecture et vitesse d’écriture.</p>



              <h4>Le format encore le plus répandu est le SSD SATA 2.5 :
              </h4>

              <p>Les SSD SATA 2.5 sont encore aujourd’hui le format le plus courant. Ils partagent l’interface SATA avec les HDD classiques. Ceci présente l’avantage de pouvoir remplacer facilement son ancien disque dur par un nouveau disque interne SSD SATA 2.5. Cet avantage présente cependant également un inconvénient : l’interface SATA commence à être vieillissante, et présente des limites en termes de bande passante, de vitesse de lecture et vitesse d’écriture.</p>

              <p>Les SSD SATA 2.5 se sont démocratisés dans les années 2010. Il est à présent possible d’en trouver à des prix tout à fait abordables, avec des capacités totales généreuses.
                La majorité des boitiers commercialisés depuis la dernière décennie disposent d’espace de montages dédiés pour ce type de disques. Ajouter un disque SSD SATA 2.5 est une opération relativement simple. Il suffit de connecter le disque interne à la carte mère et l’alimentation avec les cables SATA dédiés. Les disques sont souvent immédiatement prêts à l’emploi, et sont reconnus tout de suite par votre système d’exploitation.</p>


              <p>Ce type de disque dur peut même être utilisé comme un SSD externe au meilleur prix si vous vous fournissez l’adaptateur USB-C nécessaire.</p>

              <h4>Un nouveau format sur le marché : le SSD M.2 avec interface NVMe :</h4>

              <p>L’interface NVMe est un acronyme signifiant Non-Volatile Memory express. Les SSD au format M.2 utilisant cette interface s’éloignent du format traditionnel de disque interne et sont la nouvelle étape dans l’évolution technologique en termes de mémoire. Ils fonctionnent à présent comme une unité de stockage ultra-rapide.</p>

              <p>Bien que les meilleurs SSD SATA présentent de réels avantages en termes de vitesse, surtout en les comparant aux HDD classique, ils restent limités par l’interface SATA. Les SSD NVMe ne subissent pas ces limitations et peuvent donc vous faire bénéficier d’une vitesse de lecture et une vitesse d’écriture jusqu’à 4 fois plus rapide qu’un SSD SATA.
                Leur utilisation est fortement conseillée dans des PC soumis à une utilisation intensive constante. Grâce à leur utilisation des bus PCI-E de la carte mère, les SSD M.2 NVMe font vraiment partie intégrante du cœur des opérations : Votre PC en tirera un bien meilleur parti qu’avec un lecteur interne ou un lecteur externe.</p>

              <p>Ces SSD sont montés directement sur la carte mère. Cela présente plusieurs avantages. Ils peuvent par exemple trouver leur place derrière des composants imposants, tels que la carte graphique. De plus, certaines cartes mères disposent d’un radiateur de refroidissement passif intégré. Celui-ci se cale directement en contact avec les disques SSD M.2, et s’assurent de leur refroidissement. Les disques SSD M.2 ne subissent alors aucune surchauffe, ce qui accrue leurs performances et leur longévité. Le gain de place et la réduction de surchauffe en font le nouveau favori dans la construction d’un PC portable.</p>

              <h4>Comparaison technique de SSD</h4>




              <div className='image-container'>
                <img src={`${imgURL}/footerPc-8-1.png`} className='w-100' />
              </div>


            </div>


          </div>

        </div>





        <div className="container px-5 ">
          <FAQ />
        </div>





        <div className='fluid-cotainer section-2'>

          <div className='container py-5'>



            <div className='content'>

              <h4>Quel sont les meilleurs SSD à acheter pour mon PC ?</h4>

              <p>
                Comme toujours, il n’y a pas de formule magique dans le choix des composants de votre PC. Le choix d’un SSD interne vous revient, car chaque PC doit être unique, tout comme son utilisateur. La vitesse de lecture et la vitesse d’écriture ne font pas tout, parfois un disque dur classique peut-être également adapté à votre utilisation ou votre budget.
                Voici cependant quelques conseils pour clôturer ce comparatif SSD, et vous aider à choisir dans votre achat parmi les meilleurs disques.</p>

              <p>Au vu des dernières évolutions technologiques, il parait essentiel aujourd’hui d’utiliser au moins un SSD en tant que disque dur interne principal. Les PC utilisant encore un disque dur classique comme disque système sont très rapidement sujets à de nombreux ralentissements système, ainsi que des longs temps de chargement. C’est pourquoi nous recommandons fortement que votre PC utilise un SSD interne comme base système.</p>

              <p>Dans le cas d’un PC pas cher, prévu pour une utilisation bureautique ou des jeux peu gourmands :</p>

              <p>Vous pouvez par exemple utiliser un SSD interne à petite capacité, comme 120 Go ou 250 Go, pour votre système d’exploitation qui profitera amplement de sa grande vitesse de lecture. Vous pourrez y installer vos programmes courants afin qu’ils profitent également de ces avantages. Un disque SSD SATA vous donnera la meilleure vitesse de lecture au meilleur prix.</p>

              <p>Afin de stocker vos programmes lourds, vos jeux et votre collection de données personnelles, nous vous recommandons de vous procurer un 2e disque dur interne. Un disque dur classique HDD fera l’affaire pour ce type d’utilisation. Sa grande capacité de stockage au meilleur prix font du HDD un standard toujours apprécié pour ceux qui veulent simplement stocker leurs données sans avoir à casser leur tirelire pour profiter d’une vitesse d’écriture ahurissante.</p>

              <p>Un disque dur externe est aussi une bonne alternative. Les meilleurs disques externes sont aujourd’hui au format disque SSD. Cependant, un SSD externe revient bien entendu plus cher qu’un disque dur externe HDD. <br />
                Si vous utilisiez jusque-là un PC portable et que vous souhaitez vous procurer une tour PC Gamer Megaport à présent, vous pourrez conserver votre disque dur externe et l’utiliser en tant que disque additionnel USB-C.

              </p>


              <p>Si vous avez prévu d’acheter un PC polyvalent, nous vous recommandons comme base système un disque dur au format M.2. Une capacité de stockage de 1 To semble devenir la norme pour ce type de SSD interne branché sur la carte mère. Ce disque dur pourra accueillir votre système d’exploitation, ainsi que vos programmes et même vos jeux préférés.
                Selon votre utilisation et votre budget, vous pourrez y ajouter un 2e disque dur interne.
                Un HDD sera parfait si vous souhaitez juste stocker des données. Si vous prévoyez de faire du streaming régulièrement, un HDD à forte capacité de stockage sera un réel avantage pour vos énormes fichiers vidéos, et ce, à moindre cout.
                Si vous comptez installer une grande collection de jeux et que le disque dur principal ne peut pas tous les accueillir, alors installer un SSD SATA 2.5 peut-être une solution raisonnable. Vous profiterez de temps d’accès réduits sur ce SSD interne.</p>

              <p>Pour un PC professionnel dans le domaine de la musique ou du graphisme, ou pour des stations de calculs intensifs, il est recommandé de s’équiper du meilleur. Une solution à double disque dur au format M.2 est recommandée. Veillez à bien faire attention au type de mémoire NAND en fonction de vos besoins ! Il vous reste à déterminer si vous comptez mettre la priorité sur la conservation des données, ou bien sur des temps d’accès plus que fulgurants et quasi immédiats.</p>


              <p>Nous espérons que ce comparatif SSD vous aidera dans votre achat. Voici à présent une sélection de PC pourvus des meilleurs SSD pour vous :</p>


            </div>



          </div>


        </div>




        <div className='fluid-container'>

          <Card productCardData={productCardData} />

        </div>



      </div>



    </>
  );
}
