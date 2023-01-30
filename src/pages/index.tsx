import { useState } from 'react';

import Porta from '../components/Porta';
import { criarPortas } from '../functions/portas';

import ModelPorta from '../model/porta';

export default function Home() {
  const [p1, setP1] = useState(new ModelPorta(1));
  const [p2, setP2] = useState(new ModelPorta(2));
  const [p3, setP3] = useState(new ModelPorta(3));

  console.log(criarPortas(3, 1));

  return (
    <div style={{ display: 'flex' }}>
      <Porta
        value={p1}
        onChange={novaPorta => setP1(novaPorta)}
      />

      <Porta
        value={p2}
        onChange={novaPorta => setP2(novaPorta)}
      />

      <Porta
        value={p3}
        onChange={novaPorta => setP3(novaPorta)}
      />
    </div>
  )
}
