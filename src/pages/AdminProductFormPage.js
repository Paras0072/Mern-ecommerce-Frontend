import NavBar from "../features/navbar/Navbar";
import AdminProductForm from "../features/admin/components/AdminProductForm";
import React from "react";

function AdminProductFormPage() {
  return (
    <div>
      <NavBar>
        <AdminProductForm> </AdminProductForm>
      </NavBar>
    </div>
  );
}
export default AdminProductFormPage;
