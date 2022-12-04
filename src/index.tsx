import { createRoot } from "react-dom/client"
import { Toaster, ToastOptions } from "react-hot-toast"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { Loader } from "./containers/Loader"
import { persistor, store } from "./redux"
import reportWebVitals from "./reportWebVitals"
import { Router } from "./router"
import * as serviceWorker from "./serviceWorker"
import "./styles/index.scss"

const root = createRoot(document.getElementById("root")!)

const toastOption: ToastOptions = {
  position: "top-right",
  duration: 3000,
}

root.render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <Router />
      <Toaster {...toastOption} />
    </PersistGate>
  </Provider>
  // </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
