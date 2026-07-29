import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Error from "./pages/Error.jsx";
import Registration from "./users/Registration.jsx";
import Login from "./users/Login.jsx";
import Addtodo from "./todo/Addtodo.jsx";
import Alltodos from "./todo/Alltodos.jsx";
import UpdateTodo from "./todo/UpdateTodo.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addtodo" element={<Addtodo />} />
        <Route path="/alltodos" element={<Alltodos />} />
        <Route path="/updatetodo" element={<UpdateTodo />} />
        <Route path="*" element={<Error />} />


      </Routes>
    </Layout>
  )
}

export default App;