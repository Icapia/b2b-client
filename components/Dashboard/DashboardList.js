import { DashboardListData } from '../Dashboard/DashboardListData.js'
import Image from 'next/image'

export default function DashboardList() {
    return (
      <div className='dashboardList'>
          <div className="dashboardList__wrapper">
            {
              DashboardListData.map((item, index) => {
                return (
                  <div key={index} className="dashboardList__item">
                    <div className="dashboardList__item-image">
                      <Image width={30} height={30} src={item.image} alt={item.description} ></Image>
                    </div>
                    <h6>{item.value}</h6>
                    <p>{item.description}</p>
                  </div>
                );
              })
            }
          </div>
      </div>
    )   
}
  