import { useSelector } from "react-redux"

export default function CodeTab() {

  return (
    <textarea
      spellCheck="false"
      className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline resize-none"
    >
    </textarea>
  )
}
