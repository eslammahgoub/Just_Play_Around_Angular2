/**
 * ALanguage
 * @constructor
 * @description []
 */
export class ALanguage {
    days: Array<string>;
    daysMin: Array<string>;
    months: Array<string>;

    constructor (days: Array<string>, daysMin: Array<string>, months: Array<string>) {
        this.days = days;
        this.daysMin = daysMin;
        this.months = months;
    }
}

export function LANGUAGES(index: string): ALanguage {
    let newMap = new Map([
        ['cs', new ALanguage(
            [ 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota', 'Neděle' ],
            [ 'Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne' ],
            [ 'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec' ]
        )] as [string, ALanguage],

        ['da', new ALanguage(
            [ 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag' ],
            [ 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø' ],
            [ 'Januar','Februar','Marts','April','Maj','Juni', 'Juli','August','September','Oktober','November','December' ]
        )] as [string, ALanguage],

        ['de', new ALanguage(
            [ 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag' ],
            [ 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So' ],
            [ 'Januar','Februar','März','April','Mai','Juni', 'Juli','August','September','Oktober','November','Dezember' ]
        )] as [string, ALanguage],

        ['en', new ALanguage(
            [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
            [ 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su' ],
            [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
        )] as [string, ALanguage],

        ['es', new ALanguage(
            [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ],
            [ 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
            [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio','Augosto','Septiembre','Octubre','Noviembre','Diciembre' ]
        )] as [string, ALanguage],

        ['fi', new ALanguage(
            [ 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai' ],
            [ 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su' ],
            [ 'Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu', 'Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu' ]
        )] as [string, ALanguage],

        ['fr', new ALanguage(
            [ 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche' ],
            [ 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di' ],
            [ 'Janvier','Février','Mars','Avril','Mai','Juin', 'Juillet','Août','Septembre','Octobre','Novembre','Decembre' ]
        )] as [string, ALanguage],

        ['hu', new ALanguage(
            [ 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap' ],
            [ 'H', 'K', 'Sz', 'Cs', 'P', 'Sz', 'V' ],
            [ 'Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December' ]
        )] as [string, ALanguage],
        
        ['it', new ALanguage(
            [ 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica' ],
            [ 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do' ],
            [ 'Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno', 'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre' ]
        )] as [string, ALanguage],

        ['jp', new ALanguage(
            [ '月曜日',	'火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日' ],
            [ '月', '火', '水', '木', '金', '土', '日' ],
            [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ]
        )] as [string, ALanguage],

        ['nl', new ALanguage(
            [ 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag' ],
            [ 'ma', 'di', 'wo', 'do', 'vr', 'za', 'zo' ],
            [ 'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December' ]
        )] as [string, ALanguage],

        ['pl', new ALanguage(
            [ 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela' ],
            [ 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'So', 'Nd' ],
            [ 'Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec', 'Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień' ]
        )] as [string, ALanguage],

        ['pt', new ALanguage(
            [ 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo' ],
            [ 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa', 'Do' ],
            [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
        )] as [string, ALanguage],

        ['ro', new ALanguage(
            [ 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică' ],
            [ 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa', 'Du' ],
            [ 'Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie' ]
        )] as [string, ALanguage],

        ['sk', new ALanguage(
            [ 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedeľa'],
            [ 'Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne' ],
            [ 'Január','Február','Marec','Apríl','Máj','Jún', 'Júl','August','September','Október','November','December' ]
        )] as [string, ALanguage],

        ['zh', new ALanguage(
            [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ],
            [ '一', '二', '三', '四', '五', '六', '日' ],
            [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ]
        )] as [string, ALanguage],

    ]);
    return newMap.get(index);
}