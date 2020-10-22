import React from 'react';
import dinner from '../Images/dinner.PNG';
import tracker from '../Images/tracker.demo.gif'
import '../styles/portfolio.css';
import amplifi from '../Images/amplifi.PNG'

const styles = {
    container: {
        backgroundColor: "black",
        padding: "10px"
    },
    h1: {
        fontSize: "30px",
        marginBottom: "10px",
        marginTop: "20px",
        textAlign: "center",
        color: "#FADBD8"
    },


    hr: {
        height: "1px",
        width: "100%",
        color: "#F1C40F",
        backgroundColor: "#F1C40F",
        marginTop: "20px",
        display: "inline-block"
    },

    br: {
        backgroundColor: "black"
    },
    columns: {
        margin: "15px"
    },

    hr2: {
        marginTop: "135px",
        width: "100%"
    },
    h2: {
        fontWeight: "bold",
        color: "white",
        fontSize: "20px"
    }
}

function Portfolio() {
    return (
        <div>
            <div className="hero" style={styles.container}>
                <div className="columns" >
                    <div className="column">
                        <h1 style={styles.h1} id="portfolio">Portfolio</h1>
                    </div>
                </div>
                <div className="columns" style={styles.columns}>
                    <div className="column">
                        <div class="image-box">
                            <img src={dinner} alt="Unsplashed Random" width="440" height="448" />
                        </div>
                    </div>
                    <div className="column" style={styles.hr2}><hr />
                    </div>
                    <div className="column is-one-fifth project">
                        <h2 style={styles.h2}>What's for Dinner?</h2>
                        <ul>
                            <li>React.js</li>
                        </ul>
                    </div>
                </div>
                <div className="columns" style={styles.columns}>
                    <div className="column project">
                        <h2 style={styles.h2}>Ampli-FI</h2>
                        <ul>
                            <li>React.js</li>
                            <li><a href="https://github.com/sarinaburch/Ampli-FI" target="blank">View GitHub Repository | </a><a href="https://amplifiyourlife.herokuapp.com/" target="blank">View Application</a></li>
                        </ul>
                    </div>
                    <div className="column is-three-fifth" style={styles.hr2}><hr />
                    </div>
                    <div className="column is-one=-fifth">
                        <div class="image-box">
                            <img src={amplifi} alt="Unsplashed Random" width="540" height="548" />
                        </div>
                    </div>
                </div>
                <div className="columns" style={styles.columns}>
                    <div className="column">
                        <div class="image-box">
                            <img src={tracker} alt="Unsplashed Random" width="440" height="448" />
                        </div>
                    </div>
                    <div className="column" style={styles.hr2}><hr />
                    </div>
                    <div className="column is-one-fifth project">
                        <h2 style={styles.h2}>Employee Tracker</h2>
                        <ul>
                            <li><a href="https://github.com/sarinaburch/employee-tracker">View GitHub Repository</a></li>
                        </ul>
                    </div>
                </div>
                <div className="columns" style={styles.columns}>
                    <div className="column is-one-fifth project">
                        <h2 style={styles.h2}>Ampli-FI</h2>
                        <ul>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div className="column is-three-fifth" style={styles.hr2}><hr />
                    </div>
                    <div className="column is-one=-fifth">
                        <div class="image-box">
                            <img src={amplifi} alt="Unsplashed Random" width="540" height="548" />
                        </div>
                    </div>
                </div>
                <hr style={styles.hr} />
            </div>
        </div>
    )
}

export default Portfolio;