import "./Hero.css"
const ContactUs = () => {
  return (
    <div id="contact" className="container flex min-h-screen pb-5">
      <div className="rounded-s-md flex-1 flex items-center justify-center bg-white shadow-xl p-8">
        <form className="w-full max-w-xs">
          <h2 className="orbitron-uniquifier text-2xl font-bold mb-4">Welcome back!</h2>
          <p className="text-gray-600 mb-6">Please enter your details.</p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
            />
            <label className="text-sm text-gray-600">Remember for 30 days</label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            <a href="#" className="text-green-500 no-underline">Forgot password?</a>
          </p>

          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-600">Or</span>
          </div>

          <button
            className="w-full bg-gray-200 text-gray-700 font-semibold py-2 rounded-md mt-2"
          >
            Sign in with Google
          </button>
        </form>
      </div>

      <div className="rounded-e-md myss flex-1 hidden md:flex items-center justify-center shadow-xl p-8">
        <div className="max-w-md">
          <blockquote className="text-lg italic text-gray-50 mb-4">
            “We've been using Untitled to kick start every new project and can't imagine working without it.”
          </blockquote>
          <p className="text-gray-50 font-semibold">Andi Lane</p>
          <p className="text-sm text-gray-50">Founder, Catalog</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;