import { useState } from 'react'
import styles from './loginForm.module.scss'
const LoginForm = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  async function onClickLogin() {
    // const response: void | Response = await fetch('', {
    //   method: 'post',
    //   body: '',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // }).then()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.h1}>Вход</div>
      <div className={styles.h2}>
        Для входа укажите имя пользователя и пароль.
      </div>
      <hr />
      <div className={styles.input_email}>
        <div className={styles.label}>Email</div>
        <input
          type="text"
          name=""
          id=""
          value={login}
          onChange={(event) => {
            setLogin(event.target.value)
          }}
        />
      </div>
      <div className={styles.input_password}>
        <div className={styles.label}>Пароль</div>
        <input
          type="password"
          name=""
          id=""
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>
      <div className={styles.remember}>
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Запомнить?</label>
      </div>
      <div className={styles.btn_login}>
        <button onClick={onClickLogin}>Войти</button>
      </div>
    </div>
  )
}
export default LoginForm
