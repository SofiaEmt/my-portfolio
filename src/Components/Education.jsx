

const Education = () => (
    <section className="wrapper">
        <div className="dashed-border">
            <h4>Education</h4>

            <div className="paragraph">
                <p className="p-bold">Frontend Developer (YH)</p>
                <ul>
                    <li>Client communication</li>
                    <li>Project Management</li>
                    <li>Teamwork and group projects</li>
                    <li>Technical skills (See CV & work)</li>
                    <li>Design principles</li>
                    <li>etc...</li>

                </ul>
                {/*  <p><i>Technical skills (see CV), design principles, <br />several group projects, client communication,
                    <br />project management, agile development and methods</i></p> */}
                <p className="p-orange">Hyper Island, Stockholm</p>
            </div>

            <div className="paragraph">
                <p className="p-bold">Digital Conversiton Management (courses)</p>
                <ul>
                    <li>Digital media and working methods</li>
                    <li>SEO and SEM</li>
                    <li>Content marketing</li>
                    <li>Conversion tracking</li>
                </ul>
                <p className="p-orange">Sälj & Marknadshögskolan, Stockholm</p>
            </div>

            <div className="paragraph">
                <p className="p-bold">Samhälle, Media & Journalistik </p>
                <p className="p-orange">Mediagymnasiet, Nacka Strand</p>
            </div>
        </div>



        <div className="dashed-border">
            <h4>also...</h4>
            <p>Can sauna bathe for 15 min in 130°C </p>
        </div>
    </section>
);

export default Education;