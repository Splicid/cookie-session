import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-black">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
        </form>
    </div>
    </div>
  );
}
