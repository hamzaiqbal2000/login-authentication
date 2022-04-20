import React, { useState } from "react";
import CallDetails from "../CallDetails/CallDetails";
import Pagination from "../Pagination/Pagination";
import { useData } from "../../context/CallContext";

const DisplayCalls = () => {
  const { data, setData } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  //Get the current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mt-4 ">
      <div className="container col-sm-1">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </div>
      <CallDetails data={currentPosts} />
    </div>
  );
};

export default DisplayCalls;
