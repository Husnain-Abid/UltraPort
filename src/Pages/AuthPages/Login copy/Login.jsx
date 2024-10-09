import React from 'react'
import "./Login.css";
import ASSET_PATHS from '../../../utils/constant';

export default function Login() {

    const imgURL = ASSET_PATHS.IMG_URL;

    return (
        <>
            <div className='login container'>


                <div className='row main'>


                    <div className='heading'>
                        <h1>Vous êtes deconnecté</h1>
                    </div>


                    <div className='col-md-6 col-sm-12 section'>

                        <h4>Clients enregistrés</h4>

                        <form>
                            <small id="emailHelp" class="form-text text-muted">Si vous avez un compte, connectez-vous avec votre adresse e-mail.</small>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">E-Mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Mot de passe</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Afficher le mot de passe</label>
                            </div>

                            <div className='form-button'>
                                <button >Se connecter</button><br />
                                <a href="#">Mot de passe oublié ?</a>
                            </div>


                        </form>

                    </div>


                    <div className='col-md-6 col-sm-12 section'>

                        <h4>Nouveaux clients</h4>
                            <ul>
                                <li>processus de commande rapide</li>
                                <li>enregistrer plusieurs adresses de livraison</li>
                                <li>historique des commandes</li>
                                <li>enregistrer l'article dans la liste de souhaits</li>
                            </ul>

                        <div className='form-button'>
                            <button >Créer un compte</button>
                        </div>

                    </div>


                </div>


                <div className='row'>

                    <div className='col-lg-6 col-sm-12  section-2'>

                        <h4>Identifiez-vous avec Amazon</h4>
                        <p>Amazon Pay et Identifiez-vous avec Amazon vous permet d'utiliser les informations de paiement et d'expédition stockées dans votre compte Amazon pour passer une commande sur ce site Web.</p>
                        <button> <img src={`${imgURL}/amazonbtn.svg`} className="w-100" /></button>

                    </div>


                </div>

            </div>

        </>
    )
}
