// prior to es6 we used + to concatenate strings.

const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
  };
  
  const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
  }

  let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to get your report card.'
  console.log(message)

  // above gets more complicated when we have to right multi line comment.

  //template literals came into picture.

  let newmessage = `${student.name} please see ${teacher.name} in ${teacher.room} to get your report card.`
  console.log(newmessage)