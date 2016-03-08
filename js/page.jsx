const React = require("react");
const ReactDOM = require("react-dom");
const {StyleSheet, css} = require("aphrodite");

const {colors, fonts, ss} = require("./shared.js");
const PageContent = require("./pagecontent.jsx");


const normalizeTabName = (name) => {
    return name.toLowerCase().replace(" ", "-");
};

const Header = React.createClass({
    render: function() {
        return <div className={css(styles.headerContainer)}>
            <div className={css(styles.nameBlock)}>
                <div className={css(styles.name)}>
                    Stephanie C. Weber, Ph.D.
                </div>
                <div>Adjunct Lecturer</div>
                <div>Department of Biology</div>
                <div>Santa Clara University</div>
            </div>
            <div>
                <img src="images/photo.png" className={css(styles.portrait)}/>
            </div>
        </div>;
    },
});

const Footer = React.createClass({
    render: function() {
        return <div className={css(styles.licenseContainer)}>
            <div className={css(styles.licenseImage)}>
                <a
                    href='http://creativecommons.org/licenses/by/4.0/'
                    rel='license'
                >
                    <img
                        alt='Creative Commons License'
                        src='http://i.creativecommons.org/l/by/4.0/88x31.png'
                        style={{borderWidth: 0}}
                    />
                </a>
            </div>
            <div className={css(styles.licenseText)}>
                Text and images on this site are licensed under
                a <a
                    className={css(ss.link)}
                    href='http://creativecommons.org/licenses/by/4.0/'
                    rel='license'
                >
                    Creative Commons Attribution 4.0 International License
                </a>.
            </div>
        </div>;
    },
});

const NavItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func,
        selectedName: React.PropTypes.string,
    },
    onClick: function(event) {
        if (this.props.onClick) {
            this.props.onClick(normalizeTabName(this.props.name));
            event.preventDefault();
            return false;
        }
        return true;
    },
    render: function() {
        const normalizedName = normalizeTabName(this.props.name);
        return <a
            className={
                css(
                    styles.navItem,
                    styles.navLinkText,
                    (normalizedName === this.props.selectedName) &&
                    styles.selectedNavItem)}
            href={`/newindex.html?${normalizeTabName(this.props.name)}`}
            onClick={this.onClick}
        >
            <span className={css(styles.navLinkText)}>{this.props.name}</span>
        </a>;
    },
});

const Navbar = React.createClass({
    propTypes: {
        onSelectSection: React.PropTypes.func,
        selected: React.PropTypes.string,
    },
    render: function() {
        return <div className={css(styles.navbar)}>
            <NavItem
                name="Home"
                onClick={this.props.onSelectSection}
                selectedName={this.props.selected}
            />
            <NavItem
                name="Research"
                onClick={this.props.onSelectSection}
                selectedName={this.props.selected}
            />
            <NavItem
                name="Teaching"
                onClick={this.props.onSelectSection}
                selectedName={this.props.selected}
            />
            <NavItem
                name="Publications"
                onClick={this.props.onSelectSection}
                selectedName={this.props.selected}
            />
            <NavItem
                name="CV"
                onClick={this.props.onSelectSection}
                selectedName={this.props.selected}
            />
            <NavItem
                name="Contact"
                onClick={this.props.onSelectSection}
                selectedName={this.props.selected}
            />
            <NavItem
                name="Join us!"
                onClick={this.props.onSelectSection}
                selectedName={this.props.selected}
            />
        </div>;
    },

});

const Page = React.createClass({

    getInitialState: function() {
        return {
            selected: this.selectedFromURL(),
        };
    },
    componentDidMount: function() {
        window.addEventListener("popstate", this.onPopState);
    },

    componentWillUnmount: function() {
        window.removeEventListener("popstate", this.onPopState);
    },

    onPopState: function() {
        this.setState({selected: this.selectedFromURL()});
    },

    selectedFromURL: function() {
        if (window.location.search.length > 0) {
            return window.location.search.slice(1);
        }
        return "home";
    },

    selectSection: function(section) {
        if (window.location.search.length === 0 ||
            window.location.search.slice(1) !== section) {
            window.history.pushState(
                this.state.selected,
                null,
                this.urlFromSelected(section));
        }
        this.setState({selected: section});
    },

    urlFromSelected: function(selected) {
        return `/newindex.html?${selected}`;
    },

    render: function() {
        const Content = PageContent[this.state.selected];
        return <div className={css(styles.page)}>
            <div className={css(styles.pageInner)}>
                <Header />
                <Navbar
                    onSelectSection={this.selectSection}
                    selected={this.state.selected}
                />
                <div className={css(styles.contentContainer)}>
                    {Content ? <Content /> : null}
                </div>
                <Footer />
            </div>
        </div>;
    },
});

Page.init = function(domNode) {
    ReactDOM.render(<Page />, domNode);
};

const styles = StyleSheet.create({
    contentContainer: {
        border: `1px solid ${colors.medium}`,
        borderRadius: 3,
        boxSizing: "border-box",
        marginBottom: 40,
        minWidth: 400,
        padding: 15,
        width: "100%",
    },
    headerContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
    },
    licenseContainer: {
        alignItems: "flex-start",
        bottom: 0,
        boxSizing: "border-box",
        display: "flex",
        fontSize: fonts.captionSize,
        marginBottom: 20,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        position: "absolute",
    },
    licenseText: {
        marginLeft: 10,
    },
    navLinkText: {
        textDecoration: "none",
        color: "inherit",
    },
    name: {
        fontSize: 36,
    },
    nameBlock: {
        marginBottom: 20,
        marginTop: 20,
        minWidth: 450,
    },
    navbar: {
        alignItems: "center",
        backgroundColor: colors.dark,
        borderRadius: 3,
        boxSizing: "border-box",
        color: colors.light,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginBottom: 20,
        marginTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
        width: "100%",
    },
    navItem: {
        alignItems: "center",
        display: "flex",
        height: 50,
        justifyContent: "center",
        paddingLeft: 15,
        paddingRight: 15,
    },
    page: {
        backgroundColor: colors.bg,
        boxSizing: "border-box",
        color: colors.fg,
        fontFamily: ["Open Sans", "sans-serif"],
        fontSize: fonts.contentSize,
        margin: 0,
        minHeight: "100vh",
        padding: 50,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 75,
        paddingRight: 75,
        position: "relative",
        width: "100%",
    },
    pageInner: {
        margin: "0 auto",
        maxWidth: 1170,
    },
    portrait: {
        height: 200,
    },
    selectedNavItem: {
        backgroundColor: colors.bg,
        color: colors.fg,
    },
});

module.exports = Page;
