import Link from 'next/link';

import styles from '../styles/Formulario.module.css';

import Cartao from '../components/Cartao';

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>

        <Cartao></Cartao>
      </div>

      <div>
        <Cartao></Cartao>

        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/4/2`} className={styles.link}>
            <h2>
              Iniciar
            </h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
