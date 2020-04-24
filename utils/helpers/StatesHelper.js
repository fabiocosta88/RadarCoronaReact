export const formatStatesResponse = (list) => {
    const states = [];
    list.map((stat) => {
        return states.push({
            value: stat.state,
        });
    });
    const sorted = states;

    sorted.sort((a, b) => a.value.localeCompare(b.value))
    sorted.push({
        value: 'Geral',
    })
    return sorted;
};
