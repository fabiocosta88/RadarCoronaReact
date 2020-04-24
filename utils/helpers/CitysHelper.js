export const formatCitiesResponse = (cities) => {
    const city = [];
    cities.map((count, index) => {
        return (
            city.push({
                id: index,
                name: count.nome,
            })
        ) ;
    });
    return city;
};


