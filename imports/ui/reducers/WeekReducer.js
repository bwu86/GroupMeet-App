
/* generates array of strings for hours, can change range, currently 8 - 17 inclusive */
const hourIds = Array.from({length: 10}, (v, i) => (i+8).toString());

const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

/* creates object with all hour objects in the week */
function hoursById() {
    const hourState = {};
    //right now hour ids are formatted as "weekday_hourNumber"
    // We should probably consider using JS date object in future to generate unique ids
    for (let i = 0; i < weekdays.length; i++) {
        for (let j = 0; j < hourIds.length; j++) {
            hourState[weekdays[i].concat("_",hourIds[j])] = {
                id: weekdays[i].concat("_",hourIds[j]),
                weekday: weekdays[i],
                availability: false,
                //tasks: [] add functionality later
            }
        }
    }
    return hourState;
}

/* generates ids for all hours in the week */
function hoursAllIds() {
    const hourIdsArray = [];
    for (let i = 0; i < weekdays.length; i++) {
        for (let j = 0; j < hourIds.length; j++) {
            hourIdsArray.push(weekdays[i].concat("_",hourIds[j]));
        }
    }
    return hourIdsArray;
}

/* creates object with all weekdays containing their respective hours:
* hourId is format "weekday_hour" -> all hourIds with matching weekday contained in id:weekday obj */
function daysById() {
    let allHourIds = hoursAllIds();
    const weekState = {};
    for (let i = 0; i < weekdays.length; i++) {
        let dayHours = allHourIds.filter(hour => hour.includes(weekdays[i]));
        weekState[weekdays[i]] = {
            id: weekdays[i],
            hours: dayHours
        }
    }
    return weekState;
}

const initState = {
    days : {
      byId: daysById(),
      allIds : weekdays
    },
    hours : {
        byId : hoursById(),
        allIds : hoursAllIds()
    }
};

const WeekReducer = (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_AVAIL':
            return {
                ...state,
                hours : {
                    ...state.hours,
                    byId : {
                        ...state.hours.byId,
                        [action.id] : {
                            ...state.hours.byId[action.id],
                            availability: ![action.id].availability
                        }
                    }

                }

            };
        default:
            return state
    }
};

export default WeekReducer


