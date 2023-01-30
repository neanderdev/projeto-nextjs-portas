import { MouseEvent } from 'react';

import styles from '../styles/Porta.module.css';

import ModelPorta from '../model/porta';

interface PortaProps {
    value: ModelPorta;
    onChange: (novaPorta: ModelPorta) => void;
}

export default function Porta(props: PortaProps) {
    const porta = props.value;

    const selecionada = porta.selecionada ? styles.selecionada : '';

    const alternarSelecao = (event: MouseEvent<HTMLDivElement>) => props.onChange(porta.alternarSelecao());

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>

                    <div className={styles.macaneta}></div>
                </div>
            </div>

            <div className={styles.chao}></div>
        </div>
    );
}