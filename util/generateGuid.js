const generateGuid = () => {
    const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);

    return `${s4()}${s4()}-${s4()}-4${s4().substring(
        1,
        5
    )}-${s4()}-${s4()}${s4()}${s4()}`.toLowerCase();
};

export { generateGuid };
