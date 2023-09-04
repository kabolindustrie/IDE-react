

export default function CodeTab({code, id}) {

  return (
    <textarea
    value={code}
      spellCheck="false"
      className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline resize-none"
    >
    </textarea>
  )
}
