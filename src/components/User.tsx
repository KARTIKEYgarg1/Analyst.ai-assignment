import React from "react";
import { useState } from "react";
type UserProps = {
  arrd: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
  key: number;
};
export const User = (props: UserProps) => {
  const [clicked, setClicked] = useState(false);
  function viewDet() {
    setClicked(!clicked);
  }
  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <tbody>
          <tr>
            <td className="addHoverEffect">{props.arrd.username}</td>
            <td className="addHoverEffect">
              <b>Contact</b>
              <br /> {props.arrd.phone}
            </td>
            <td className="addHoverEffect">
              <b>City</b>
              <br /> {props.arrd.address.city}
            </td>
            <td className="addHoverEffect">
              <b>Zipcode</b>
              <br /> {props.arrd.address.zipcode}
            </td>
            <td>
              <button className="detailButton" onClick={viewDet}>
                {clicked ? "Hide Details" : "View Details"}
              </button>
            </td>
          </tr>
          {clicked ? (
            <tr className="detailsTab">
              <td colSpan={5}>
                <div>
                  <p>
                    <b>Description</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, iusto necessitatibus, eveniet deleniti harum, eius
                    quia ipsa perferendis a corporis temporibus quas laudantium.
                    Error, dolorem!
                  </p>
                </div>
                <div className="grid-container">
                  <div className="grid-item">
                    <div>
                      <p>
                        <b>Contact Person</b>
                      </p>
                      <p>{props.arrd.name}</p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div>
                      <p>
                        <b>Address</b>
                      </p>
                      <p>
                        {props.arrd.address.street},{props.arrd.address.suite}
                      </p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div>
                      <p>
                        <b>Email</b>
                      </p>
                      <p>{props.arrd.email}</p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div>
                      <p>
                        <b>Website</b>
                      </p>
                      <p>{props.arrd.company.name}</p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div>
                      <p>
                        <b>Company</b>
                      </p>
                      <p>{props.arrd.company.name}</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
    </div>
  );
};
