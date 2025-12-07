import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { FaUserAlt, FaRegMap, FaGlobe, FaRegAddressCard } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { ProfileComponentProps } from "../types";

export default function ProfileComponent(props: ProfileComponentProps) {
  const style: React.CSSProperties = {
    width: "160px",
    height: "160px",
    border: "3px solid #0006b0",
    borderRadius: "50%"
  };

  return (
    <>
      <section className="flex flex-col w-full p-4 gap-8 justify-center bg-background text-foreground md:flex-row md:items-center">
        <div className="flex flex-col justify-center items-center w-full gap-5 pt-8 md:justify-start md:items-center md:self-center md:w-[30%] md:gap-[15px] md:pt-0">
          <div className="w-[150px] h-[150px]">
            <Image
              src={props.data.picture || ""}
              alt={props.data.name || "Profile"}
              style={style}
              width={150}
              height={150}
            />
          </div>
          <h2 className="md:pt-4">{props.data.name}</h2>
        </div>
        <div className="md:w-[70%]">
          <ul className="list-none text-xl md:max-w-[80%]">
            <li className="font-normal p-5 bg-card text-card-foreground border border-border shadow-[0px_0px_8px_0px_hsl(var(--border)/0.3)] rounded-[var(--radius)] my-8 mx-auto text-lg flex flex-row justify-start items-center gap-8">
              <FaRegAddressCard />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">Email</span>
                {props.data.email}
              </div>
            </li>
            <li className="font-normal p-5 bg-card text-card-foreground border border-border shadow-[0px_0px_8px_0px_hsl(var(--border)/0.3)] rounded-[var(--radius)] my-8 mx-auto text-lg flex flex-row justify-start items-center gap-8">
              <GoVerified />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">Verified Account</span>
                {props.data.email_verified?.toString()}
              </div>
            </li>
            <li className="font-normal p-5 bg-card text-card-foreground border border-border shadow-[0px_0px_8px_0px_hsl(var(--border)/0.3)] rounded-[var(--radius)] my-8 mx-auto text-lg flex flex-row justify-start items-center gap-8">
              <FaUserAlt />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">Surname</span>
                {props.data.family_name}
              </div>
            </li>
            <li className="font-normal p-5 bg-card text-card-foreground border border-border shadow-[0px_0px_8px_0px_hsl(var(--border)/0.3)] rounded-[var(--radius)] my-8 mx-auto text-lg flex flex-row justify-start items-center gap-8">
              <FaUserAlt />
              <div className="flex flex-col justify-center">
                <span className="font-semibold">Forename</span>
                {props.data.given_name}
              </div>
            </li>
            <li className="font-normal p-5 bg-card text-card-foreground border border-border shadow-[0px_0px_8px_0px_hsl(var(--border)/0.3)] rounded-[var(--radius)] my-8 mx-auto text-lg flex flex-row justify-start items-center gap-8">
              <FaRegMap />
              <div className="flex flex-col justify-center">
                <span className="font-semibold"> Locale: </span>
                {props.data.locale}
              </div>
            </li>
            {/* <li className="font-normal p-5 bg-card text-card-foreground border border-border shadow-[0px_0px_8px_0px_hsl(var(--border)/0.3)] rounded-[var(--radius)] my-8 mx-auto text-lg flex flex-row justify-start items-center gap-8">
              <FaGlobe />
              <div className="flex flex-col justify-center">
                <span className="font-semibold"> Last Updated: </span>
                {props.data.updated_at}
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}