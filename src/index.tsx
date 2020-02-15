import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development" && (module as any).hot) {
	(module as any).hot.accept();
}
