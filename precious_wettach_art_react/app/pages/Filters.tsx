import React from "react";
import {useFetchFiltersQuery} from "../features/galleryApi"

const Filters = () => {
    const {data} = useFetchFiltersQuery();
    console.log(data);



  return (
    <div className="p-4">
        Filters go here
    </div>
  )
}

export default Filters