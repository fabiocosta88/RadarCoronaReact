export const formatCountriesResponse = (countries) => {
    const country = [];
    countries.map((count) => {
        return country.push({
            value: count.country,
        });
    });
    return country;
};
