import React from "react";
import Card from "./Card";
import moment from "moment";
const CardList = function ({ weather, city }) {
    console.log(weather);
    const getImg = (iconNumber) => {
        if (iconNumber < 10) {
            iconNumber = '0' + iconNumber
        }
        return (`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`)
    }

    return (
        <div>
            {
                weather.DailyForecasts.map((_user, i) => {
                    return <Card
                        city={city}
                        Date={moment(new Date(weather.DailyForecasts[i].Date)).format('LL')}
                        Day={weather.DailyForecasts[i].Day.IconPhrase}
                        Img={getImg(weather.DailyForecasts[i].Day.Icon)}
                        Night={weather.DailyForecasts[i].Night.IconPhrase}
                        NightImg={getImg(weather.DailyForecasts[i].Night.Icon)}
                        key={i} Max={weather.DailyForecasts[i].Temperature.Maximum.Value}
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        Min={weather.DailyForecasts[i].Temperature.Minimum.Value}
                    />
                }
                )

            }

        </div>
    );
}
export default CardList;