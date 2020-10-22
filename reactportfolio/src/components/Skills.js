import React from 'react';
import '../styles/skills.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const styles = {
    container: {
        backgroundColor: "black",

    },
    h1: {
        fontSize: "30px",
        marginBottom: "10px",
        textAlign: "center",
        color: "#FADBD8"
    },
    h3: {
        fontSize: "20px",
        marginBottom: "10px",
        color: "#FADBD8",
        marginLeft: "50px"
    },

    tile: {
        margin: "50px"
    }
}

function Skills() {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Skills</h1>
            <div class="columns">
                <div class="column">
                    <h3 style={styles.h3} class="title">CSS</h3>
                    <div class="tile" style={styles.tile}>
                        <Progress
                            percent={80}
                        />
                    </div>
                </div> <div class="column">
                    <h3 style={styles.h3} class="title">HTML</h3>
                    <div class="tile" style={styles.tile}>
                        <Progress
                            percent={90}
                            theme={{
                              
                                  color:'#fbc630'   
                                
                               
                            }}
                            
                        />
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h3 style={styles.h3} class="title">JAVASCRIPT</h3>
                    <div class="tile" style={styles.tile}>
                        <Progress
                            percent={65}
                        />
                    </div>
                
                </div>    
                <div class="column">
                        <h3 style={styles.h3} class="title">MySQL</h3>
                        <div class="tile" style={styles.tile}>
                            <Progress
                                percent={40}
                            />
                        </div>
                    </div>
            </div>
 
            <div class="columns">
                <div class="column">
                    <h3 style={styles.h3} class="title">REACT</h3>
                    <div class="tile" style={styles.tile}>
                        <Progress
                            percent={75}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;