import React from "react"
import Fade from 'react-reveal/Fade';

import Section from "../components/section"
import SectionTitle from "../components/sectionTitle";

const MapSection = () => {

    return (
            <Fade delay={1000} duration={2000}>
                <Section id="onde-estamos">
                    <div className="container">
                    <SectionTitle title="Onde Estamos" subtitle="Quality tours crafted by local experts."/>
                    </div>
                    <div style={{margin: '0 -1.2em'}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2838087112373!2d-43.22054148388227!3d-22.976588884976323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd59f0392569d%3A0x816dbf880e8da697!2sComplexo%20Lagoon!5e0!3m2!1spt-BR!2sbr!4v1582766550481!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
                    </div>
                </Section>
            </Fade>

    )

}

export default MapSection