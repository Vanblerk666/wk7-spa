// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { AboutPage } from "./pages/AboutPage";

// Basic version shows message
/*
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to my website</h1>
      </div>
    </BrowserRouter>
  );
}
*/

// Version 2 - has nav link on page

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <h1>Welcome to my website</h1>
//         <Link to="/about">AboutPage</Link>

//         <Routes>
//           <Route path="/About" element={<AboutPage />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

//Version 3 - homepage with nav section

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <h1>Welcome to my website</h1>
      <nav>
        <Link to="/AboutPage">About</Link> | <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
