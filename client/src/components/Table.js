import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../actions.js";
import Loader from "./Loader";
import { Link } from "react-router-dom";
const Table = ({ setCurrentId, loading }) => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="table-container">
      <table className="table table-div">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* <tbody>
              {paginatedItems.slice(0, 20).map((item, ind) => (
                <tr key={item.id}>
                  <th scope="row">{ind + currentPage * itemsPerPage + 1}</th>
                  <td>
                    {item.first_name} {item.last_name}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.income}</td>
                  <td>{item.city}</td>
                  <td>{item.car}</td>
                  <td>{item.phone_price}</td>
                  <td
                    className="quote"
                    onClick={(e) => {
                      e.target.classList.toggle("white-space");
                    }}
                  >
                    "{item.quote}"
                  </td>
                </tr>
              ))}
            </tbody> */}
            {/* <caption>
              <ReactPaginate
                previousLabel={
                  <img src={PrevBtn} alt="" style={{ width: "24px" }} />
                }
                nextLabel={
                  <img src={NextBtn} alt="" style={{ width: "24px" }} />
                }
                pageCount={pageCount}
                onPageChange={handlePageChange}
                pageLinkClassName={"page-lnk"}
                containerClassName="pagination"
                activeClassName="active"
              />
            </caption> */}
            <tbody>
              {users.map((user, id) => {
                return (
                  <tr>
                    <td>{id + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      {/* {user.hobbies.map((hobby, id) =>
                        id === user.hobbies.length - 1 ? hobby : hobby + ", "
                      )} */}
                      {user.hobbies}
                    </td>
                    <td>
                      <button onClick={setCurrentId(user._id)}>
                        <Link to={"/form"}>update</Link>
                      </button>
                    </td>
                    <td>
                      <button onClick={() => dispatch(deleteUsers(user._id))}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};

export default Table;
