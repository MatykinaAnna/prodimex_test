import Head from '../../../shared/components/head/head'
import LoginForm from '../../../shared/components/loginForm/ui/loginForm'
import styles from './login.module.scss'

const Login = () => {
  return (
    <div>
      <Head />
      <div className={styles.wrapper_LoginForm}>
        <LoginForm />
      </div>
    </div>
  )
}
export default Login
