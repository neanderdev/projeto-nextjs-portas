import Link from 'next/link';
import { useState } from 'react';

import styles from '../styles/Jogo.module.css';

import Porta from '../components/Porta';

import { atualizarPortas, criarPortas } from '../functions/portas';

export default function Jogo() {
    const [portas, setPortas] = useState(criarPortas(10, 2));

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta
                key={porta.numero}
                value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
            />
        });
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>

            <div className={styles.botoes}>
                <Link href='/'>
                    <button>
                        Reiniciar Jogo
                    </button>
                </Link>
            </div>
        </div>
    );
}