import Link from "next/link"


function Footer() {
  return (
    <div className="h-10 flex justify-center items-center bg-yellow-500">
        <Link href={`https://github.com/chocoscoding`} target="_blank" rel="noreferrer noopener" className="text-black">Build with ❤️ by chocoscoding</Link>
    </div>
  )
}

export default Footer