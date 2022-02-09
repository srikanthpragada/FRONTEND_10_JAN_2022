
export default function Courses() {

    const courses = [
        { title: "Python", duration: 36 },
        { title: "Frontend Developer", duration: 30 },
        { title: "Java EE", duration: 40 }
    ]

    function generateCourseRow(course, idx) {
        return (
            <tr key={idx}>
                <td> {course.title}</td>
                <td style={{ textAlign: 'center' }}>
                    {course.duration}
                </td>
            </tr>

        )  // return 
    }

    return (
        <>
            <h1>Courses</h1>
            <table border="1" cellPadding="5px">
                <thead>
                    <tr><th>Title</th> <th>Duration (hours)</th></tr>
                </thead>
                <tbody>
                    {
                        courses.map(generateCourseRow)
                    }
                </tbody>

            </table>
        </>
    )

}

