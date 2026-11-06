const TAB_STYLE = Object.freeze({
    BORDERLESS: 'BORDERLESS',
    BORDERED: 'BORDERED',
});

const createTab = ({ id, title, tabStyle, defaultPosition, Content }) => {
    return {
        id,
        title,
        tabStyle,
        defaultPosition,
        Content,
    };
};

export { TAB_STYLE, createTab };
