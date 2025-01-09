import './App.css'

function App() {


  return (
    <>
      <h1 className='text-2xl font-semibold'>Frontend Developer Challenge for 6sense Technologies</h1>

      <h1 className='my-6 text-2xl'>Choose career Path for your Friends</h1>
      {/* form and select box  */}

      <form className='flex justify-center items-center gap-2'>
        {/* input filed  */}

        <div className='w-1/2'>
          <input
            type="text"
            id='name' required
            placeholder='Input Name'
            className='border border-gray-300 rounded w-full p-2'
          />
        </div>
        {/* Select Option field */}

        <div className='w-1/2'>
          <select id='career-path' required className='border border-gray-300 w-full rounded p-2'>
            <option value="">Select Career Path</option>
            <option value="1">Doctor</option>
            <option value="2">Engineer</option>
            <option value="3">Army</option>
            <option value="4">Scientist</option>
          </select>
          <p className='text-red-500'></p>
        </div>
      </form>
    </>
  )
}

export default App
