import React from 'react'

export const Jsx2 = () => {
    const student = {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        skills: ["HTML", "CSS", "JavaScript"],
        address: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
        },
      }
  return (
    <ul>
        <li>
            <b>First Name  :  </b><span>{student.firstName}</span>
        </li>
        <li>
            <b>Last Name  :  </b><span>{student.lastName}</span>
        </li>
    </ul>
  )
}
