//obtenir un item depuis le local storage
export const getItem = (key) => {
    //on valide que le key existe dans le local storage
    if (localStorage.hasOwnProperty(key))
        return JSON.parse(localStorage.getItem(key));
    else
        return {}
};
//ajouter un item dans le local storage
export const setItem = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
};