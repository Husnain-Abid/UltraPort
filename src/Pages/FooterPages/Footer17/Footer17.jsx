import React from 'react'
import "./Footer17.css";
import ASSET_PATHS from '../../../utils/constant';

export default function Footer17() {

    const imgURL = ASSET_PATHS.IMG_URL;

    return (
        <>
            <div className='Footer17 container'>


                <div className='row main'>


                    <div className='heading'>
                        <h1>Contactez-nous</h1>
                    </div>


                    <div className='col-md-5 col-sm-12 section'>

                        <h4>Écrivez-nous</h4>

                        <form>
                            <small id="emailHelp" class="form-text text-muted">
                            Contactez nous et nous vous répondrons aussi rapidement que possible.</small>



                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nom</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">E-Mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Numéro de téléphone</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Numéro de commande</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Commenter</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>


                            <div className='form-button'>
                                <button >Soumettre</button><br />
                            </div>


                        </form>

                    </div>



                </div>


            </div>

        </>
    )
}
