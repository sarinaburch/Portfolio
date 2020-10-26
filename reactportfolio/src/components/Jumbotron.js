import React from 'react';
import '../styles/jumbo.css';


const styles = {
    h1: {
        color: "#F1C40F",
        fontSize: "50px"
    },
    h3: {
        color: "#FADBD8",
        marginTop: "-30px",
        marginBottom: "50px"
    }
}

function Jumbotron() {
    return (
        <div className="wrapper">
            <section className="hero is-fullheight masthead">
                <div className="hero-body content">
                    <div className="container">
                        <h1 className="headline" style={styles.h1}>
                            Sarina Burch
                        </h1>
                        <h3 className="titles" style={styles.h3}>
                            Full Stack Web Developer
                        </h3>
                        <div class="tabs titles">
                            <ul>
                                <li><a href="https://bulma.io">About Me</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="https://bulma.io">Get In Touch</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>

    );
}
export default Jumbotron;