import React from 'react';
import demo from '../Images/demo.gif';
import dinner from '../Images/dinner.PNG';
import '../styles/portfolio.css'

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
        marginTop: "20px"
    },

    br: {
        backgroundColor: "black"
    }
}

function Portfolio() {
    return (
        <div>
            <div className="hero" style={styles.container}>
                {/* <hr style={styles.hr} /> */}
                <h1 style={styles.h1} id="portfolio">Portfolio</h1>
                <div className="tile is-ancestor" >
                    
                    <div class="image-box">
                        <img src={dinner} alt="Unsplashed Random" width="540" height="548" />
                        
                    </div>
                    <div class="image-box">
                        <img src={dinner} alt="Unsplashed Random" width="540" height="548" />
                        
                    </div>
              
                </div>
                <div className="tile is-ancestor" >

                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">Hello World</p>
                            <p class="subtitle">What is up?</p>
                        </article>
                    </div>
                    <div class="tile is-parent" id="portfolio">
                        <article class="tile is-child box">
                            <p class="title">Foo</p>
                            <img src={demo} alt="demo" />
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">Third column</p>
                            <p class="subtitle">With some content</p>
                            <div >

                            </div>
                        </article>
                    </div>
                </div>

                <hr style={styles.hr} /></div>
        </div>
    )
}

export default Portfolio;