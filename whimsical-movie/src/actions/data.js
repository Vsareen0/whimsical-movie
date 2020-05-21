import fetch from "isomorphic-fetch";

export const fetchData = ({ searchBy: sb, type, year, searchValue }) => {
  let searchBy = "";
  if (sb === "id") {
    searchBy += "i";
  } else {
    searchBy += "t";
  }

  return fetch(
    `http://www.omdbapi.com/?apikey=c6f0841f&${searchBy}=${searchValue}&s=${searchValue}&type=${type}&y=${year}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const fetchNextData = (
  { searchBy: sb, type, year, searchValue },
  currentPage
) => {
  let searchBy = "";
  if (sb === "id") {
    searchBy += "i";
  } else {
    searchBy += "t";
  }

  return fetch(
    `http://www.omdbapi.com/?apikey=c6f0841f&${searchBy}=${searchValue}&s=${searchValue}&type=${type}&y=${year}&page=${currentPage}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const fetchPlot = (id) => {
  return fetch(`http://www.omdbapi.com/?apikey=c6f0841f&i=${id}&plot=full`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
