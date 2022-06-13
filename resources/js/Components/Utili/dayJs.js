import dayjs from 'dayjs'
import 'dayjs/locale/th'

var dayJs = {
    formatDateTH(date) {
        return dayjs(date).locale('th').add(543, 'year').format('วันที่ DD เดือน MMMM พศ. YYYY')
    },
    formatDateEN(date) {
        return dayjs(date).locale('en').format('DD MMMM YYYY')
    }
}

export default dayJs