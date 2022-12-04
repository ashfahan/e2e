import { useEffect, useState } from "react"

export const useExternalScript = (url: string, options?: { skip: boolean }) => {
  let [state, setState] = useState<"loading" | "idle" | "ready" | "error">(url ? "loading" : "idle")

  useEffect(() => {
    if (options?.skip === true) {
      setState("idle")
      return
    }

    let script = document.querySelector(`script[src="${url}"]`) as HTMLScriptElement | null

    if (script) setState("ready")

    const handleScript = (e: Event) => {
      setState(e.type === "load" ? "ready" : "error")
    }

    if (!script) {
      script = document.createElement("script")
      script.type = "application/javascript"
      script.src = url
      script.async = true
      document.body.appendChild(script)
      script.addEventListener("load", handleScript)
      script.addEventListener("error", handleScript)
    }

    script.addEventListener("load", handleScript)
    script.addEventListener("error", handleScript)

    return () => {
      script?.removeEventListener("load", handleScript)
      script?.removeEventListener("error", handleScript)
    }
  }, [url, options?.skip])

  return state
}
