const {StyleSheet} = require("aphrodite");

const colors = {
    bg: "black",
    fg: "white",
    dark: "#181818",
    light: "#8c8c8c",
    medium: "#5c5c5c",
};

const fonts = {
    captionSize: 11,
    contentSize: 14,
    subtitleSize: 24,
    titleSize: 28,
};

const ss = StyleSheet.create({
    link: {
        color: "#4898fc",
        textDecoration: "none",
        ':hover': {
            color: "#48ccfc",
        },
    },
});

module.exports = {colors, fonts, ss};
