var topic = [
    "悠悠下午茶店",
    "吃飽飽早餐店",
    "傷心百貨地下街",
    "小雞自助餐",
    "亮亮咖啡廳",
    "K街必吃-起司漢堡"
];
var startDate = new Date();
function setMonthAndDay(startMonth, startDay){
    //一次設定好月分與日期
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);