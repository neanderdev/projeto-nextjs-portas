import { MouseEvent } from 'react';

import styles from '../styles/Porta.module.css';

import ModelPorta from '../model/porta';

import Presente from './Presente';

interface PortaProps {
    value: ModelPorta;
    onChange: (novaPorta: ModelPorta) => void;
}

export default function Porta(props: PortaProps) {
    const porta = props.value;

    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';

    const alternarSelecao = (event: MouseEvent<HTMLDivElement>) => props.onChange(porta.alternarSelecao());
    const abrir = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        props.onChange(porta.abrir());
    };

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>

                <div
                    className={styles.macaneta}
                    onClick={abrir}
                ></div>
            </div>

        );
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {
                    porta.fechada
                        ? renderizarPorta()
                        : porta.temPresente
                            ? <Presente />
                            : false
                }
            </div>

            <div className={styles.chao}></div>
        </div>
    );
}