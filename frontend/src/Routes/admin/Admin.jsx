import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

function Admin() {
  return (
    <>
    <AdminHeader/>
    {/* 메인 */}
    <div style={{paddingTop:"150px"}}>admin 페이지입니다</div>

    <AdminFooter/>
    </>
  )
}
export default Admin;