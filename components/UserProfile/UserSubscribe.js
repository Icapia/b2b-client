import { useState } from "react";
import EditUserSubscribes from "./UserProfileModal/EditUserSubsribes";

export default function UserSubscribe(props) {

  const userSubscribes = props.userSubscribes;
  const globalSubscribes = props.globalSubscribes;
  
  const [subscribe, setSubscribe] = useState({
    id: userSubscribes.subscribeId,
    purchDate: userSubscribes.subscribePurchasedDate
  });
  
  const getSubscribesInfo = () => {
    var result = [];
    Array.from(userSubscribes.subscribeId).map((item) => {
      result.push(globalSubscribes.filter(el => el.id == item));
    });
    return result;
  }
  
  const subscribesList = getSubscribesInfo();
  console.log(subscribesList)
  
  
  return (
    <div className="userSubscribe topline mt-25 ">
      <h4>Subscribe Information </h4>
      <div className="devider"></div>
      
      {
        subscribesList.map((item, index) => {
          const date = new Date(userSubscribes.subscribePurchasedDate[index]);
          const purchcasedDate = getTrueDateFormat(date);
          const validDate = addDaysForDate(date, item[0].duration);

          return(
            <div key={index} className="userSubscribe__item">
              <span>Subscribe Name: {item[0].name}</span>
              <span>Valid until: {validDate}</span>
              <span>Purchased: {purchcasedDate}</span>
            </div>
          );
        })
      }
      
      {/*<EditUserSubscribes></EditUserSubscribes>*/}
    </div>
  )
}


function getTrueDateFormat(date) {
  const dateDay = (date.getDate()) < 10 ? '0' + (date.getDate()) : (date.getDate());
  const dateMonth = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  const dateYear = date.getFullYear();
  
  return dateDay + '/' + dateMonth + '/' + dateYear;
}

function addDaysForDate (date, amount) {
  if(amount == 0) {
    return 'Unlimited';
  } else {
    date.setDate(date.getDate() + amount);
    const newDate = getTrueDateFormat(date);
    return newDate;
  }
}

