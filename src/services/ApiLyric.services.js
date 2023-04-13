import axios from "axios";
import { API_DATA } from "@utils/Constants.utils";
const cio = require('cheerio-without-node-native');

//ce api permet d'obtenir la parole de une chanson, il y a limitations pour envoyer la requete
//il se peut qu'elle retourne une erreur 429 maximun request
export default async function GetLiryc(url) {
    try {
        let searchLyric = API_DATA.CORS_ANYWHERE_URL + url;

        let { data } = await axios.get(searchLyric)

        //cio permets obtenir la section html d'une page web
        const $ = cio.load(data);
        //la parole se trouve dans la section  de la page
        let lyrics = $(API_DATA.LYRIC_SECTION_HTML).text().trim();
        if (!lyrics) {
            lyrics = ''
            //obtenir le texte dans le text area
            $(API_DATA.LYRIC_SECTION_HTML_CONTAINER).each((i, elem) => {
                if ($(elem).text().length !== 0) {
                    let snippet = $(elem).html()
                        .replace(/<br>/g, '\n')
                        .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
                    lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n';
                }
            })
        }

        if (!lyrics) {
            return "";
        }

        return lyrics.trim();
    } catch (e) {
        //s'il y une erreur 429 on retourne un string vide
        return "";
    }
}