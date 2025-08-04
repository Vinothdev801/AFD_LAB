import { useState } from 'react'

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        course: "",
    });

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData( prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`The Student ${formData.name}, registered for ${formData.course}`);
    }
  return (
    <div className='reg_form'>
        <h2>Student Register Form Using React</h2>
        <form onSubmit={handleSubmit}>
            <label>Name: </label><br />
            <input type='text' name='name' value={formData.name} onChange={handleChange}/>
            <br/>

            <label>Age: </label><br />
            <input type="number" name="age" value={formData.age} onChange={handleChange}/>
            <br />

            <label>Email: </label><br />
            <input type="email" name="email" value={formData.email}  onChange={handleChange}/>
            <br />

            <label>Course: </label><br />
            <select name="course" onChange={handleChange}>
                <option>select</option>
                <option value="AFD">AFD</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="Node">Node</option>
            </select>
            <br />

            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default RegisterForm