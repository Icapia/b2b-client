
export default function UserLogs(props) {
  
  const userLogs = props.userLogs;
  const userLogsActions = Array.from(userLogs.actions);
  
  return (
    <div className={props.className || "userLogs topline mt-25"}>
      <h4>Activity Log </h4>
      <div className="devider"></div>
      {
        userLogsActions.map((item) => {
          return (
            <div key={item.actionId} className="userLogs__item">
              <div className="userLogs__item-title">
                <span>{item.actionName}</span>
              </div>
              <div className="userLogs__item-date">
                <span>{item.actionDate}</span>
                <span>{item.actionTime}</span>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}