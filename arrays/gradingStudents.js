function gradingStudents(grades = []) {
  return grades.map((el) => {
    if (el < 38) return el;
    else {
      const mod = el % 5;
      if (mod > 2) return el + (5 - mod);
      else return el;
    }
  });
}

console.log(gradingStudents([73, 67, 38, 33]));
