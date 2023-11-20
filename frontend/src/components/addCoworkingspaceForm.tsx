export default function AddCoworkingspaceForm({
  action,
}: {
  action: (addCoworkingspaceForm: FormData) => Promise<never>;
}) {
  return (
    <form action={action} className="ml-28 mb-12">
      <div className="text-xl text-blue-700">Add Coworking Space Form</div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="Coworking Space Name"
          className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          required
          id="address"
          name="address"
          placeholder="Address"
          className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="district">
          District
        </label>
        <input
          type="text"
          required
          id="district"
          name="district"
          placeholder="District"
          className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="province">
          Province
        </label>
        <input
          type="text"
          required
          id="province"
          name="province"
          placeholder="Province"
          className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-32 block text-gray-700 pr-4" htmlFor="postalcode">
          Postal Code
        </label>
        <input
          type="text"
          required
          id="postalcode"
          name="postalcode"
          placeholder="Postal Code"
          className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-40 block text-gray-700 pr-4" htmlFor="tel">
          Phone Number
        </label>
        <input
          type="tel"
          required
          id="tel"
          name="tel"
          pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone Number"
          className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-32 block text-gray-700 pr-4" htmlFor="picture">
          Picture URL
        </label>
        <input
          type="url"
          required
          id="picture"
          name="picture"
          placeholder="URL"
          className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>

      <button
        type="submit"
        className="ml-0 mt-4 block rounded-md bg-sky-600 hover:bg-indigo-950 px-3 py-2 text-white shadow-sm"
      >
        Add Coworking Space
      </button>
    </form>
  );
}
