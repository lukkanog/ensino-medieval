import React, {useState} from "react";

import ReinoExactus from "../assets/img/exatas.png";
import ReinoNatura from "../assets/img/natura.png";
import ReinoLinguagens from "../assets/img/linguagens.png";
import ReinoHumanas from "../assets/img/humanas.png";
import ReinoSocio from "../assets/img/socioemocional.png";
import SetaCarousel from "../assets/img/seta-verde.png";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function HomeCarousel() {
    // const {currentSlide, changeSlide} = useState(0);

    // const selectSlide = function(slideNumber){
    //     changeSlide(slideNumber);
    // }

    return (
        <CarouselProvider naturalSlideHeight={30} naturalSlideWidth={50} totalSlides={5}>
            
            <Slider>

                <Slide>
                    <div className="slide-container exatas-container">
                        <div className="slide exatas-slide">
                            <img alt="Imagem do Reino Exactus" src={ReinoExactus} className="reino-image" />
                            <div className="reino-description">
                                <h3 className="slide-title">Reino Exactus</h3>
                                <p className="slide-text">As missões em Exactus exigem rápidez e raciocínio lógico, tornando você um verdadeiro mestre frio e calculista no campo das Exatas.</p>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide>
                    <div className="slide-container natura-container">
                        <div className="slide natura-slide">
                            <img alt="Imagem do Reino natura" src={ReinoNatura} className="reino-image" />
                            <div className="reino-description">
                                <h3 className="slide-title">Reino Natura</h3>
                                <p className="slide-text">As missões em Exactus exigem rápidez e raciocínio lógico, tornando você um verdadeiro mestre frio e calculista no campo das Exatas.</p>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide>
                    <div className="slide-container linguagens-container">
                        <div className="slide linguagens-slide">
                            <img alt="Imagem do Reino Lenguatges" src={ReinoLinguagens} className="reino-image" />
                            <div className="reino-description">
                                <h3 className="slide-title">Reino Lenguatges</h3>
                                <p className="slide-text">O propósito de Lenguatge é facilitar a comunicação, tornando-a coerente e universal. Através de suas origens, buscam o entendimento sobre a lingua e características de uma nova cultura, assim como da sua arte. São os percusores da boa comunicação!</p>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide>

                    <div className="slide-container humanas-container">
                        <div className="slide humanas-slide">
                            <img alt="Imagem do Reino Humanus" src={ReinoHumanas} className="reino-image" />
                            <div className="reino-description">
                                <h3 className="slide-title">Reino Humanus</h3>
                                <p className="slide-text">Em Humanus será necessário o pensamento crítico e analítico, resgatando e descobrindo origens, culturas, modos de governança e muita diplomacia!</p>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide>
                    <div className="slide-container socioemocional-container">
                        <div className="slide socioemocional-slide">
                            <img alt="Imagem do Reino Socius Émotionnel" src={ReinoSocio} className="reino-image" />
                            <div className="reino-description">
                                <h3 className="slide-title">Reino Socius Émotionnel</h3>
                                <p className="slide-text">O sócio-emocional é a chave para construirmos uma sociedade forte, sabendo lidar com os dilemas da vida e que os objetivos podem ser alcançados mais facilmente com a ajuda de outros. É o reino onde a colaboração, empatia e compreensão são os pilares para as realizações pessoais e interpessoais.</p>
                            </div>
                        </div>
                    </div>
                </Slide>
            </Slider>

            <ButtonBack>
                <img alt="Voltar" src={SetaCarousel} className="seta-carousel"/>
            </ButtonBack>

            <ButtonNext>
                <img alt="Próximo" src={SetaCarousel} className="seta-carousel seta-carousel-direita"/>
            </ButtonNext>

            <div className="dot-group">
                <Dot slide={0} className="dot exatas-dot"></Dot>
                <Dot slide={1} className="dot natura-dot"></Dot>
                <Dot slide={2} className="dot linguagens-dot"></Dot>
                <Dot slide={3} className="dot humanas-dot"></Dot>
                <Dot slide={4} className="dot socioemocional-dot"></Dot>
            </div>


        </CarouselProvider>
    )
}