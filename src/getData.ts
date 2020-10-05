

const getData = async (API: string) => {
    let data = await fetch(API);
    let fetchData = await (data.json())
    return fetchData;
}


export default getData;
