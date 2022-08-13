import dayjs from "dayjs";
import "dayjs/locale/th";

var dayJs = {
    formatDateTH(date) {
        if (!date) return null;
        return dayjs(date)
            .locale("th")
            .add(543, "year")
            .format("วันที่ DD เดือน MMMM พศ. YYYY");
    },
    formatDateEN(date) {
        if (!date) return null;
        return dayjs(date).locale("en").format("DD MMMM YYYY");
    },
    formatDate(date) {
        if (!date) return null;
        return dayjs(date).format("MM/DD/YYYY");
    },
    parseDate(date) {
        if (!date) return null;
        const [month, day, year] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    toFormatDateShortTH(date) {
        if (!date) return null;
        return dayjs(date).add(543, "year").format("DD/MM/YYYY");
    },
};

export default dayJs;
