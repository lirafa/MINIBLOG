import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    const res = await createUser(user);

    console.log(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="container_form">
      <div className="text">
        <h1>Cadastre-se para postar</h1>
        <p className="p_form">Crie seu usuário e compartilhe suas histórias</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span>Nome do usuário:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Digite seu nome de usuário"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>

        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label className="input-label">
          <span>Senha:</span>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              type="button"
              className="eye-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>

        <label>
          <span>Confirme sua senha:</span>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>

        {!loading && <button className="btn">Enviar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
