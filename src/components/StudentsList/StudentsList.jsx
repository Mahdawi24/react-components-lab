function StudentsList(){
     const students = ['Ahmad','Ali','Husna','Abdullah','Sarah','Zainab','Raghad','Sayed Hamed']
     return (
    <ul>
      {students.map((oneStudent) => {
        if(oneStudent === "Sayed Hamed") return null;
        return <li>{oneStudent}</li>
        })}
    </ul>
 )
}

export default StudentsList;