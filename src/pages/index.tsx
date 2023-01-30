import { useState } from 'react';

import Porta from '../components/Porta';

import ModelPorta from '../model/porta';

export default function Home() {
  const [p1, setP1] = useState(new ModelPorta(1));

  return (
    <div style={{ display: 'flex' }}>
      <Porta value={p1} />
    </div>
  )
}
