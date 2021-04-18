import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section class="contact-us text-center">
        <div class="fields">
            <div class="container">
                <div class="row">
                    <i class="fa fa-headphones fa-5x"></i>
                    <h2 class="h1">Tell Us What You Feel</h2>
                    <p class="lead">Feel Free To Contact Us Any Time</p>
                    <form>
                        <div class="col-md-6 wow slideInLeft" data-wow-duration="2s" data-wow-offset="350">  
                            <div class="form-group">
                                <input type="text" class="form-control input-lg" placeholder="Username"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control input-lg" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control input-lg" placeholder="Cell Phone"/>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInRight" data-wow-duration="2s" data-wow-offset="350">
                            <div class="form-group">
                                <textarea class="form-control input-lg" placeholder="Type Your Message"></textarea>
                            </div>
                            <button type="button" class="btn btn-success btn-lg btn-block">Contact Us</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  
  
    );
};

export default Contact;