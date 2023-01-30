import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '../../../styles/Jogo.module.css';

import Porta from '../../../components/Porta';

import ModelPorta from '../../../model/porta';
import { atualizarPortas, criarPortas } from '../../../functions/portas';

export default function Jogo() {
    const router = useRouter();

    const [valido, setValido] = useState(false);
    const [portas, setPortas] = useState<ModelPorta[]>([]);

    useEffect(() => {
        const portas = Number(router.query.portas);
        const temPresente = Number(router.query.temPresente);

        const qtdePortasValida = portas >= 3 && portas <= 100;
        const temPresenteValido = temPresente >= 1 && temPresente <= portas;

        setValido(qtdePortasValida && temPresenteValido);
    }, [router?.query, portas]);

    useEffect(() => {
        const portas = Number(router.query.portas);
        const temPresente = Number(router.query.temPresente);

        setPortas(criarPortas(portas, temPresente));
    }, [router?.query]);

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
                {
                    valido
                        ? renderizarPortas()
                        : <h1>Valores inválidos</h1>
                }
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