import useInput from "../hooks/useInput";

const Input = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`you are signing in as ${usernameInput.value} with ${passwordInput.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br/>
        <label>Password</label>
        <input 
          // value={password}
          // onChange={event => setPassword(event.target.value)}
          { ...passwordInput }
        />
        <br/>
        <button type="submit">Login!</button>

      </form>
    </div>
  );
};

export default Input;
