import Link from "next/link";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Hello World</h1>
        <div className="space-y-4">
          <p>
            <span className="text-gray-600">Go to </span>
            <Link href="/about" className="text-blue-600 hover:underline font-medium">
              About
            </Link>
          </p>
          <p>
            <span className="text-gray-600">Go to </span>
            <Link href="/play-screen" className="text-blue-600 hover:underline font-medium">
              Play Screen
            </Link>
          </p>
          <p>
            <span className="text-gray-600">Go to </span>
            <Link href="/contact-us" className="text-blue-600 hover:underline font-medium">
              Contact Us
            </Link>
          </p>
          <p>
            <span className="text-gray-600">Go to </span>
            <Link href="/show-url-value/Shailendra" className="text-blue-600 hover:underline font-medium">
              Show URL Value by [slug]
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
