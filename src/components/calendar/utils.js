export const monthesKz = ['Каңтар','Ақпан','Наурыз','Сәуір','Мамыр','Маусым','Шілде','Тамыз','Қыркүйек','Қазан','Қараша','Желтоқсан'];
export const monthesRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
export const monthesEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const monthesFr = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
export const weekKz = ['Дүйсенбі','Сейсенбі','Сәрсенбі','Бейсенбі','Жұма','Сенбі','Жексенбі'];
export const weekRu = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
export const weekEn = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
export const weekFr = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

export const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
export const shortWeekName = (name) => name.slice(0,3);

export const getCurrentMonth = (lang, monthIndex) => {
    switch (lang) {
        case 'ru':
            return monthesRu[monthIndex];
        case 'kz':
            return monthesKz[monthIndex];
        case 'fr':
            return monthesFr[monthIndex];
        default:
            return monthesEn[monthIndex];
    }
}

export const getMonthIndex = (month, lang) => {
    let index = 0;
    switch (lang) {
        case 'ru':
            for (const item of monthesRu) {
                if (item === month) return index;
                index++; 
            }
            break;
        case 'kz':
            for (const item of monthesKz) {
                if (item === month) return index;
                index++; 
            }
            break;
        case 'fr':
            for (const item of monthesFr) {
                if (item === month) return index;
                index++; 
            }
            break;
        default:
            for (const item of monthesEn) {
                if (item === month) return index;
                index++; 
            }
            break;
    }
}

export const getCurrentWeek = (lang, fromSunday) => {
    if (fromSunday) {
        switch (lang) {
            case 'ru':
                let weekRuFromSunday = weekRu.map(item => item);
                weekRuFromSunday.pop();
                weekRuFromSunday.unshift('Воскресенье');
                return weekRuFromSunday;
            case 'kz':
                let weekKzFromSunday = weekKz.map(item => item);
                weekKzFromSunday.pop();
                weekKzFromSunday.unshift('Жексенбі');
                return weekKzFromSunday;
            case 'fr':
                let weekFrFromSunday = weekKz.map(item => item);
                weekFrFromSunday.pop();
                weekFrFromSunday.unshift('Dimanche');
                return weekFrFromSunday;
            default:
                let weekEnFromSunday = weekEn.map(item => item);
                weekEnFromSunday.pop();
                weekEnFromSunday.unshift('Sunday')
                return weekEnFromSunday;
        }
    } else {
        switch (lang) {
            case 'ru':
                return weekRu;
            case 'kz':
                return weekKz;
            case 'fr':
                return weekFr;
            default:
                return weekEn;
        }
    }
}

export const years = (limit, onlyPast) => {
    let current = new Date().getFullYear();
    let years = [];
    
    if (!onlyPast) {
        for (let i = current + limit; i > current; i--) {
            years.push(i);
        }
        for (let i = 0; i <= limit; i++) {
            years.push(current - i)
        }
    } else {
        for (let i = 0; i <= limit; i++) {
            years.push(current - i)
        }
    }
    return years;
}

export const monthes = (lang) => {
    switch (lang) {
        case 'ru':
            return monthesRu;
        case 'kz':
            return monthesKz;
        case 'fr':
            return monthesFr;
        default:
            return monthesEn;
    }
}