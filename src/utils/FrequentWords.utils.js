import { NUM_FREQUENT_WORDS, NUM_CHATACTERS_FREQUENT_WORDS } from "@utils/Constants.utils";
//retoune les mots plus frequentes dans une chaine string
export default function FrequentWords(str) {
    const map = {};
    if (typeof str === "string") {

        //on filtre les string vide et les mots moins que NUM_CHATACTERS_FREQUENT_WORDS characters
        const strArr = str.split(/\s/).filter(word => word !== "").filter(word => word.length >= NUM_CHATACTERS_FREQUENT_WORDS);
        strArr.forEach(word => {
            if (map.hasOwnProperty(word)) {
                map[word]++;
            } else {
                map[word] = 1;
            }
        });
    }

    const frequencyArr = Object.keys(map).map(key => [key, map[key]]);
    frequencyArr.sort((a, b) => b[1] - a[1]);
    return frequencyArr.slice(0, NUM_FREQUENT_WORDS);
}