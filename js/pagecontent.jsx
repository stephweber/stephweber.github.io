const React = require("react");
const {StyleSheet, css} = require("aphrodite");

const {fonts, ss} = require("./shared.js");

const Home = React.createClass({
    render: function() {
        return <div>
            <div className={css(styles.title)}>
                Spatial Organization of Living Systems
            </div>
            <p>
                Both prokaryotic and eukaryotic cells are crowded with
                macromolecules that form highly ordered yet dynamic
                structures. While advances in fluorescence microscopy enable us
                to visualize this spatiotemporal heterogeneity, the physical
                mechanisms underlying intracellular organization remain largely
                unknown. I am interested in understanding how biological
                systems establish and dynamically regulate spatial order in the
                cell and how these processes affect the growth, size and health of 
                whole organisms.
            </p>
            <div className={css(styles.imageRow)}>
                <div className={css(styles.imageWithCaption)}>
                    <img
                        className={css(styles.image)}
                        src="images/Ecoli_scaleBar.png"
                    />
                    <div className={css(styles.caption)}>
                        <span className={css(styles.latinName)}>
                            E. coli
                        </span> chromosome dynamics
                    </div>
                </div>
                <div>
                    <img
                        className={css(styles.image)}
                        src="images/OD70xfib1_8cell_scaleBar.png"
                    />
                    <div className={css(styles.caption)}>
                        Organelle assembly during development
                    </div>
                </div>
                <div>
                    <img
                        className={css(styles.image)}
                        src="images/wormGrowthStages.png"
                    />
                    <div className={css(styles.caption)}>
                        Size control in <span className={css(styles.latinName)}>
                            C. elegans
                        </span>
                    </div>
                </div>
            </div>

        </div>;
    },
});

const Research = React.createClass({
    render: function() {
        return <div>
            <div className={css(styles.title)}>
                Research
                <div className={css(styles.researchSection)}>
                    <div className={css(styles.researchContent)}>
                        <div className={css(styles.researchText)}>
                            <div className={css(styles.subtitle)}>
                                Organelle Assembly and Size Control
                            </div>
                            As a postdoc in the <a
                                href={links.brangLab}
                                className={css(ss.link)}
                            >Brangwynne lab</a>, I investigated
                            size control mechanisms in the nematode
                            Caenorhabditis elegans. Using 3D confocal
                            microscopy and quantitative image analysis, I
                            characterized the assembly and growth dynamics of
                            the nucleolus in developing embryos. The nucleolus
                            is a non-membrane bound organelle that produces
                            ribosomes, molecular machines essential for cell
                            growth and size homeostasis. I discovered that
                            these organelles are governed by a
                            concentration-dependent phase transition, in which
                            soluble components condense into liquid-like
                            droplets only above a threshold concentration. In
                            collaboration with <a
                                href={links.joel}
                                className={css(ss.link)}
                            >Joel Berry</a> and <a
                                href={links.mikko}
                                className={css(ss.link)}
                            >Mikko Haataja</a>, I found that nucleoli coarsen
                            via Brownian coalescence and Ostwald
                            ripening. Furthermore, RNA transcription appears to
                            stabilize nucleoli and accelerate
                            coarsening. Thus, non-equilibrium biological
                            activity may modulate classical phase separation to
                            regulate organelle size (and activity) in response
                            to developmental or environmental conditions.
                        </div>
                        <div className={css(styles.researchImageSection)}>
                            <img
                                className={css(styles.researchImage)}
                                src="images/fib1_8cell.png"
                            />
                            <div className={css(styles.caption, styles.right)}>
                                Maximum intensity projection of 3D confocal
                                stack of an 8-cell
                                stage <span className={css(styles.latinName)}>
                                C. elegans
                                </span> embryo
                                expressing FIB-1::GFP
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css(styles.researchSection)}>
                    <div className={css(styles.researchContent)}>
                        <div className={css(styles.researchText)}>
                            <div className={css(styles.subtitle)}>
                                Anomalous Diffusion of Chromosomal Loci
                            </div>
                            As a graduate student in the <a
                                href={links.theriot}
                                className={css(ss.link)}
                            >Theriot lab</a>, I explored the physical and
                            biological mechanisms underlying macromolecular
                            motion in vivo. Segments of chromosomal DNA jiggle
                            in place in the crowded bacterial cytoplasm. By
                            tracking the position of these loci over time, I
                            found a robust subdiffusive scaling law for the
                            mean square displacement. To identify the source of
                            this anomalous behavior, I collaborated
                            with <a
                                href={links.spak}
                                className={css(ss.link)}
                            >Andy Spakowitz</a> to develop analytical theory
                            and Brownian dynamics simulations of polymers under
                            various physical environments. Our experimental and
                            theoretical observations are consistent with a
                            fractional Langevin motion model, indicating that
                            the viscoelastic properties of the cytoplasm
                            significantly affect intracellular transport
                            processes.
                        </div>
                        <div
                            className={css(
                                    styles.researchImageSection,
                                    styles.researchImageSectionSideBySide)}
                        >
                            <img
                                className={css(
                                        styles.researchImage,
                                        styles.h177)}
                                src="images/phaseFluor84.png"
                            />
                            <div
                                className={css(styles.caption,
                                               styles.sideCaption)}
                            >
                                Fluorescent and phase contrast images of
                                an <span className={css(styles.latinName)}>
                                E. coli</span> cell with the replicated 84'
                                locus visualized by parS/GFP-ParB.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css(styles.researchSection)}>
                    <div className={css(styles.researchContent)}>
                        <div className={css(styles.researchText)}>
                            <div className={css(styles.subtitle)}>
                                Nonthermal ATP-dependent Fluctuations
                            </div>
                            Chromosomal locus motion is significantly reduced
                            when ATP synthesis is inhibited. Furthermore, the
                            temperature dependence of locus motion is steeper
                            in untreated cells than in energy-depleted
                            cells. These observations suggest that
                            ATP-dependent enzymatic activity, in addition to
                            thermal fluctuations, contribute to the molecular
                            agitation driving (sub)diffusion in the cell.
                        </div>
                        <div
                            className={css(
                                    styles.researchImageSection)}
                        >
                            <img
                                className={css(
                                        styles.researchImage,
                                        styles.h265)}
                                src="images/superthermal.svg"
                            />
                            <div
                                className={css(styles.caption, styles.right)}
                            >
                                The apparent diffusion coefficient
                                (D<sub>app</sub>) of chromosomal loci increases
                                superthermally with temperature in untreated
                                cells.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    },
});

const Teaching = React.createClass({
    render: function() {
        return <div>
            <div className={css(styles.title)}>
                Teaching
            </div>
            <div className={css(styles.subtitle)}>
                Teaching Philosophy
            </div>
            <p>
                As a teacher, my goal is to develop creative, independent
                problem-solvers who are curious about the natural world. My
                students learn the process of science, as well as specific
                knowledge. They practice critical thinking skills that will be
                valuable both within and beyond the classroom. To help my
                students reach these goals, I create an interactive classroom
                that encourages questions, promotes discussions and stimulates
                debates. I aim to provide a challenging but supportive
                environment where students can learn from each other as well as
                from me.
            </p>
            <div className={css(styles.subtitle)}>
                Evaluations
            </div>
            <div className={css(styles.evaluation)}>
                <p>
                    "Fantastic instructor! Really cares about her students and
                    their success."
                </p>
                <p className={css(styles.source)}>
                    - student evaluation, Biol18, Fall 2015
                </p>
            </div>
            <div className={css(styles.evaluation)}>
                <p>
                    "The strongest part of this course was Steph Weber. She is
                    the most engaged and brilliant person I have met at
                    Stanford."
                </p>
                <p className={css(styles.source)}>
                    - student evaluation, BioE41, Fall 2010
                </p>
            </div>
            <div className={css(styles.evaluation)}>
                <p>
                    "Her genuine enthusiasm for the material also shines through
                    her teaching, which was very clearly guided by goals she
                    presented clearly to the class."
                </p>
                <p className={css(styles.source)}>
                    - McGraw Center for Teaching and Learning, Fall 2014
                </p>
            </div>
            <div className={css(styles.subtitle)}>
                Courses Taught
            </div>
            BIOL175, Molecular Biology, Santa Clara University
            <br />
            BIOL25, Investigations in Cell and Molecular Biology, Santa Clara University
            <br />
            BIOL181, Physical Biology of the Cell, Santa Clara University
            <br />
            BIOL18, Exploring Biotechnology, Santa Clara University
            <br />
            CBE433, Mechanics and Dynamics of Soft Living Matter, Princeton
            University
            <br />
            Physiology, Marine Biological Laboratory, Woods Hole, MA
            <br />
            BIOE41, Physical Biology of Macromolecules, Stanford University
            <br />
            BIO109, The Human Genome and Disease, Stanford University
            <br />
            <img
                className={css(styles.teachingImage)}
                src="images/teaching.jpg"
            />
       </div>;
    },
});

const Publication = React.createClass({
    propTypes: {
        authors: React.PropTypes.string,
        commentary: React.PropTypes.string,
        commentaryLink: React.PropTypes.string,
        itemType: React.PropTypes.any,
        journal: React.PropTypes.string,
        pmid: React.PropTypes.string,
        postScript: React.PropTypes.string,
        text: React.PropTypes.node,
        volume: React.PropTypes.string,
        year: React.PropTypes.string,
    },
    render: function() {
        const pubmedLink = this.props.pmid ? <span>(
           <a
               className={css(ss.link)}
               href={`http://www.ncbi.nlm.nih.gov/pubmed/${this.props.pmid}`}
           >
               pmid: {this.props.pmid}
           </a>)
        </span> : null;
        const hasCommentary = this.props.commentary ||
                              this.props.commentaryLink;
        const commentaryHref = (
            this.props.commentaryLink ||
            `http://www.ncbi.nlm.nih.gov/pubmed/${this.props.commentary}`);
        const commentary = hasCommentary ? <span>(
            <a
                className={css(ss.link)}
                href={commentaryHref}
            >
                commentary
            </a>)
        </span> : null;
        const Item = this.props.itemType;
        return <Item className={css(styles.publication)}>
            <span>{this.props.authors} ({this.props.year})</span>
            <span> {this.props.text}, </span>
            <span className={css(styles.source)}>
                {this.props.journal}
            </span>, <span className={css(styles.volume)}>
                {this.props.volume}
            </span>{this.props.postScript ? 
                    `, ${this.props.postScript}` : 
                    null}. {pubmedLink} {commentary}
        </Item>;
    },
});

const PublicationContent = React.createClass({
    propTypes: {
        itemType: React.PropTypes.any,
        wrapperType: React.PropTypes.any,
    },
    render: function() {
        const Wrapper = this.props.wrapperType;
        return <Wrapper>
            <Publication
                itemType={this.props.itemType}
                journal="Cell Reports"
                volume="In press"
                authors={
                    "Uppaluri, S., Weber, S. C., and Brangwynne, C. P."
                        }
                year="2016"
                text={
                    "Hierarchical size scaling during " +
                        "multicellular growth and development"
                        }
            />
            <Publication
                itemType={this.props.itemType}
                journal="Proceedings of the National Academy of Sciences"
                volume="112"
                postScript="E5237. * Co-first authors"
                pmid="26351690"
                authors={
                    "Berry, J. M.*, Weber, S. C.*, Vaidya, N. Haataja, M." +
                            " and Brangwynne, C. P."
                        }
                year="2015"
                text={
                    "RNA transcription modulates phase " +
                        "transition-driven nuclear body assembly"
                        }
            />
            <Publication
                itemType={this.props.itemType}
                journal="Current biology"
                volume="25"
                postScript="641"
                pmid="25702583"
                authors="Weber, S. C., and Brangwynne, C. P."
                year="2015"
                text={
                        "Inverse size scaling of the nucleolus by a " +
                        "concentration-dependent phase transition"
                        }
            />
            <Publication
                itemType={this.props.itemType}
                journal="Cell"
                volume="149"
                postScript="1188"
                pmid="22682242"
                authors="Weber, S. C., and Brangwynne, C. P."
                year="2012"
                text="Getting RNA and Protein in Phase"
            />
            <Publication
                itemType={this.props.itemType}
                journal="Biophysical Journal"
                volume="102"
                postScript="2443"
                pmid="22713559"
                authors="Weber, S. C., Spakowitz, A. J. and Theriot, J. A."
                year="2012"
                text={
                    "Analytical tools to distinguish the effects " +
                        "of localization error, confinement and medium " +
                        "elasticity on the velocity autocorrelation " +
                        "function"
                        }
            />
            <Publication
                itemType={this.props.itemType}
                journal="Proceedings of the National Academy of Sciences"
                volume="109"
                postScript="7338"
                pmid="22517744"
                commentary="22562796"
                authors="Weber, S. C., Spakowitz, A. J. and Theriot, J. A."
                year="2012"
                text={<span>
                        Nonthermal ATP-dependent fluctuations contribute to
                        the <span className={css(styles.latinName)}>
                            in vivo
                        </span> motion of chromosomal loci</span>
                }
            />
            <Publication
                itemType={this.props.itemType}
                journal="Physical Review E"
                volume="82"
                postScript="011913"
                pmid="20866654"
                authors="Weber, S. C., Theriot, J. A. and Spakowitz, A. J."
                year="2010"
                text={<span>
                        Subdiffusive motion of a polymer composed of
                        subdiffusive monomers
                </span>}
            />
            <Publication
                itemType={this.props.itemType}
                journal="Molecular Cell"
                volume="39"
                postScript="1"
                pmid="20603069"
                authors="Weber, S. C. and Theriot, J. A."
                year="2010"
                text={<span>
                        Mu gets in the loop
                </span>}
            />
            <Publication
                itemType={this.props.itemType}
                journal="Physical Review Letters"
                volume="104"
                postScript="238102"
                pmid="20867274"
                commentaryLink={
                    "http://physics.aps.org/synopsis-for/10.1103" +
                                "/PhysRevLett.104.238102"}
                authors="Weber, S. C., Spakowitz, A. J. and Theriot, J. A."
                year="2010"
                text={<span>
                        Bacterial chromosomal loci move subdiffusively through
                        a viscoelastic cytoplasm
                </span>}
            />
        </Wrapper>;
    },
});

const Publications = React.createClass({
    render: function() {
        return <div>
            <div className={css(styles.title)}>
                Publications
            </div>
            <PublicationContent
                itemType={'li'}
                wrapperType={'ul'}
            />
            <a className={css(ss.link)} 
               href='http://scholar.google.com/citations?hl=en&user=mZc5jwcAAAAJ'
            >
                Google Scholar Profile
            </a>
        </div>;

    },
});

const CVItem = React.createClass({
    propTypes: {
        date: React.PropTypes.node,
        description: React.PropTypes.node,
        text: React.PropTypes.node,
    },
    render: function() {
        return <div className={css(styles.cvItem)}>
            <div className={css(styles.cvTextWithDescription)}>
                <div className={css(styles.cvText)}>
                    {this.props.text}
                </div>
                {this.props.description ?
                <div className={css(styles.cvDescription)}>
                    {this.props.description}
                </div> : null}
            </div>
            <div className={css(styles.cvDate)}>
                {this.props.date}
            </div>
        </div>;
    },
});

const CVSection = React.createClass({
    propTypes: {
        children: React.PropTypes.any,
        name: React.PropTypes.string,
    },

    render: function() {
        return <div className={css(styles.cvSection)}>
            <div className={css(styles.subtitle)}>
                 {this.props.name}
            </div>
            {this.props.children}
        </div>;
    },
});

const CV = React.createClass({
    render: function() {
        const santaClaraTeaching = <div>
            <div>BIOL175 Molecular Biology</div>
            <div>BIOL25 Investigations in Cell and Molecular Biology</div>
            <div>BIOL181 Physical Biology of the Cell</div>
            <div>BIOL18 Exploring Biotechnology</div>
        </div>;
        const stanfordTeaching = <div>
            <div>BIOE41 Physical Biology of Macromolecules</div>
            <div>BIO109 The Human Genome and Disease</div>
        </div>;
        return <div className={css(styles.cv)}>
            <div className={css(styles.subtitle)}>
                 Stephanie C. Weber
            </div>
            <ContactInfo hideName={true} />
            <CVSection name="Education">
                <CVItem
                    date="2011"
                    text="Ph.D. Biochemistry, Stanford University"
                />
                <CVItem
                    date="2006"
                    text={<span>
                        B.S. Biology, B.S. Chemistry, <span
                            className={css(styles.latinName)}
                        >
                            summa cum laude
                        </span>, Duke University
                    </span>}
                />
            </CVSection>
            <CVSection name="Research Experience">
                <CVItem
                    date="2011-2015"
                    text={"Postdoctoral fellow with Cliff Brangwynne, " +
                          "Princeton University"}
                    description={<span>
                        An intracellular phase transition couples nucleolar
                        size with cell size in early <span
                            className={css(styles.latinName)}
                        >C. elegans</span> embryos.
                    </span>}
                />
                <CVItem
                    date="2007-2011"
                    text={"Graduate student with Julie Theriot, " +
                          "Stanford Univeristy"}
                    description={<span>
                        Macromolecular motion <span
                            className={css(styles.latinName)}
                        >in vivo</span>: anomalous diffusion through an
                        "active" viscoelastic medium
                    </span>}
                />
            </CVSection>
            <CVSection name="Honors, Awards, and Fellowships">
                <CVItem
                    date="2012-2015"
                    text="Damon Runyon Postdoctoral Fellowship"
                />
                <CVItem
                    date="2012"
                    text={"Jane Coffin Childs Memorial Fund Postdoctoral " +
                          "Fellowship (declined)"}
                />
                <CVItem
                    date="2012"
                    text={"Life Sciences Research Foundation Postdoctoral " +
                          "Fellowship (declined)"}
                />
                <CVItem
                    date="2011"
                    text="Bioengineering Outstanding Teaching Assistant Award"
                />
                <CVItem
                    date="2011"
                    text="Harold M. Weintraub Graduate Student Award"
                    description={"National award recognizing outstanding " +
                                 "achievement in graduate studies in the " +
                                 "biological sciences"}
                />
                <CVItem
                    date="2008-2011"
                    text="NSF Graduate Research Fellowship"
                />
                <CVItem
                    date="2006"
                    text="Graduation with Distinction in Biology, Chemistry"
                />
                <CVItem
                    date="2005"
                    text="Faculty Scholar Award"
                    description={"Highest honor bestowed upon a Duke " +
                                 "undergraduate recognizing intellectual " +
                                 "leadership and scholarly accomplishment"}
                />
                <CVItem
                    date="2005"
                    text="Phi Beta Kappa"
                />
                <CVItem
                    date="2005"
                    text="Deans' Summer Research Fellowship"
                />
                <CVItem
                    date="2004"
                    text="GEBS/NSF REU Summer Scholars Program"
                />
                <CVItem
                    date="2003"
                    text="Howard Hughes Research Fellows Program"
                />
            </CVSection>
            <CVSection name="Publications">
                <PublicationContent
                    itemType={'div'}
                    wrapperType={'div'}
                />
            </CVSection>
            <CVSection name="Invited Talks">
                <div className={css(styles.talk)}>
                    Weber, S. C., Berry, J. M., Vaidya, N., Haataja, M. and
                    Brangwynne, C. P. (2015) RNA transcription modulates phase
                    transition-driven nucleolar assembly, American Society for
                    Cell Biology, Annual Meeting.
                </div>
                <div className={css(styles.talk)}>
                    Weber, S. C. and Brangwynne, C. P. (2014) Nucleolar
                    assembly and growth are governed by a
                    concentration-dependent phase transition, American Society
                    for Cell Biology, Annual Meeting.
                </div>
                <div className={css(styles.talk)}>
                    Weber, S. C. and Brangwynne, C. P. (2014) Inverse size
                    scaling of the nucleolus by a concentration-dependent phase
                    transition, Biophysical Society, Disordered Motifs and
                    Domains in Cell Control.
                </div>
                <div className={css(styles.talk)}>
                    Weber, S. C. and Brangwynne, C. P. (2014) Nucleolar size
                    and assembly is governed by a concentration-dependent phase
                    transition, Gordon Research Conference,
                    Post-Transcriptional Gene Regulation.
                </div>
                <div className={css(styles.talk)}>
                    Weber, S. C., Spakowitz, A. J. and Theriot, J. A (2010)
                    ATP-dependent fluctuations drive macromolecular
                    motion <span className={css(styles.latinName)}>
                        in vivo
                    </span>, American Society for Cell Biology, Annual
                    Meeting.
                </div>
            </CVSection>
            <CVSection name="Teaching Experience">
                <CVItem
                    date="2015-2016"
                    text="Adjunct Lecturer, Department of Biology, Santa Clara University"
                    description={santaClaraTeaching}
                />
                <CVItem
                    date="2013-2015"
                    text="Teaching Transcript Program, Princeton University"
                    description="Pedagogical training at The McGraw Center for Teaching and Learning"
                />
                <CVItem
                    date="2012, 2014"
                    text="Guest Lecturer, Princeton University"
                    description={"CBE433/533 Mechanics and Dynamics of Soft Living Matter"}
                />
                <CVItem
                    date="2008, 2010"
                    text="Teaching Assistant, Stanford University"
                    description={stanfordTeaching}
                />
                <CVItem
                    date="2008"
                    text="Teaching Assistant, Marine Biological Laboratory, Woods Hole, MA"
                    description="Physiology Course"
                />
            </CVSection>
            <CVSection name="Service">
                <CVItem
                    date="2015"
                    text="Women in Cell Biology"
                    description={"Served as a table leader for a Career " +
                                 "Discussion Roundtable at the American " +
                                 "Society for Cell Biology's Annual Meeting."}
                />
                <CVItem
                    date="2013-2015"
                    text="Princeton Postdoc Council"
                    description={"Served as liaison between postdocs and " +
                                 "administration; organized professional " +
                                 "development and social events for the " +
                                 "postdoctoral community at Princeton"}
                />
                <CVItem
                    date="2013-2015"
                    text="Mentoring Program"
                    description={"Coordinated mentoring relationships " +
                                 "between postdocs and graduate students, " +
                                 "in collaboration with Graduate Women in " +
                                 "Science and Engineering (GWISE)"}
                />
                <CVItem
                    date="2012-2015"
                    text="Outreach"
                    description={"Designed and delivered lectures and lab " +
                                 "activities for middle school students " +
                                 "at Stuart Country Day School in " +
                                 "Princeton, NJ and Kilmer Elementary " +
                                 "School in Trenton, NJ"}
                />
            </CVSection>
            <hr />
            <a className={css(ss.link)} href="Weber_CV.pdf">PDF version</a>
        </div>;
    },
});

const ContactInfo = React.createClass({
    propTypes: {
        hideName: React.PropTypes.boolean,
    },
    render: function() {
        return <div>
            {this.props.hideName ? null : <div>Stephanie C. Weber</div>}
            Stewart Biology Building, W5/15
            <br />
            1205 Avenue Docteur Penfield
            <br />
            Montreal, QC H3A 1B1
            <br />
            (514) 398-2042
            <br />
            <a
                className={css(ss.link)}
                href="mailto:steph.weber@mcgill.ca"
            >
                steph.weber@mcgill.ca
            </a>
        </div>;
    },
});

const Contact = React.createClass({
    render: function() {
        return <div>
            <div className={css(styles.title)}>
                Contact
            </div>
            <ContactInfo />
        </div>;
    },
});

const JoinUs = React.createClass({
    render: function() {
        return <div>
            <div className={css(styles.title)}>
                Join us!
            </div>
            <div className={css(styles.researchContent)}>
                <div className={css(styles.researchText)}>
                    We are actively recruiting students and postdocs to join
                    our interdisciplinary team. If you are passionate about
                    science and eager to address challenging problems at the
                    interface of cell biology and physics, then contact <a
                        className={css(ss.link)}
                        href="mailto:steph.weber@mcgill.ca"
                    >Steph</a> to discuss projects and available positions.
                </div>
                <div
                    className={css(
                            styles.researchImageSection)}
                >
                    <img
                        className={css(
                                styles.researchImage,
                                styles.montrealImage)}
                        src="images/montreal.jpg"
                    />
                    <div
                        className={css(styles.caption, styles.right)}
                    >
                        McGill University is located in the heart of Montreal.
                    </div>
                </div>
            </div>

        </div>;
    },

});

const links = {
    brangLab: "http://www.princeton.edu/cbe/people/faculty/brangwynne/group/",
    joel: "http://www.princeton.edu/~jmberry/",
    mikko: "http://rsdavis.mycpanel.princeton.edu/haatajagroup/",
    spak: "http://www.stanford.edu/~ajspakow/index.html",
    theriot: "http://cmgm.stanford.edu/theriot/",
};

const styles = StyleSheet.create({
    caption: {
        fontSize: fonts.captionSize,
    },
    cv: {
        maxWidth: "70%",
    },
    cvDate: {
        flexBasis: 125,
        flexShrink: 0,
    },
    cvDescription: {
        paddingLeft: 25,
    },
    cvItem: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 10,
    },
    cvSection: {
        marginTop: 20,
    },
    cvTextWithDescription: {
        flexBasis: "100%",
        flexShrink: 1,
        marginRight: 100,
    },
    evaluation: {
        marginBottom: 20,
    },
    h265: {
        maxHeight: 265,
        maxWidth: 331,
    },
    h177: {
        minHeight: 177,
        minWidth: 183,
    },
    image: {
        height: 170,
    },
    imageRow: {
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    imageWithCaption: {
        marginBottom: 20,
    },
    latinName: {
        fontStyle: "italic",
    },
    montrealImage: {
        height: 300,
        width: 400,
    },
    publication: {
        marginBottom: 10,
        marginTop: 10,
    },
    researchContent: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        '@media (max-width: 1119px)': {
            flexDirection: "column",
        },
    },
    researchImageSection: {
        alignItems: "flex-end",
        display: "flex",
        flexBasis: 400,
        flexDirection: "column",
        justifyContent: "space-around",
        marginBottom: 10,
        marginTop: 10,
        maxWidth: "35%",
        minWidth: 400,
        '@media (max-width: 1119px)': {
            flexBasis: "auto",
        },
    },
    researchImageSectionSideBySide: {
        flexBasis: 400,
        flexDirection: "row",
        alignItems: "center",
    },
    researchSection: {
        paddingBottom: 20,
        paddingTop: 20,
        ':not(:last-of-type)': {
            borderBottom: "1px solid white",
        },
    },
    researchText: {
        flexBasis: "auto",
        flexGrow: 1,
        fontSize: fonts.contentSize,
        '@media (min-width: 1120px)': {
            flexBasis: 525,
            maxWidth: 525,
        },
        minWidth: 150,
    },
    right: {
        textAlign: "right",
    },
    sideCaption: {
        marginLeft: 20,
    },
    source: {
        fontStyle: "italic",
    },
    subtitle: {
        fontSize: fonts.subtitleSize,
        marginBottom: 5,
        marginTop: 5,
    },
    talk: {
        marginBottom: 10,
        marginTop: 10,
    },
    teachingImage: {
        height: 300,
        marginTop: 40,
        width: 400,
    },
    title: {
        fontSize: fonts.titleSize,
        marginBottom: 20,
    },
    volume: {
        fontWeight: "bold",
    },
});

module.exports = {
    home: Home,
    research: Research,
    teaching: Teaching,
    publications: Publications,
    cv: CV,
    contact: Contact,
    "join-us!": JoinUs,
};
