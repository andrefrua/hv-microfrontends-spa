const fetchPeople = async () => {
  const res = await fetch("https://swapi.co/api/people");
  return await res.json();
};

const fetchDetails = async id => {
  const res = await fetch(`https://swapi.co/api/people/${id}`);
  return await res.json();
};

export { fetchPeople, fetchDetails };
