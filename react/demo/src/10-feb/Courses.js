
import Course from './Course'
import OnlineCourse from './OnlineCourse'


export default function Courses() {

    const courses = [
        { title: "Python", duration: 36, fee: 5000 },
        { title: "Frontend Developer", duration: 30, fee: 4000 },
        { title: "Java EE", duration: 40, fee: 6000}
    ]

    return (
        <>
            <h1>Courses</h1>
            <table border="1" cellPadding="5px">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Duration (hours)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map(
                            (course, index) =>
                            {
                                return <OnlineCourse course={course} index={index} key={index} />
                            }
                          
                        )
                    }
                </tbody>

            </table>
        </>
    )

}

