import { useState } from 'react';
import './App.css'

function App() {

  // // form submit validation
  // const input = document.getElementById('name');
  // const select = document.getElementById('career-path');
  // const errorMsg = document.getElementById('error-msg');

  // input.addEventListener("invalid" , (e) => {
  //   e.preventDefault();
  //   errorMsg.textContent = 'Please Enter Name';
  // })
  // select.addEventListener("invalid" , (e) => {
  //   e.preventDefault();
  //   errorMsg.textContent = 'Please Select Career Path';
  // })

  const [formFields, setFormFields] = useState([{ input: '', select: '' }]);
  const [errors, setErrors] = useState([]);

  const handleInputChange = (index, value) => {
    const updateFields = [...formFields];
    updateFields[index].input = value;
    // console.log(updateFields);
    setFormFields(updateFields);
  }

  const handleSelectChange = (index, value) => {
    const updateFields = [...formFields];
    updateFields[index].select = value;
    setFormFields(updateFields);
  }

  const validFields = () => {
    const validErrors = formFields.map((field) => ({
      input: field.input === '' ? 'Please Enter Name' : '',
      select: field.select === '' ? 'Please Select Career Path' : '',
    }));
    // console.log(validErrors);
    setErrors(validErrors);

    return !validErrors.some((field) => field.input || field.select);
  }

  const [submittedFields, setSubmittedFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validFields()) {
      console.log('Form Submitted');
      setSubmittedFields(formFields);
      alert('Form Submitted');
    }
  }

  const handleAddField = (e) => {
    e.preventDefault();
    setFormFields([...formFields, { input: '', select: '' }]);
  }

  return (
    <>
      <h1 className='text-2xl font-semibold'>Frontend Developer Challenge for 6sense Technologies</h1>

      <h1 className='my-6 text-2xl'>Choose career Path for your Friends</h1>
      {/* form and select box  */}

      <form onSubmit={handleSubmit} className=''>
        {/* input filed  */}

        {
          formFields.map((field, index) => (
            <div key={index} className='flex justify-center items-center gap-2 mb-1'>
              <div>
                <label htmlFor='name' className='mr-2'>{index+1}</label>
                <input
                  type='text'
                  className='border border-gray-300 p-2'
                  placeholder='Enter Name'
                  value={field.input}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                {errors[index]?.input && (
                  <p className="text-red-500 text-sm mt-1">{errors[index].input}</p>
                )}
              </div>
              {/* select box */}
              <div>
                <select
                  className='border border-gray-300 p-2'
                  onChange={(e) => handleSelectChange(index, e.target.value)}>
                  <option value=''>Select Career Path</option>
                  <option value='Frontend Developer'>Frontend Developer</option>
                  <option value='Backend Developer'>Backend Developer</option>
                  <option value='Fullstack Developer'>Fullstack Developer</option>
                  <option value='DevOps Engineer'>DevOps Engineer</option>
                  <option value='Data Scientist'>Data Scientist</option>
                </select>
                {errors[index]?.select && (
                  <p className="text-red-500 text-sm mt-1">{errors[index].select}</p>
                )}
              </div>
            </div>
          ))
        }
        {/* buttons  add and submit */}
        <div className=''>
          <button onClick={handleAddField} className='btn btn-primary btn-sm mr-2 mt-4'>+ Add More</button>
          <button type='submit' className='btn btn-success btn-sm'>Submit</button>
        </div>
      </form>

      {/* state chnage showing in h3 tag  */}
      <h3 className='mt-4'>Form State:</h3>
      {
        formFields.map((field, index) => (
          <div key={index}>
            <h3>Name {index+1}: {field.input}</h3>
            <h3>Career Path {index+1}: {field.select}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
