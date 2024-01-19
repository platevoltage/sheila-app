import { useEffect, useState } from "react";

import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("list", JSON.stringify(list));
    }
  }, [list]);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("list") || "") || []);
  }, []);

  return (
    <div style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", flexDirection: "row", overflow: "clip"}}>

      <div style={{maxHeight: "calc(100% - 300px)", height: "calc(100% - 300px)", overflow: "scroll", position: "relative", margin: "50px 0 50px", backgroundColor: "#111111", padding: "50px" }}>
        {
          list.map((item, i) => {
            return <div style={{color: i === 0 ? "#6666ff" : "#ffffff"}} key={i}>{item}</div>;
          })
        }
      </div>
      <div style={{position: "absolute", bottom: "50px"}}>
        <Button sx={{backgroundColor: "#5555ff", height: "70px"}} variant="contained" onClick={() => setList([(new Date()).toLocaleString(), ...list])}></Button>
      </div>
      
    </div>
  );
}

export default App;
