export const formatCasesHelper = (data, selectedCounty) => {
    const cases = [{
        city: '',
        date: '',
        cases: 0,
        deaths: 0,
        habitants: 0,
    }];
    if (data.count == 0){
        cases.city = selectedCounty;
        const today = new Date(); 
        cases.date =  today;
        cases.cases = 0;
        cases.deaths = 0;
        cases.habitants = 0;

        return cases;

    }
    data.results.map((count) => {
        if (count.confirmed != 0){
            cases.cases = count.confirmed
        }else{
            cases.cases = 0
        }
        if (count.deaths != 0){
            cases.deaths = count.deaths
        }else{
            cases.deaths = 0
        }
        cases.city = count.city,
        cases.date = count.date,
        cases.habitants = count.estimated_population_2019
    });
    return cases;
};
