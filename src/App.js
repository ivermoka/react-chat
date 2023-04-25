import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat"; 

const style = {
  appContainer: `w-screen h-screen bg-black mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-500 mt-10 shadow-xl border relative`
}

function App() {
  
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
        <Chat />
      </section>
    </div>
  );
}

export default App;
