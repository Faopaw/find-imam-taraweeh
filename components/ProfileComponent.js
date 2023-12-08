import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./ProfileComponent.module.css";
import Image from "next/image";
import { FaUserAlt, FaRegMap, FaGlobe, FaRegAddressCard } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

export default function ProfileComponent(props) {
  const style = {
    width: "160px",
    height: "160px",
    border: "3px solid #0006b0",
    borderRadius: "50%"
  };

  return (
    <>
      <section className={classes.container}>
        <div className={classes.imageandname}>
          <div className={classes.imagecontainer}>
            <Image
              src={props.data.picture}
              alt={props.data.name}
              style={style}
              width={150}
              height={150}
            />
          </div>
          <h2 className={classes.username}>{props.data.name}</h2>
        </div>
        <div className={classes.userdetails}>
          <ul className={classes.listcontianer}>
            <li className={classes.listitem}>
              <FaRegAddressCard />
              <div className={classes.listitemtext}>
                <span className={classes.infotag}>Email</span>
                {props.data.email}
              </div>
            </li>
            <li className={classes.listitem}>
              <GoVerified />
              <div className={classes.listitemtext}>
                <span className={classes.infotag}>Verified Account</span>
                {props.data.email_verified.toString()}
              </div>
            </li>
            <li className={classes.listitem}>
              <FaUserAlt />
              <div className={classes.listitemtext}>
                <span className={classes.infotag}>Surname</span>
                {props.data.family_name}
              </div>
            </li>
            <li className={classes.listitem}>
              <FaUserAlt />
              <div className={classes.listitemtext}>
                <span className={classes.infotag}>Forename</span>
                {props.data.given_name}
              </div>
            </li>
            <li className={classes.listitem}>
              <FaRegMap />
              <div className={classes.listitemtext}>
                <span className={classes.infotag}> Locale: </span>
                {props.data.locale}
              </div>
            </li>
            {/* <li className={classes.listitem}>
              <FaGlobe />
              <div className={classes.listitemtext}>
                <span className={classes.infotag}> Last Updated: </span>
                {props.data.updated_at}
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}
