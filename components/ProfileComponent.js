import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./ProfileComponent.module.css";
import Image from "next/image";

export default function ProfileComponent(props) {
  const style = {
    width: "150px",
    height: "150px",
    border: "3px solid #328BE9",
    borderRadius: "50%",
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
          <h2 className={classes.username}>{props.data.email}</h2>
        </div>
        <div className={classes.userdetails}>
          <ul className={classes.listcontianer}>
            <li className={classes.listitem}>
              <span className={classes.infotag}>Email: </span>
              {props.data.email}
            </li>
            <li className={classes.listitem}>
              <span className={classes.infotag}>Verified: </span>
              {props.data.email_verified.toString()}
            </li>
            <li className={classes.listitem}>
              <span className={classes.infotag}>Surname: </span>
              {props.data.family_name}
            </li>
            <li className={classes.listitem}>
              <span className={classes.infotag}>Forename: </span>
              {props.data.given_name}
            </li>
            <li className={classes.listitem}>
              <span className={classes.infotag}>Locale: </span>
              {props.data.locale}
            </li>
            <li className={classes.listitem}>
              <span className={classes.infotag}> Last Updated: </span>
              {props.data.updated_at}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
