import AuthContext from "../Context/AuthContext";
import Image from "next/image";
import { Link } from "@mui/material";
import { useContext } from "react";

export const Profile = () => {
  const user = {
    id: 123,
    avatar: '',
  }

  return (
    <Link
      className={"sidebar__user-link"}
      href={`/users/${user.id}`}
    >
      <a>
        <div className="sidebar__user">
          <div className="sidebar__user-logo">
            <Image
              width={40}
              height={40}
              src={`http://localhost:3000${user.avatar}`}
              alt=""
            ></Image>
          </div>
        </div>
      </a>
    </Link>
  );
}
