import React from 'react';
import '../styles/skills.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import AboutMe from '../components/AboutMe'


const styles = {
    container: {
        backgroundColor: "black",

    },
    hr: {
        height: "1px",
        width: "100%",
        color: "#F1C40F",
        backgroundColor: "#F1C40F",
        marginTop: "20px",
        display: "inline-block"
    },
    h1: {
        fontSize: "30px",
        marginBottom: "10px",
        textAlign: "center",
        color: "#FADBD8"
    },
    h3: {
        fontSize: "10px",
        marginBottom: "10px",
        color: "#FADBD8",
        marginLeft: "50px"
    },

    tile: {
        margin: "50px"
    },
    columns: {
        margin: "15px"
    }
}

function Skills() {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>About Me</h1>
            <div className="columns" style={styles.columns}>
                <div className="column is-two-thirds">
                <AboutMe />
                </div>
                    <div className="column is-one-third">
                        <div>
                            <h3 style={styles.h3} class="title">CSS</h3>
                            <div class="tile" style={styles.tile}>
                                <Progress
                                    percent={80}
                                />
                            </div>
                        </div>

                        <div >
                            <div> <div>
                                <h3 style={styles.h3} class="title">HTML</h3>
                                <div class="tile" style={styles.tile}>
                                    <Progress
                                        percent={90}
                                    />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div >
                            <div>
                                <h3 style={styles.h3} class="title">JAVASCRIPT</h3>
                                <div class="tile" style={styles.tile}>
                                    <Progress
                                        percent={65}
                                    />
                                </div>
                            </div>

                        </div>
                        <div >
                            <div>
                                <h3 style={styles.h3} class="title">MySQL</h3>
                                <div class="tile" style={styles.tile}>
                                    <Progress
                                        percent={40}
                                    />
                                </div>
                            </div>
                        </div>
                        <div >
                            <div>
                                <h3 style={styles.h3} class="title">REACT</h3>
                                <div class="tile" style={styles.tile}>
                                    <Progress
                                        percent={65}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                
            </div>
            <hr style={styles.hr} />
        </div>
    )
}
export default Skills;