import React from 'react'
import "./Register.css";
import ASSET_PATHS from '../../../utils/constant';

export default function Register() {

    const imgURL = ASSET_PATHS.IMG_URL;

    return (
        <>
            <div className='register container'>


                <div className='row main'>


                    <div className='heading'>
                        <h1>Créer un nouveau compte client</h1>
                    </div>


                    <div className='col-md-6 col-sm-12 section'>

                        <h4>Informations personnelles</h4>

                        <form>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Prénom  </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Nom </label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">S'inscrire à la newsletter</label>
                            </div>

                        </form>

                    </div>


                    <div className='col-md-6 col-sm-12 section'>

                        <h4>Informations d'accès</h4>


                        <form>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">E-Mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Mot de passe
                                </label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                <small id="emailHelp" class="form-text text-muted">Force du mot de passe: Pas de mot de passe</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Confirmer le mot de passe
                                </label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Afficher le mot de passe</label>
                            </div>

                        </form>




                    </div>



                    <div className='form-button'>
                        <button >Créer un compte</button>
                    </div>




                </div>


                <div className='row'>

                    <div className='col-lg-4 col-sm-12  section-2'>

                        <h4>Identifiez-vous avec Amazon</h4>
                        <p>Amazon Pay et Identifiez-vous avec Amazon vous permet d'utiliser les informations de paiement et d'expédition stockées dans votre compte Amazon pour passer une commande sur ce site Web.</p>
                        <button> <img src={`${imgURL}/amazonbtn.svg`} className="w-100" /></button>

                    </div>


                </div>

            </div>

        </>
    )
}
