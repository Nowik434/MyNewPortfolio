import React from 'react';
import { Container } from './ParticlesStyle';
import Particles from 'react-tsparticles';


const ParticlesBar = () => {

    return (
        <Container>
            <Particles canvasClassName="particlesCanvas" style={{ position: "relative !important", height: "100%" }} options={{

                "background": {
                    "color": {
                        "value": "none"
                    },
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover",
                },
                "backgroundMask": {
                    "cover": {
                        "color": {
                            "value": "#d1e241"
                        }
                    }
                },
                "fullScreen": {
                    "zIndex": 1
                },
                "interactivity": {
                    "events": {
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "onHover": {
                            "enable": true,
                            "mode": "repulse",
                            "parallax": {
                                "force": 60
                            }
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 400,
                            "duration": 2,
                            "opacity": 0.1,
                            "size": 40
                        },
                        "grab": {
                            "distance": 400
                        },
                        "light": {
                            "area": {
                                "gradient": {
                                    "start": {
                                        "value": "#d1e241"
                                    }
                                }
                            }
                        }
                    }
                },
                "particles": {
                    "color": {
                        "value": "#d1e241"
                    },
                    "links": {
                        "color": {
                            "value": "#d1e241"
                        },
                        "distance": 150,
                        "enable": true,
                        "opacity": 0.1
                    },
                    "move": {
                        "attract": {
                            "rotate": {
                                "x": 600,
                                "y": 1200
                            }
                        },
                        "enable": true,
                        "path": {},
                        "outModes": {
                            "bottom": "out",
                            "left": "out",
                            "right": "out",
                            "top": "out"
                        },
                        "spin": {}
                    },
                    "number": {
                        "density": {
                            "enable": true
                        },
                        "value": 60
                    },
                    "opacity": {
                        "value": {
                            "min": 0.1,
                            "max": 0.3
                        },
                        "animation": {
                            "enable": true,
                            "speed": 1,
                            "minimumValue": 0.1
                        }
                    },
                    "shape": {
                        "options": {
                            "character": {
                                "value": [
                                    "Java Script",
                                    "react",
                                    "CSS",
                                    "HTML",
                                    "Angular",
                                    "Next.js",
                                    "Netify",
                                    "Vercel",
                                    "PS",
                                    "AI"
                                ],
                                "font": "Verdana",
                                "style": "",
                                "weight": "400",
                                "fill": true
                            },
                            "char": {
                                "value": [
                                    "Java Script",
                                    "react",
                                    "CSS",
                                    "HTML",
                                    "SCSS",
                                    "Angular",
                                    "Next.js",
                                    "Netify",
                                    "Vercel",
                                    "PS",
                                    "AI"
                                ],
                                "font": "Verdana",
                                "style": "",
                                "weight": "400",
                                "fill": true
                            }
                        },
                        "type": "char"
                    },
                    "size": {
                        "value": 16,
                        "animation": {
                            "speed": 10,
                            "minimumValue": 10
                        }
                    },
                    "stroke": {
                        "width": 1,
                        "color": {
                            "value": "#d1e241",
                            "animation": {
                                "h": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "sync": true
                                },
                                "s": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "sync": true
                                },
                                "l": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "sync": true
                                }
                            }
                        }
                    }
                }
            }} />
        </Container>
    );
}

export default ParticlesBar;