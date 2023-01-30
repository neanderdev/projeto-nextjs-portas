import styles from '../styles/Porta.module.css';

import ModelPorta from '../model/porta';

interface PortaProps {
    value: ModelPorta;
}

export default function Porta(props: PortaProps) {
    const porta = props.value;

    const selecionada = porta.selecionada ? styles.selecionada : '';

    return (
        <div className={styles.area}>
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