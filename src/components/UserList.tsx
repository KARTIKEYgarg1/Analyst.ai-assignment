import React from "react";
import { User } from "./User";
import { useState } from "react";
import axios from "axios";
export const UserList = () => {
  var ar = [];
  for (let i = 0; i < 3; i++) {
    ar.push({
      id: 1,
      name: "A",
      username: "A",
      email: "A@gmail.com",
      address: {
        street: "ABC",
        suite: "DEF",
        city: "S",
        zipcode: "9",
        geo: {
          lat: "-8",
          lng: "2",
        },
      },
      phone: "1",
      website: "h",
      company: {
        name: "R",
        catchPhrase: "t",
        bs: "harn",
      },
    });
  }
  const [arr, setArr] = useState(ar);
  window.onload = async () => {
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    };
    await axios
      .request(options)
      .then(function (response: any) {
        setArr(response.data);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  };

  var numbers: Array<number> = [];
  for (let i = 0; i < arr.length; i++) {
    numbers.push(i);
  }
  const [page, setPage] = useState(numbers.slice(0, 3));
  function decrease() {
    if (page[0] === 0) {
      setPage([9]);
    } else if (page[0] === 9) {
      setPage([6, 7, 8]);
    } else {
      setPage([page[0] - 3, page[1] - 3, page[2] - 3]);
    }
  }
  function increase() {
    if (page[0] === 9) {
      setPage([0, 1, 2]);
    } else if (page[0] === 6) {
      setPage([9]);
    } else {
      setPage([page[0] + 3, page[1] + 3, page[2] + 3]);
    }
  }
  return (
    <div style={{ marginTop: "5%" }}>
      <div>
        {arr[0].name !== "A" ? (
          page.map((pageNum, idx) => <User arrd={arr[pageNum]} key={idx} />)
        ) : (
          <div className="spinner"></div>
        )}
      </div>
      {arr[0].name !== "A" ? (
        <div className="pageNav">
          <button onClick={decrease}>&lt;</button>
          {numbers.slice(0, 3).map((bn, id) => (
            <button
              onClick={() => {
                setPage(numbers.slice(bn * 3, bn * 3 + 3));
              }}
              key={id}
            >
              {bn + 1}
            </button>
          ))}
          <button onClick={() => setPage([9])}>4</button>
          <button onClick={increase}>&gt;</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
