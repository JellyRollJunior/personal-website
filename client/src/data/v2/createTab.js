const TAB_STYLE = Object.freeze({
    BORDERLESS: 'BORDERLESS',
    BORDERED: 'BORDERED',
});

const createTab = ({ title, tabStyle, defaultPosition, Content }) => {
    const id = crypto.randomUUID();

    return {
        id,
        title,
        tabStyle,
        defaultPosition,
        Content,
    };
};

export { TAB_STYLE, createTab };
