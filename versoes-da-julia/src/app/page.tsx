import { StudentTable } from "@/components/studentTable"
import { students } from "@/data/students"
function Page() {
  return (
    <div className="container mx-auto ">
      <StudentTable students={students} />
    </div>
  )
}
export default Page
