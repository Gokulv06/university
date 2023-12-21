const universities = [
    {
      name: "Harvard University",
      location: "Cambridge, Massachusetts, USA",
      foundedYear: 1636,
      type: "Private",
      ranking: 1,
    },
    {
      name: "Stanford University",
      location: "Stanford, California, USA",
      foundedYear: 1885,
      type: "Private",
      ranking: 2,
    },
    {
      name: "Massachusetts Institute of Technology (MIT)",
      location: "Cambridge, Massachusetts, USA",
      foundedYear: 1861,
      type: "Private",
      ranking: 3,
    },
    {
      name: "University of Oxford",
      location: "Oxford, United Kingdom",
      foundedYear: 1096,
      type: "Public",
      ranking: 4,
    },
    {
      name: "California Institute of Technology (Caltech)",
      location: "Pasadena, California, USA",
      foundedYear: 1891,
      type: "Private",
      ranking: 5,
    },
  ];
  
  // Q1
  const uniname = universities.map(university => university.name);
  console.log("Q1:", uniname);
  
  // Q2
  const totaluni = universities.length;
  console.log("Q2:",totaluni );
  
  // Q3
  const uniinUSA = universities.filter(university => university.location.includes("USA"));
  console.log("Q3:", uniinUSA);
  
  // Q4
  const uniafter1800 = universities.filter(university => university.foundedYear > 1800).map(university => university.name);
  console.log("Q4:",uniafter1800 );
  
  // Q5
  const toprankedUni = universities.filter(university => university.ranking <= 3);
  console.log(" Q5:",toprankedUni);
  